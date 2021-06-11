const Api = (() => {
  const getData = (name) =>
    fetchJsonp(
      `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=200`
    ).then((response) => response.json());

  return {
    getData,
  };
})();

const View = (() => {
  const domID = {
    searchBar: 'search-bar',
    searchMessage: 'search-message',
    cardsContainer: 'cards-container',
  };

  const render = (ele, html) => {
    ele.innerHTML = html;
  };

  const createCards = (arr) => {
    let content = '';
    arr.forEach((e) => {
      content += `<div class="card">
                    <img src="${e.artworkUrl100}">
                    <div class="card-title">${e.collectionName}</div>
                  </div>`;
    });
    return content;
  };

  return {
    domID,
    render,
    createCards,
  };
})();

const Model = ((api, view) => {
  const fetchData = api.getData;

  class Album {
    #collections = [];
    #num = 0;

    get num() {
      return this.#num;
    }

    set num(num) {
      this.#num = num;
    }

    get collections() {
      return this.#collections;
    }

    set collections(data) {
      this.#collections = data;

      const cardsWrapper = document.querySelector(
        '#' + view.domID.cardsContainer
      );
      const content = view.createCards(this.#collections);

      view.render(cardsWrapper, content);
    }
  }

  return {
    fetchData,
    Album,
  };
})(Api, View);

const AppController = ((view, model) => {
  const album = new model.Album();
  const searchBar = document.querySelector('#' + view.domID.searchBar);
  const searchMess = document.querySelector('#' + view.domID.searchMessage);

  const addListener = () => {
    searchBar.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' && e.target.value) {
        model.fetchData(e.target.value).then((data) => {
          album.num = data.resultCount;
          album.collections = data.results;

          const newMessage = `${album.num} results for  "${e.target.value}"`;
          view.render(searchMess, newMessage);
        });
      } else {
        const newMessage = 'Type Information to Search Albums';
        view.render(searchMess, newMessage);
        album.collections = [];
      }
    });
  };

  const init = () => {
    addListener();
  };

  return {
    init,
  };
})(View, Model);

AppController.init();
