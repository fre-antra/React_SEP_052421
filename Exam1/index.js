const albumAPI = (() => {
    const getAllAlbums = (artistName) => {
        return fetchJsonp(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=50`)
                    .then((response) => response.json());
    };

    return { getAllAlbums };

})();



const View = (() => {
    const domString = {
        info: 'search-result',
        cardContainer: 'albums',
        userInput: 'search-input'
    };

    const render = (element, htmlTemplate) => {
        element.innerHTML = htmlTemplate;
    };

    const newInfo = (name, number) => {
        return `${number} results for ${name}`;
    }

    const createAlbumTmp = (albumArray) => {
        let template = '';
        
        albumArray.forEach(album => {
            template +=
            `<div class="card">
                <img src=${album.artworkUrl100} class="card-image" alt="..."/>
                <div class="card-content">${album.collectionName}</div>
            </div>
            `;
        });

        return template;
    };

    return {
        domString,
        render,
        newInfo,
        createAlbumTmp
    };
})();



const Model = ((api) => {
    const getAllAlbums = api.getAllAlbums;

    return {
        getAllAlbums,
    }

})(albumAPI);



const AppControl = ((view, model) => {
    const albumElement = document.querySelector('.' + view.domString.userInput);
    
    albumElement.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const artist = event.target.value;
            
            if (artist) {
                model.getAllAlbums(artist).then(data => {
                    const infoElement = document.querySelector('.' + view.domString.info);
                    const infoTep = view.newInfo(artist, data.resultCount);
                    view.render(infoElement, infoTep);

                    const cardsElement = document.querySelector('.' + view.domString.cardContainer);
                    const cardsTep = view.createAlbumTmp(data.results);
                    view.render(cardsElement, cardsTep);
                });

                event.target.value = '';
            }
        }
    });

    const init = () => {
        addListenerOnInput();
    }

    return {
        init
    }

})(View, Model);


AppControl.init();