const musicAPI = (() => {

    const getSearchResults = (artistName) =>
        fetch(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`)
            .then((response) => response.json());

    return {
        getSearchResults
    }
})();

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

const Model = ((api, view) => {
    class State {
        #resultList = [];
        #resultCount = 0;

        get resultList() {
            return this.#resultList;
        }

        set resultList(newList) {
            this.#resultList = newList;

            const resultGrid = document.querySelector('.' + view.domString.searchResultsGrid);
            const resultTemplate = view.createCardTemplate(this.#resultList);
            view.render(resultGrid, resultTemplate);
        }

        get resultCount() {
            return this.#resultCount;
        }

        set resultCount(newCount) {
            this.#resultCount = newCount;

            const countDisplay = document.querySelector('.' + view.domString.searchResultInfo);
            let newInnerText = `Displaying ${this.#resultCount} results:`;
            countDisplay.innerText = newInnerText;
        }


    }

    const getSearchResults = api.getSearchResults;

    return {
        State,
        getSearchResults
    }
})(musicAPI, View);

const controller = ((model, view) => {
    const state = new model.State();
    const input = document.querySelector('.' + view.domString.searchInput);
    // const btn = document.querySelector('.' + view.domString.searchBtn);

    const search = (e) => {
        // console.log(e.target.value);
        if (e.key === 'Enter' && e.target.value) {
            console.log(e.target.value);
            model.getSearchResults(e.target.value).then(data => {
                state.resultCount = +data.resultCount;
                state.resultList = data.results;
            })
        }
    }
    const listenToSearch = () => {
        input.addEventListener('keyup', e => {
            search(e);
        })
    }

    const init = () => {
        listenToSearch();
        // model.getSearchResults('jack').then(data => {
        //     state.resultCount = +data.resultCount;
        //     state.resultList = data.results;
        // })
    }

    return {
        init
    }
})(Model, View);

controller.init();