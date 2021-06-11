const View = (() => {
    const domString = {
        searchArtist: 'search__input',
        searchCount: 'searchResult__count',
        searchDetails: 'searchResult__details'
    }

    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createSearchCards = (detailArray) => {
        let htmlString = '';
        detailArray.forEach(element => {
            htmlString += `
                <div class="card">
                    <img class="card__image" src="${element.artworkUrl100}" alt>
                    <div class="card__name">${element.collectionName}</div>
                </div>
            `
        })

        return htmlString;
    }

    return {
        domString,
        render,
        createSearchCards
    }
})();