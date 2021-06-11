const AppController = ((model, view) => {
    const state = new model.State();

    const search = () => {
        const input = document.querySelector('.' + view.domString.searchArtist);
        input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                Model.search(input.value).then((result) => {
                    const resultCount = result.resultCount;
                    const details = result.results;
                    state.count = resultCount;
                    state.details = details;
                })
            }
        })
    }

    const init = () => {
        search();
    }

    return {
        init
    }
})(Model, View);

AppController.init();