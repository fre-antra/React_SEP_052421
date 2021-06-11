const albumAPI = (() => {
  const getAlbums = artist => {
    const baseurl = `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`

    return fetchJsonp(baseurl).then(response => response.json())
  }

  return {
    getAlbums,
  }
})()
