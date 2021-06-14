import { musicAPI } from "./api.js";
import { View } from "./view.js";

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


export { Model };