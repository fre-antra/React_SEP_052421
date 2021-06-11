// Model View Controller

const albumAPI = (() => {

    const baseUrl1 =  'https://itunes.apple.com/search?term=${';
    const baseUrl2 =  '}&media=music&entity=album&attribute=artistTerm&limit=50';

    // fetchJsonp(baseUrl)
    //     .then(res => res.json())
    //     .then(json => console.log(json));

    const getAllAlbums = (ARTIST_NAME) => {
        fetchJsonp([baseUrl1, ARTIST_NAME, baseUrl2].join(''))
            .then((response) => response.json())
            .then(json => console.log(json));
    }
    // const addAlbum = (ARTIST_NAME) =>
    //     fetchJsonp(baseUrl, {
    //         method: 'GET',
    //         body: JSON.stringify(ARTIST_NAME),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((response) => response.json());

    return {
        getAllAlbums,
    }
})();

const View = (() => {

    const domString = {
        input: 'search__input',
        albumContainer: 'albumContainer',
        searchBar: 'search-bar',
        searchMessage: 'search-message',
    }

    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createCard = arr => {
        let htmlString = ''
        arr.forEach(e => {
            htmlString +=  `<div class="card">
                                <img src="${e.artworkUrl100}">
                                <div class="card-title">${e.collectionName}</div>
                            </div>`;
        })
        return htmlString;
    }


    return {
        domString,
        render,
        createCard
    }
})();

const Model = ((api, view) => {

    class Album {
        #albumList = [];
        #num = 0;

        get num() {
            return this.#num;
        }

        get albumList() {
            return this.#albumList;
        }

        set num(num) {
            this.#num = num;
        }

        set albumList(newColl) {
            this.#albumList = newColl;
            const albumEle = document.querySelector('.' + view.domString.albumContainer);
            const temp = view.createCard(this.#albumList);

            view.render(albumEle, temp);
        }

        
    }

    const getAllAlbums = api.getData;

    return {
        Album,
        getAllAlbums,
    }
})(albumAPI, View);

const AppController = ((model, view) => {
    // const state = new model.State();
    const album = new model.Album();

    const addListener = () => {
        const input = document.querySelector('.' + view.domString.input);
        const searchBar = document.querySelector('#' + view.domString.searchBar)
        const searchMess = document.querySelector(('#' + view.domString.searchMessage))

        input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && event.target.value !== '') {

                const artist = event.target.value;
                
                model.getAllAlbums(artist).then(data =>{
                    album.num = +data.resultCount;
                    album.albumList = data.results;
                    const newMessage = `${album.num} results for ${artist}`;
                    view.render(searchMess, newMessage)
                })

                const newSeach = new model.Album(state.input);
                model.addAlbum(newSeach).then(data => {
                    state.todolist = [data, ...state.todolist];
                });
                

                // event.target.value = '';
            }
        })
    }

    
    const init = () => {
        addListener();
    }

    return {
        init
    }
})(Model, View);

AppController.init();