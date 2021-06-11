const View = (() => {
  const domString = {
    cardList: 'cardlist',
    searchNameResult: 'search__name',
    searchResult: 'search-result',
    searchBtn: 'search-btn',
  }
  const render = (element, htmlString) => {
    element.innerHTML = htmlString
  }

  const createCard = cardList => {
    let htmlString = ''
    cardList.results.forEach(ele => {
      htmlString += `
          <div class="card">
              <div class="card__item">
                  <div class="card__item-img">
                      <img src="${ele.artworkUrl100}">
                  </div>
                  <div class="card__item-title">
                    <span>${ele.collectionName}</span>
                  </div>
              </div>
          </div>
          `
    })
    return htmlString
  }

  return {
    domString,
    render,
    createCard,
  }
})()
