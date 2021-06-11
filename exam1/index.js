const albumAPI = (() => {
  const getAllAlbums = (ARTIST_NAME) => {
    const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`;
    console.log(`fetching ${ARTIST_NAME}`);
    return fetchJsonp(url)
      .then((response) => response.json())
    }
  return {
    getAllAlbums,
  };
})();

const View = (() => {
  const domString = {
    searchResult: 'card-container',
    searchInput: 'search__input'
  }
  const render = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  }

  const createCards = (numOfAlbums, input, todoArray) => {
    if (numOfAlbums >= 50) numOfAlbums=50;
    let temp = '';
    // info
    temp += `<div class="cards-container__info">${numOfAlbums} results for "${input}"</div>`;
    // card container
    temp += '<div class="card-container">'
    for (let i=0; i<todoArray.length; ++i) {
        if(i>=50) break;
      temp += `
        <div class="card">
          <img class="card__img" src="${todoArray[i].artworkUrl100}" alt="">
          <div class="card__content">${todoArray[i].collectionName}</div>
        </div>
      `
    }
    temp += '</div>'
    return temp;
  }

  return {
    domString,
    render,
    createCards,
  };
})();


const Model = ((api) => {
  class State {
    #searchinput = '';
    get searchinput() {
      return this.#searchinput;
    }
    set searchinput(inputvalue) {
      this.#searchinput = inputvalue;
    }
  }
  const getAllAlbums= api.getAllAlbums;
  return {
    getAllAlbums,
    State
  }
})(albumAPI);

const AppControl = ((view, model) => {
  const state = new model.State();
  const addSearch = () => {
    const inputElement = document.querySelector('.' + view.domString.searchInput);
    inputElement.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        console.log('Enter');
        state.searchinput = event.target.value;
        model.getAllAlbums(state.searchinput).then(data => {
          searchTmp = view.createCards(data.resultCount, state.searchinput, data.results);
          const searchElement = document.querySelector('.' + View.domString.searchResult);
          view.render(searchElement, searchTmp);
        });
      }
    });
  }
  const init = () => {
    addSearch();
  }
  return {
    init
  }
})(View, Model);

AppControl.init();