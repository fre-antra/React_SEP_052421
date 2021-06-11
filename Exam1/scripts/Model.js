//Model

const iTunesAPI = (() => {
  const getITunesAlbums = (artistName) => {
    fetchJsonp(
      `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return {
    getITunesAlbums,
  };
})();

const Models = ((api) => {
  const getITunesAlbums = api.getITunesAlbums;

  return {
    getITunesAlbums,
  };
})(iTunesAPI);

//console.log(Models.getITunesAlbums("Jack").then((res) => console.log(res)));

// Models.getAlbums(
//   "https://itunes.apple.com/search?term=Jack&media=music&entity=album&attribute=artistTerm&limit=200"
// ).then((res) => console.log(res));

export { Models };
