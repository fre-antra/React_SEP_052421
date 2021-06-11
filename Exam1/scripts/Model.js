//Model

const iTunesAPI = (() => {
  const getITunesAlbums = (artistName) => {
    fetch(
      `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200"`
    ).then((response) => response.json());
  };

  const getAlbums = (url) => {
    fetch(url).then((res) => res.json());
  };

  return {
    getITunesAlbums,
    getAlbums,
  };
})();

const Models = ((api) => {
  const getITunesAlbums = api.getITunesAlbums;

  const getAlbums = api.getAlbums;

  return {
    getITunesAlbums,
    getAlbums,
  };
})(iTunesAPI);

//console.log(Models.getITunesAlbums("Jack").then((res) => console.log(res)));

// Models.getAlbums(
//   "https://itunes.apple.com/search?term=Jack&media=music&entity=album&attribute=artistTerm&limit=200"
// ).then((res) => console.log(res));

export { Models };
