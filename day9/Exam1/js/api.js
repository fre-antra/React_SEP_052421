const musicAPI = (() => {

    const getSearchResults = (artistName) =>
        fetch(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`)
            .then((response) => response.json());

    return {
        getSearchResults
    }
})();

export { musicAPI };