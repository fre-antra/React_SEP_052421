const searchAPI = (() => {
  const fetchResults = (keyword) => {
    // console.log(keyword)
    const url = `https://itunes.apple.com/search?term=${keyword}&media=music&entity=album&attribute=artistTerm&limit=200`;
    // console.log(url)
    return fetchJsonp(url).then((response) => response.json());
  }
  return {
    fetchResults
  }
})();

const Model = ((api) => {
  const getSearchResult = api.fetchResults;
  
  return {
    getSearchResult,
  };

})(searchAPI)