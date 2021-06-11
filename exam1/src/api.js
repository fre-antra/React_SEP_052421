export const albumsAPI = (() => {
  const getAPI = (name) =>
    fetchJsonp(
      `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=200`
    ).then((res) => res.json());

  return {
    getAPI,
  };
})();
