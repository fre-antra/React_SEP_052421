const albumAPI = (() => {
  const getAlbums = artist => {
    const baseurl = `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`

    return fetchJsonp(baseurl).then(response => response.json())
  }

  return {
    getAlbums,
  }
})()

const View = (() => {
  const domString = {
    cardList: 'cardlist',
    searchNameResult: 'search__name',
    searchResult: 'search-result',
    searchBtn: 'search-btn',
  }
  const render = (element, htmlString) => {
    element.innerHTML = htmlString
  }

  const createCard = cardList => {
    let htmlString = ''
    cardList.results.forEach(ele => {
      htmlString += `
          <div class="card">
              <div class="card__item">
                  <div class="card__item-img">
                      <img src="${ele.artworkUrl100}">
                  </div>
                  <div class="card__item-title">
                    <span>${ele.collectionName}</span>
                  </div>
              </div>
          </div>
          `
    })
    return htmlString
  }

  return {
    domString,
    render,
    createCard,
  }
})()

const Model = ((api, view) => {
  class Card {
    constructor(title) {
      this.img = img
      this.title = title
    }
  }

  class State {
    #cards = []

    get cards() {
      return this.cards
    }

    set cards(dataObject) {
      this.#cards = dataObject.data
      const cardElement = document.querySelector('#' + view.domString.cardList)
      const htmlString = view.createCard(this.#cards)
      const resultElement = document.querySelector(
        '#' + view.domString.searchResult
      )
      const htmlResultString =
        dataObject.len + ' results for: ' + dataObject.val

      view.render(resultElement, htmlResultString)
      view.render(cardElement, htmlString)
    }
  }

  const getAlbums = api.getAlbums

  return {
    Card,
    State,
    getAlbums,
  }
})(albumAPI, View)

const AppController = ((view, model) => {
  const state = new model.State()

  const search = () => {
    const searchBtn = document.querySelector('#' + view.domString.searchBtn)
    const searchNameResult = document.querySelector(
      '#' + view.domString.searchNameResult
    )

    const getAlbumsCb = data => {
      state.cards = {
        data: data,
        val: searchNameResult.value,
        len: data.results.length,
      }
    }

    searchBtn.addEventListener('click', event => {
      model.getAlbums(searchNameResult.value).then(getAlbumsCb)
    })

    searchNameResult.addEventListener('keypress', event => {
      if (event.keyCode == 13) {
        event.preventDefault()
        model.getAlbums(searchNameResult.value).then(getAlbumsCb)
      }
    })
  }

  const init = () => {
    search()
  }

  return {
    init,
  }
})(View, Model)

AppController.init()
