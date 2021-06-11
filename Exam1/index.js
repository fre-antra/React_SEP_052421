const albumAPI = (() => {

    const getAlbumsByAny = (input) => 
        fetch("https://itunes.apple.com/search?term=${" + input + "}&media=music&entity=album&attribute=artistTerm&limit=200")
        .then((response) => response.json());

    return {
        getAlbumsByAny
    };
})();

const View = ((n) => {
    
    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createAlbumCard = (albumArr) => {
        let htmlString = '';
        albumArr.forEach((info, index) => {
            htmlString += `
                <div class="album-card" id="${'album-card_' + (index + 1)}">
                    <img src="${info.albumCoverUrl}">
                    <p class="album-title">${info.albumName}</p>
                </div>
            `;
        });
        return htmlString;
    }

    return {
        render,
        createAlbumCard
    };
})();

const Model = ((api) => {
    
    class Album {
        constructor(albumName, albumCoverUrl) {
            this.albumName = albumName;
            this.albumCoverUrl = albumCoverUrl;
        }

        get albumName() {
            return this.albumName;
        }

        get albumCoverUrl() {
            return this.albumCoverUrl;
        }
    }

    const getAlbumsByAny = api.getAlbumsByAny;

    return {
        Album,
        getAlbumsByAny
    };
})(albumAPI);

const AppController = ((model, view) => {

    const searchAlbums = () => {
        const input = document.getElementById("input-album");

        input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {

                model.getAlbumsByAny(input.value).then((data) => {
                    return data.results.reduce((acc, cur) => {
                        acc.push(new Model.Album(cur.artworkUrl100, cur.collectionName));
                    }, []);
                }).then((albumArr) => {
                    const htmlString = view.createAlbumCard(albumArr);
                    const container = document.getElementById("results-container");
                    view.render(container, htmlString);
                    return albumArr.length;
                }).then((num) => {
                    const title = document.getElementById("results-title");
                    title.innerHTML = num + " results for \"" + input.value + "\"";
                });
            }
        });
    }

    const init = () => {
        searchAlbums();
    }

    return {
        init
    };
})(Model, View);

AppController.init();