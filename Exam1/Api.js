const itunesAPI = (() => {
  const getAlbums = (name) => {
    const baseUrl = `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=1`;

    fetchJsonp(baseUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return {
    getAlbums,
  };
})();

module.exports = itunesAPI;
