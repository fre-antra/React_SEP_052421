//Views

const View = (() => {
  const domString = {
    search: "header__input",
    searchIcon: "header__searchIcon",
    info: "info__title",
    cardsection: "main__cardSection",
  };

  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  const createCardTmp = (albumInfoArr) => {
    let htmlString = "";

    albumInfoArr.forEach((album, index, arr) => {
      if (index >= 50) {
        arr.length = index + 1;
      } else {
        htmlString += `<div class="card">
          <img src=${album.artworkUrl100} alt=${album.collectionName} class="album__image" />
          <div class="albumName">${album.collectionName}</div>
        </div>`;
      }
    });
    return htmlString;
  };

  const infoTitle = (element, count, search) => {
    if (count > 50) {
      count = 50;
    }
    element.innerText = `${count} results for ${search}`;
  };

  return {
    domString,
    render,
    createCardTmp,
    infoTitle,
  };
})();

export { View };
