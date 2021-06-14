import { Model } from "./model.js";
import { View } from "./view.js";

const controller = ((model, view) => {
    const state = new model.State();
    const input = document.querySelector('.' + view.domString.searchInput);
    // const btn = document.querySelector('.' + view.domString.searchBtn);

    const search = (e) => {
        // console.log(e.target.value);
        if (e.key === 'Enter' && e.target.value) {
            // console.log(e.target.value);
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