const View = (() => {
    const domString = {
        searchInput: 'search__input',
        searchResultsGrid: 'searchResult__grid',
        searchResultInfo: 'searchResult__info',
        searchBtn: 'search__button'
    }

    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createCardTemplate = (resultArr) => {
        let htmlString = '';
        resultArr.forEach(element => {
            htmlString += `
                <div class="card">
                    <img src="${element.artworkUrl100}">
                    <div class="card__title">${element.collectionName}</div>
                </div>
                `
        });
        return htmlString;
    }

    return {
        domString,
        createCardTemplate,
        render
    }
})();

export { View };