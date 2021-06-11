const View = (() => {
  const domString = {
    album: "album-row",
    resultCount: "album-result",
  };

  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  const createAlbum = (albums) => {
    let htmlString = "";
    albums.forEach((album) => {
      htmlString += `
        <div class="card">
          <img class="card__img" src="${album.artworkUrl100}" />
          <div class="card__albumtitle">
            ${album.collectionName}
          </div>
        </div>
        `;
    });
    return htmlString;
  };

  const creatCount = (count, searchRes) => {
    let str = `${count} results for "${searchRes}"`;
    return str;
  };

  return {
    render,
    domString,
    createAlbum,
    creatCount,
  };
})();

export default View;