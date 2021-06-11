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
