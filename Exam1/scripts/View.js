//Views

const View = (() => {
  const domString = {
    search: "header__input",
    searchIcon: "header__searfhIcon",
    info: "info__title",
    cardsection: "main__cardSection",
  };

  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  const createCardTmp = (albumInfoArr) => {
    let htmlString = "";

    albumInfoArr.forEach((album, index) => {
      htmlString += `<div class="card">
          <img src=${album.artworkUrl100} alt=${album.collectionName} class="album__image" />
          <div class="albumName">${album.collectionName}</div>
        </div>`;
    });
    return htmlString;
  };

  const infoTitle = (element, count, search) => {
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
