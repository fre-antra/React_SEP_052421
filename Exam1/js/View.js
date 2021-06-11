const View = (() => {
  const domString = {
    albums: "cards_container",
    result_info: "result_information",
    input: "search__input",
    btn: "search__button"
  };

  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  const createAlbumsTmp = (albumsArray) => {
    let htmlString = "";
    albumsArray.forEach((ele) => {
      htmlString += `
        <div class="card">
          <img class="card__img" src="${ele.artworkUrl100}">
          <div class="card_content" src="">${ele.collectionName}</div>
        </div>
      `
    })
    return htmlString;
  }

  return {
    domString,
    render,
    createAlbumsTmp
  };
})();

export default View;