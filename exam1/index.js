// Model View Controller

const albumAPI = (() => {

    const getAlbums = (ARTIST_NAME) => {
        return fetchJsonp(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`)
            .then((response) => response.json());
    };

    return { getAlbums };
})();

const View = (() => {

    const domString = {
        input: 'search__input',
        albumContainer: 'album-container',
        searchMessage: 'search-message',
    }

    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createCard = arr => {
        let htmlString = '';

        arr.forEach(album => {
            htmlString +=  `<div class="card">
                                <img src="${album.artworkUrl100}">
                                <div class="card-title">${album.collectionName}</div>
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

    const getAllAlbums = api.getAlbums;
    
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
        const searchMess = document.querySelector(('#' + view.domString.searchMessage));

        input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && event.target.value !== '') {

                let artist = event.target.value;
                console.log(artist);
                console.log(model);
                model.getAllAlbums(artist).then(data => {
                    album.num = data.resultCount;
                    album.albumList = data.results;
                    const newMessage = `${album.num} results for "${artist}"`;
                    console.log(data.results);
                    view.render(searchMess, newMessage)
                })

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

// const test = albumAPI.getAlbums("swift").then((data) => {
//     console.log(data);
//   });