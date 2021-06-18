const albumAPI = (() => {

    const getAlbumsByAny = (input) => 
        fetch("https://itunes.apple.com/search?term=" + input + "&media=music&entity=album&attribute=artistTerm&limit=200")
        .then((response) => response.json());

    return {
        getAlbumsByAny
    };
})();

const View = (() => {

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
    };

    return {
        createAlbumCard
    };
})();

const Model = ((api) => {

    const getAlbumsByAny = api.getAlbumsByAny;

    return {
        getAlbumsByAny
    };
})(albumAPI);

const AppController = ((model, view) => {

    const update = (input) => {
        model.getAlbumsByAny(input).then((data) => {
            const res = data.results.reduce((acc, cur) => 
                [...acc, {albumName:cur.collectionName, albumCoverUrl:cur.artworkUrl100}]
            , []);
            return res;
        }).then((albumArr) => {
            const htmlString = view.createAlbumCard(albumArr);
            const container = document.getElementById("results-container");
            container.innerHTML = htmlString;
            return albumArr.length;
        }).then((num) => {
            const title = document.getElementById("results-title");
            title.innerHTML = num + " results for \"" + input + "\"";
        });
    };

    const init = () => {
        const input = document.getElementById("input-album");

        input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                update(input.value);
            }
        });
    };

    return {
        init
    };
})(Model, View);

AppController.init();