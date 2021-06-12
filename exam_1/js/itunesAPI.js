export const itunesAPI = (() => {
  const getAlbums = (ARTIST_NAME) =>
    fetch(
      `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`
    ).then((Response) => Response.json());

  return {
    getAlbums,
  };
})();

