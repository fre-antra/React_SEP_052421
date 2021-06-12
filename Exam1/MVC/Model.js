const albumAPI = (() => {
  const getAllAlbums = (artistName) => {
    return fetchJsonp(
      `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`
    ).then((response) => response.json());
  };

  return { getAllAlbums };
})();

export const Model = ((api) => {
  const getAllAlbums = api.getAllAlbums;

  return {
    getAllAlbums,
  };
})(albumAPI);
