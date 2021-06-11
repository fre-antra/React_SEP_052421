const searchAPI = (() => {
    const search = (ARTIST_NAME) =>
        fetchJsonp(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`)
            .then(res => res.json())
            .then(json => {
                return json
            });

    return {
        search
    }
})();