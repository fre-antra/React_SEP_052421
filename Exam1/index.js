const AppApi = (() => {
  const getAllAlbums = (artistName) => {
    return fetchJsonp(
      `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=50`
    ).then((response) => response.json());
  };

  return { getAllAlbums };
})();

const View = (() => {
  const domString = {
    searchBar: 'searchbar-input',
    searchMessage: 'search-info',
    cardsContainer: 'result-container',
  };
  const render = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  };
  const createCardTmp = (arr) => {
    let tmp = '';
    arr.forEach((data) => {
      tmp += `
              <div class="result-card">
                  <img class='card-img' src="${data.artworkUrl100}" alt="">
                  <div class="card_title">${data.collectionName}</div>
              </div>
          `;
    });
    return tmp;
  };
  return {
    domString,
    render,
    createCardTmp,
  };
})();

const Model = ((api) => {
  const getAllAlbums = api.getAllAlbums;

  return {
    getAllAlbums,
  };
})(AppApi);

const AppController = ((view, model) => {
  const albumElement = document.querySelector('#' + view.domString.searchBar);

  const addListenerOnInput = () => {
    albumElement.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const artist = event.target.value;

        if (artist) {
          model.getAllAlbums(artist).then((data) => {
            const infoElement = document.querySelector(
              '#' + view.domString.searchMessage
            );
            const message = `${data.resultCount} results for "${event.target.value}"`;
            view.render(infoElement, message);

            const cardsElement = document.querySelector(
              '#' + view.domString.cardContainer
            );
            const cardsTep = view.createCardTmp(data.results);
            view.render(cardsElement, cardsTep);
          });

          event.target.value = '';
        }
      }
    });
  };

  const init = () => {
    addListenerOnInput();
  };

  return {
    init,
  };
})(View, Model);
AppController.init();
