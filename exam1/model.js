const Model = ((api, view) => {
    class State {
        #count = 0;
        #details = [];
        get count() {
            return this.#count;
        }

        set count(resCount) {
            const countElement = document.querySelector('.' + view.domString.searchCount);
            const input = document.querySelector('.' + view.domString.searchArtist).value;
            const htmlString = `${resCount} results for "${input}"`;
            view.render(countElement, htmlString)
            this.#count = resCount;
        }

        get details() {
            return this.#details;
        }

        set details(detailArray) {
            const boxElement = document.querySelector('.' + view.domString.searchDetails);
            const htmlString = view.createSearchCards(detailArray);
            view.render(boxElement, htmlString)
            this.#details = detailArray;
        }
    }

    const search = api.search;

    return {
        State,
        search
    }
})(searchAPI, View);