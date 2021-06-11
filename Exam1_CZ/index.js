//import albums from "./testdata.js";

/*
const iTunesAPI = (() => {
    const ARTIST_NAME = "Jackson";
    const baseUrl = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`;

    const getAllAlbums = () => {
        fetch(baseUrl)
        .then((response) => response.json());
    }

    return {
        getAllAllbums
    }
})();
*/

const ARTIST_NAME = "Jackson";
const baseUrl = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`;

let albums = [
        {
            "wrapperType": "collection",
            "collectionType": "Album",
            "artistId": 32940,
            "collectionId": 159292399,
            "amgArtistId": 4576,
            "artistName": "Michael Jackson",
            "collectionName": "The Essential Michael Jackson",
            "collectionCensoredName": "The Essential Michael Jackson",
            "artistViewUrl": "https://music.apple.com/us/artist/michael-jackson/32940?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/the-essential-michael-jackson/159292399?uo=4",
            "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/9b/fe/1f/9bfe1f2d-c51e-0427-1075-21aac1f3b874/source/60x60bb.jpg",
            "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/9b/fe/1f/9bfe1f2d-c51e-0427-1075-21aac1f3b874/source/100x100bb.jpg",
            "collectionPrice": 16.99,
            "collectionExplicitness": "notExplicit",
            "trackCount": 38,
            "copyright": "℗ 1972 Motown Records, a Division of UMG Recordings, Inc., 1976, 1978, 1980 Sony Music Entertainment, 1979, 1982, 1987, 1991, 1995, 2001, 2005 MJJ Productions Inc.",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2005-07-05T07:00:00Z",
            "primaryGenreName": "Pop"
        },
        {
            "wrapperType": "collection",
            "collectionType": "Album",
            "artistId": 112058,
            "collectionId": 1440841450,
            "amgArtistId": 372609,
            "artistName": "50 Cent",
            "collectionName": "Get Rich or Die Tryin'",
            "collectionCensoredName": "Get Rich or Die Tryin'",
            "artistViewUrl": "https://music.apple.com/us/artist/50-cent/112058?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/get-rich-or-die-tryin/1440841450?uo=4",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/cf/d7/19/cfd7193d-b800-b2df-389f-209b719a10b3/source/60x60bb.jpg",
            "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/cf/d7/19/cfd7193d-b800-b2df-389f-209b719a10b3/source/100x100bb.jpg",
            "collectionPrice": 6.99,
            "collectionExplicitness": "explicit",
            "contentAdvisoryRating": "Explicit",
            "trackCount": 19,
            "copyright": "℗ 2015 Shady Records/Aftermath Records/Interscope Records",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2003-01-01T08:00:00Z",
            "primaryGenreName": "Hip-Hop/Rap"
        },
        {
            "wrapperType": "collection",
            "collectionType": "Album",
            "artistId": 104063,
            "collectionId": 1440912101,
            "amgArtistId": 4568,
            "artistName": "Jackson 5",
            "collectionName": "The Ultimate Collection",
            "collectionCensoredName": "The Ultimate Collection",
            "artistViewUrl": "https://music.apple.com/us/artist/jackson-5/104063?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/the-ultimate-collection/1440912101?uo=4",
            "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/49/f8/46/49f84618-7316-9294-c9da-856622b5f925/source/60x60bb.jpg",
            "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/49/f8/46/49f84618-7316-9294-c9da-856622b5f925/source/100x100bb.jpg",
            "collectionPrice": 6.99,
            "collectionExplicitness": "notExplicit",
            "trackCount": 21,
            "copyright": "This Compilation ℗ 1996 UMG Recordings, Inc.",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "1996-01-01T08:00:00Z",
            "primaryGenreName": "Pop"
        },
        {
            "wrapperType": "collection",
            "collectionType": "Album",
            "artistId": 16365,
            "collectionId": 400705819,
            "amgArtistId": 89651,
            "artistName": "Alan Jackson",
            "collectionName": "34 Number Ones",
            "collectionCensoredName": "34 Number Ones",
            "artistViewUrl": "https://music.apple.com/us/artist/alan-jackson/16365?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/34-number-ones/400705819?uo=4",
            "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/b2/d9/72/b2d9720b-8285-5ec1-3d26-6c392f7f8d28/source/60x60bb.jpg",
            "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/b2/d9/72/b2d9720b-8285-5ec1-3d26-6c392f7f8d28/source/100x100bb.jpg",
            "collectionPrice": 13.99,
            "collectionExplicitness": "notExplicit",
            "trackCount": 37,
            "copyright": "℗ 2010 Sony Music Entertainment",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2010-11-22T08:00:00Z",
            "primaryGenreName": "Country"
        },
        {
            "wrapperType": "collection",
            "collectionType": "Album",
            "artistId": 32940,
            "collectionId": 269572838,
            "amgArtistId": 4576,
            "artistName": "Michael Jackson",
            "collectionName": "Thriller",
            "collectionCensoredName": "Thriller",
            "artistViewUrl": "https://music.apple.com/us/artist/michael-jackson/32940?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/thriller/269572838?uo=4",
            "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/34/46/39/34463958-6102-4025-dca2-c47cb1d7e9c1/source/60x60bb.jpg",
            "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/34/46/39/34463958-6102-4025-dca2-c47cb1d7e9c1/source/100x100bb.jpg",
            "collectionPrice": 9.99,
            "collectionExplicitness": "notExplicit",
            "trackCount": 9,
            "copyright": "℗ 1982 MJJ Productions Inc.",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "1983-07-29T07:00:00Z",
            "primaryGenreName": "Pop"
        },
        {
            "wrapperType": "collection",
            "collectionType": "Album",
            "artistId": 112058,
            "collectionId": 1440767663,
            "amgArtistId": 372609,
            "artistName": "50 Cent",
            "collectionName": "The Massacre",
            "collectionCensoredName": "The Massacre",
            "artistViewUrl": "https://music.apple.com/us/artist/50-cent/112058?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/the-massacre/1440767663?uo=4",
            "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/a4/bf/b0/a4bfb0cb-2960-0f0d-ca4a-55602f0d636e/source/60x60bb.jpg",
            "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/a4/bf/b0/a4bfb0cb-2960-0f0d-ca4a-55602f0d636e/source/100x100bb.jpg",
            "collectionPrice": 6.99,
            "collectionExplicitness": "explicit",
            "contentAdvisoryRating": "Explicit",
            "trackCount": 22,
            "copyright": "℗ 2004 Shady Records/Aftermath Records/Interscope Records",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2004-01-01T08:00:00Z",
            "primaryGenreName": "Hip-Hop/Rap"
        },
        {
            "wrapperType": "collection",
            "collectionType": "Album",
            "artistId": 32940,
            "collectionId": 336643808,
            "amgArtistId": 4576,
            "artistName": "Michael Jackson",
            "collectionName": "Michael Jackson's This Is It (The Music That Inspired the Movie)",
            "collectionCensoredName": "Michael Jackson's This Is It (The Music That Inspired the Movie)",
            "artistViewUrl": "https://music.apple.com/us/artist/michael-jackson/32940?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/michael-jacksons-this-is-it-music-that-inspired-movie/336643808?uo=4",
            "artworkUrl60": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/fc/ce/46/fcce4657-36b3-d3ba-c0cf-d4d888b1ed5d/source/60x60bb.jpg",
            "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/fc/ce/46/fcce4657-36b3-d3ba-c0cf-d4d888b1ed5d/source/100x100bb.jpg",
            "collectionPrice": 10.99,
            "collectionExplicitness": "notExplicit",
            "trackCount": 20,
            "copyright": "℗ 1979, 1982, 1987, 1991, 1995, 2009 MJJ Productions Inc./(P) 2009 MJJ Productions Inc.",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2009-10-26T07:00:00Z",
            "primaryGenreName": "Soundtrack"
        },
        {
            "wrapperType": "collection",
            "collectionType": "Album",
            "artistId": 32940,
            "collectionId": 850697616,
            "amgArtistId": 4576,
            "artistName": "Michael Jackson",
            "collectionName": "XSCAPE (Deluxe)",
            "collectionCensoredName": "XSCAPE (Deluxe)",
            "artistViewUrl": "https://music.apple.com/us/artist/michael-jackson/32940?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/xscape-deluxe/850697616?uo=4",
            "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/a8/60/28/a8602882-5d4e-3764-aa8a-e883a068e158/source/60x60bb.jpg",
            "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/a8/60/28/a8602882-5d4e-3764-aa8a-e883a068e158/source/100x100bb.jpg",
            "collectionPrice": 16.99,
            "collectionExplicitness": "notExplicit",
            "trackCount": 19,
            "copyright": "℗ 2014 MJJ Productions, Inc.",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2014-05-09T07:00:00Z",
            "primaryGenreName": "Pop"
        },
        {
            "wrapperType": "collection",
            "collectionType": "Album",
            "artistId": 388900,
            "collectionId": 842470967,
            "amgArtistId": 3784,
            "artistName": "Jackson Browne",
            "collectionName": "The Very Best of Jackson Browne",
            "collectionCensoredName": "The Very Best of Jackson Browne",
            "artistViewUrl": "https://music.apple.com/us/artist/jackson-browne/388900?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/the-very-best-of-jackson-browne/842470967?uo=4",
            "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/de/d8/f9/ded8f9bc-9cd1-ddd4-f454-d6e75bbbdd74/source/60x60bb.jpg",
            "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/de/d8/f9/ded8f9bc-9cd1-ddd4-f454-d6e75bbbdd74/source/100x100bb.jpg",
            "collectionPrice": 15.99,
            "collectionExplicitness": "notExplicit",
            "trackCount": 32,
            "copyright": "℗ 2004 Elektra Entertainment Group. Marketed by Warner Strategic Marketing.",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2014-04-01T07:00:00Z",
            "primaryGenreName": "Rock"
        },
        {
            "wrapperType": "collection",
            "collectionType": "Album",
            "artistId": 471370,
            "collectionId": 725863059,
            "amgArtistId": 48,
            "artistName": "Ice Cube",
            "collectionName": "Greatest Hits",
            "collectionCensoredName": "Greatest Hits",
            "artistViewUrl": "https://music.apple.com/us/artist/ice-cube/471370?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/greatest-hits/725863059?uo=4",
            "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/eb/ac/98/ebac98f9-abd0-6782-fda8-c6d6b5230f93/source/60x60bb.jpg",
            "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/eb/ac/98/ebac98f9-abd0-6782-fda8-c6d6b5230f93/source/100x100bb.jpg",
            "collectionPrice": 11.99,
            "collectionExplicitness": "explicit",
            "contentAdvisoryRating": "Explicit",
            "trackCount": 17,
            "copyright": "℗ 2001 Priority Records, LLC",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "2001-01-01T08:00:00Z",
            "primaryGenreName": "Hip-Hop/Rap"
        }
];

const getAllAlbums = () => {
    fetch(baseUrl)
    .then((response) => (response.json()));

}

getAllAlbums();

for (i in albums) {
    document.getElementById("albums").innerHTML +=
    `
        <div class="card">
            <img src="${albums[i].artworkUrl60}">
            <h4>${albums[i].collectionName}</h3>
        </div>
    `
}