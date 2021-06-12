export const View = (() => {
  const domString = {
    input: "search__input",
    btn: "search__button",
    albums: "cards_container",
    result_info: "result_information",
  };

  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  const createAlbumsTemplate = (albumsArr) => {
    let htmlString = "";
    albumsArr.forEach((ele) => {
      htmlString += `
        <div class="card">
          <img class="card-img" src="${ele.artworkUrl100}">
          <div class="card-content">${
            ele.collectionName.length > 30
              ? ele.collectionName.slice(0, 30) + "..."
              : ele.collectionName
          }</div>
        </div>
      `;
    });
    return htmlString;
  };

  const createResultInfoTemplate = (num, inputStr) => {
    let htmlString = "";
    htmlString += `<div>${num} results for "${inputStr}"</div>`;
    return htmlString;
  };

  return {
    domString,
    render,
    createAlbumsTemplate,
    createResultInfoTemplate,
  };
})();

