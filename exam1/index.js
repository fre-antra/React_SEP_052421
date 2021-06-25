// Model View Controller

const albumAPI = (() => {
    url = 'https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200'
    const getAlbums = (name) =>
    console.log("getartist");
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
   
    return {
        getAlbums,
    }
})();

const View = (() => {

    const domString = {
        searchInput: 'search__input',
        searchResultsDisplay: 'searchResult__display',
        searchResultInfo: 'search__resultInfo',
        searchButtonn: 'search__button'
    }

    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createCardTmp = (resultArr) => {
        let htmlString = 'aaa';
        return htmlString;
    }

    return {
        domString,
        render,
        createCardTmp,
    }
})();

const Model = ((api, view) => {        
    const getData = api.getAlbums;                                                                                
    class State {
        #albumlist = [];
        #count = 0;

        get count() {
            return this.#count;
        }

        set count(count) {
            this.#count = count;
        }

        get albumlist() {
            return this.#albumlist;
        }

        set albumlist(newlist) {
            this.#albumlist = newlist;
            const albumElement = document.querySelector('.' + view.domString.albumlist);
            const albumTmp = view.createAlbumTmp(this.#albumlist);
            console.log(albumElement);
            console.log(albumTmp);
            view.render(albumElement,albumTmp);
        }
    }

    return {
        State,
        getData,
       
        
    }
})(albumAPI, View);

const AppController = ((model, view) => {
    const state = new model.State();
    const input = document.querySelector('.' + view.domString.searchInput);

   


    const search = (event) => {
       
        const artist = event.target.value;
        console.log(artist);
        console.log(event.key);
        console.log(typeof(albumAPI.getAlbums(artist)));
        //  console.log(typeof(event.key));
        //  if (event.type == 'keypress') {
        //     event.preventDefault();
        //     var key= event.keyCode;
        //     console.log(key);
        //   }
        //   if (event.type == 'blur') {
        //     event.preventDefault();
        //     console.log("blur");
            event.preventDefault();
            // if (event.key == 'Enter' && artist) {
            //     console.log("if")
            //     console.log(artist);
                Model.getAlbums(artist).then(data => {
                     //state.albumlist = data.albumlist;
                    //  console.log(state.albumlist);
                    //  state.count = data.count; 
                    console.log('data');
                })
            // } else {
            //     console.log("undefined key")
            // }
        //   }
        console.log("end");
       
    }
    const searchHelper = () => {
        input.addEventListener('keyup', event => {
            search(event);
        })
    }
  
    
    const init = () => {
       searchHelper();
    }
    

    return {
        init
    }
})(Model, View);

AppController.init();
