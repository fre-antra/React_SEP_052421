const itunesAPI = (() => {
    // const baseUrl_pre = 'https://itunes.apple.com/search?term=${'
    // const baseUrl_post = '}&media=music&entity=album&attribute=artistTerm&limit=200'

    const getAlbums = (artist) => {
        const url = `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`
        // console.log([baseUrl_pre, artist, baseUrl_post].join(''));
        return fetchJsonp(url)
            .then((response) => response.json())
        // .then((json) => console.log('from API', json))
        // .then(json => {
        //     console.log('I am json',json);
        //     return json
        // });
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


export{ Model }