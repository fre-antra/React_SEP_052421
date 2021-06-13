const AppController = ((model, view) => {
  const searchKeyword = document.querySelector("." + view.domString.searchInput);
  const searchResults = document.querySelector("." + view.domString.resultsContainer);
  const searchResultsHeader = document.querySelector("." + view.domString.searchResultsHeader);

  const handleSearchEnter = () => {
    searchKeyword.addEventListener("keyup", (event) => {
      // console.log("event", event.target.value, event, event.key);
      event.preventDefault();
      if (event.key === "Enter" && event.target.value !== "") {
        // console.log(event.target.value);
        const inputContent = event.target.value;
        model.getSearchResult(inputContent).then((data) => {
          const updateResultTitle = `${data.results.length} result of "${inputContent}"`;
          view.render(searchResultsHeader, updateResultTitle);

          const search = view.displayResult(data.results);
          view.render(searchResults, search);
        });
      }
    });
  };

    const init = () => {
      handleSearchEnter();
    }


  return {
    init
  }
})(Model, View);

AppController.init();