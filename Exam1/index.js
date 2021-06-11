const API = (() => {
    
    const getAllAlbums = (artist) => 
        fetchJsonp(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`)
        .then(res => res.json())
    
    return {
        getAllAlbums,
    }
})()

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
    
    return {
        init
    };
})(View, Module);
Controller.init();