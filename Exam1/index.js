
const API = (() => {

    const getAllAlbums = (ARTIST_NAME) => 
        fetch("https://itunes.apple.com/search?term=" + ARTIST_NAME + "&media=music&entity=album&attribute=artistTerm&limit=200")
        .then((response) => response.json());

    return {
        getAllAlbums
    };
})();
const View = (() => {
    const domString = {
        searchInput: 'search-input',
        searchMessage: 'search-message',
        cardsContainer: 'cards-container',
    }
    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }
    const createAlbum = (arr) => {
        let temp = '';
        arr.forEach(data => {
            temp += `
                <div class="card">
                    <img src="${data.artworkUrl100}" alt="">
                    <div class="card_title">${data.artistName}<br>${data.collectionName}</div>
                </div>
            `;
        });
        return temp;
    }
    return {
        domString,
        render,
        createAlbum
    };
})();
const Module = ((api, view) => {
    const getAllAlbums = api.getAllAlbums;

    class State {
        #albumList = [];
        #numOfCollection = 0;

        get collections() {
            return this.#albumList;
        }
        set collections(newCollections) {
            this.#albumList = newCollections;

            const cardsContainer = document.querySelector('#' + view.domString.cardsContainer);
            const temp = view.createAlbum(this.#albumList);
            view.render(cardsContainer, temp);
        }

        get numOfCollection() {
            return this.#numOfCollection;
        }
        set numOfCollection(count) {
            this.#numOfCollection = count;
        }
    }
    return {
        getAllAlbums,
        State
    };
})(API, View);
const Controller = ((view, module) => {
    const state = new module.State();
    const searchInput = document.querySelector('#' + view.domString.searchInput);
    const searchMessage = document.querySelector('#' + view.domString.searchMessage);

    const init = () => {
        searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && event.target.value === '') {
                let title = 'Search Albums by ArtistName:';
                view.render(searchMessage, title);
            }
            else{
                module.getAllAlbums(event.target.value).then(data => {
                    state.numOfCollection = data.resultCount;
                    state.collections = data.results;
                    let title = `${data.resultCount} results for "${event.target.value}"`;
                    view.render(searchMessage, title);
                });
            }
        });
    }

    return {
        init
    };
})(View, Module);
Controller.init();