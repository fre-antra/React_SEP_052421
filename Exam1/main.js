const itunesAPI = (() => {
    const baseUrl_pre = 'https://itunes.apple.com/search?term=${'
    const baseUrl_post = '}&media=music&entity=album&attribute=artistTerm&limit=200'

    const getAlbums = (artist) => {
        // console.log([baseUrl_pre, artist, baseUrl_post].join(''));
        fetchJsonp([baseUrl_pre, artist, baseUrl_post].join(''))
            .then((response) => response.json())
            .then((json) => console.log('from API', json));
        }

    return {
        getAlbums
    }
})()

const Model = ((api) => {

    class AlubmCard {
        constructor(imgUrl, artistName, albumName) {
            this.imgUrl = imgUrl;
            this.artistName = artistName;
            this.albumName = albumName;
        }
    }

    const getAlbums = api.getAlbums;

    return {
        getAlbums,
        AlubmCard
    }

})(itunesAPI)



const View = (() => {

    const domItems = {
        input: 'topBar__input',
        indicator: 'mainBody__indicator',
        cardsDiv: 'mainbody__Cards'
    }

    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    // create card div for each album, return a album card Array
    const createCard = (albumArr) => {
        let htmlString = '';
        albumArr.forEach(ele => {
            htmlString += `
                <div class="card">
                    <img class="card__img" src="${ele.imgUrl}" alt="${ele.albumName}">
                    <p class="card__name">${ele.albumName}</p>
                </div>
            `;
        });
        return htmlString;
    }

    // update the indicator
    const updateIndicator = (albumArr) => {
        let htmlString = albumArr.length + ' results of ' + albumArr[0].artistName;

        return htmlString
    }

    return {
        domItems,
        render,
        createCard,
        updateIndicator
    }


})()

const Controller = ((view, model) => {

    const indicatorElement = document.querySelector('.' + view.domItems.indicator);
    const cardsElement = document.querySelector('.' + view.domItems.cardsDiv);
    const input = document.querySelector('.' + view.domItems.input);

    const init = () => {
        // get Artist name and fetch ablum
        input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && event.target.value !== '') {
                const artist = event.target.value
                console.log(artist); //test for get user input

                //------------  STUCK in here -------------//
                // TypeError: Cannot read property 'then' of undefined
                // but success in API fetch
                model.getAlbums(artist).then((data) => {
                    console.log('iam',data);
                    // update indicator
                    const indicatorUpdate = view.updateIndicator(data)
                    view.render(indicatorElement, indicatorUpdate);
                    // create cards div
                    const createCards = view.createCard(data);
                    view.render(cardsElement, createCards);
                });
            }
        })
    }

    return {
        init
    }
})(View, Model);

Controller.init();