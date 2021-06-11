const Api = (() => {
  let url1 = 'https://itunes.apple.com/search?term=${'
  let url2 = '}&media=music&entity=album&attribute=artistTerm&limit=200'

  const getData = name => fetchJsonp([url1, name, url2].join('')).then(response => response.json())

  return {
    getData
  }
})()

const View = (() => {
  const domString = {
    searchBar: 'search-bar',
    searchMessage: 'search-message',
    cardsContainer: 'cards-container'
  }

  const render = (ele, html) => {
    ele.innerHTML = html
  }

  const createCard = arr => {
    let temp = ''
    arr.forEach(e => {
      temp += `<div class="card">
                <img src="${e.artworkUrl100}">
                <div class="card-title">${e.collectionName}</div>
              </div>`;
    })
    return temp;
  }
  return {
    domString,
    render,
    createCard
  }
})()

const Model = ((api, view) => {
  const modelGet = api.getData;

  class Album {
    #collections = [];
    #num = 0;

    get num() {
      return this.#num
    }

    set num(num) {
      this.#num = num
    }

    get collections() {
      return this.#collections
    }

    set collections(newColl) {
      this.#collections = newColl
      const cardsWrapper = document.querySelector('#' + view.domString.cardsContainer)
      const temp = view.createCard(this.#collections)
      // 这
      view.render(cardsWrapper, temp)
    }
  }

  return {
    modelGet,
    Album
  }
})(Api, View)

const AppController = ((view, model) => {
  const album = new model.Album()
  const searchBar = document.querySelector('#' + view.domString.searchBar)
  const searchMess = document.querySelector(('#' + view.domString.searchMessage))

  const addListener = () => {
    searchBar.addEventListener('keyup', e => {
      // 用户输入了东西
      if (e.key === 'Enter' && e.target.value) {
        model.modelGet(e.target.value).then(data => {
          // 转数字
          album.num = +data.resultCount;
          album.collections = data.results;
          const newMessage = `${album.num} results for ${e.target.value}`;
          view.render(searchMess, newMessage)
        })
      } else {
        const newMessage = 'Please Continue Search Albums'
        view.render(searchMess, newMessage)
        album.collections = []
      }
    })
  }

  const init = () => {
    addListener()
  }

  return {
    init
  }
})(View, Model)

AppController.init();