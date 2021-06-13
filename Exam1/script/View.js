const View = (() => {
  const domString = {
    searchInput : 'search-input',
    searchResultsHeader : 'search-result-title',
    resultsContainer: 'flex-container',
  }

  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  }

 const displayResult = (resultsArr) => {
  // console.log(resultsArr);
  let htmlString= '';
  resultsArr.forEach((item) => {
        // console.log(item.collectionCensoredName);
        htmlString += `
          <div class="search-result-item">
            <h2>${item.collectionName}</h2>
            <img src="${item.artworkUrl100}"></img>
          </div>
      `;
    })
    // console.log(htmlString)
    return htmlString;;
  }; 

  return {
    domString,
    render,
    displayResult,
  }
})();