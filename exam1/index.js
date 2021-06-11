
const Api = (() => {
  
    const getData = word =>
        fetchJsonp('https://itunes.apple.com/search?term=${'+word+'}&media=music&entity=album&attribute=artistTerm&limit=200').
        then(response => response.json())
  
    return {
      getData
    }
  })()
  
  const View = (() => {
    const domString = {
      searchBar: 'search-bar',
      searchMessage: 'search-message',
      Wrapper: 'wrapper'
    }
  
    const render = (ele, html) => {
      ele.innerHTML = html
    }
  
    const addAlbum = arr => {
      let st = ''
      arr.forEach(e => {
        st += `<div class="card">
                  <img src="${e.artworkUrl100}">
                  <div class="author">${e.collectionName}</div>
                </div>`;
      })
      return st;
    }
    return {
      domString,
      render,
      addAlbum
    }
  })()
  
  const Model = ((api, view) => {
    const updataModel= api.getData;
  
    class Album {
      #collections = [];
    
      get collections() {
        return this.#collections
      }
  
      set collections(newColl) {
        this.#collections = newColl
        const cardsWrapper = document.querySelector('#' + view.domString.Wrapper)
        const temp = view.addAlbum(this.#collections)
        view.render(cardsWrapper, temp)
      }
    }
  
    return {
        updataModel,
      Album
    }
  })(Api, View)
  
  const AppController = ((view, model) => {
    const album = new model.Album()
    const searchBar = document.querySelector('#' + view.domString.searchBar)
    const searchMessage = document.querySelector(('#' + view.domString.searchMessage))
  
    const update = () => {
      searchBar.addEventListener('keyup', e => {
        if (e.key === 'Enter' && e.target.value) {
          model.updataModel(e.target.value).then(data => {
            album.num = +data.resultCount;
            album.collections = data.results;
            const newMessage = `all results for ${e.target.value}`;
            view.render(searchMessage, newMessage)
          })
        }
      })
    }
  
    const init = () => {
      update()
    }
  
    return {
      init
    }
  })(View, Model)
  
  AppController.init();