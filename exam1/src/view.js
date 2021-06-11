export const View = (() => {
  const domString = {
    input: "search-bar__input",
    headerText: "section__header-text",
    resultList: "card-wrapper",
  };

  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  const createResults = (resultArr) => {
    console.log(resultArr);
    let htmlString = "";
    resultArr.forEach((elem) => {
      htmlString += `
      <div class="card">
        <div class="card__image-wrapper">
          <img class="card__image" src="${elem.artworkUrl100}" alt="">
        </div>
        <div class="card__text-wrapper">
          <p class="card__text">${elem.collectionCensoredName}</p>
        </div>
      </div>
      `;
    });
    return htmlString;
  };

  const createInfo = (num, name) => {
    return `${num} results for "${name}"`;
  };

  return {
    domString,
    render,
    createResults,
    createInfo,
  };
})();
