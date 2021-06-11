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
