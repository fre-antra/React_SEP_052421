const API = (() => {
  const getAlbums = (ARTIST_NAME) => {
    const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`
    const data = fetchJsonp(url).then(res => res.json());
    return data;
  }
  return {
    getAlbums
  }
})();

export default API;