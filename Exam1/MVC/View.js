export const View = (() => {
  const domString = {
    searchBar: 'searchbar-input',
    searchMessage: 'search-info',
    cardsContainer: 'result-container',
  };

  const render = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  };

  const createCardTmp = (arr) => {
    let tmp = '';
    arr.forEach((data) => {
      tmp += `
              <div class="result-card">
                  <img class='card-img' src="${data.artworkUrl100}" alt="">
                  <div class="card-title">${data.artistName}</div>
                  <div class="card-title">${data.collectionName}</div>
              </div>
          `;
    });
    return tmp;
  };

  return {
    domString,
    render,
    createCardTmp,
  };
})();
