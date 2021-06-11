const appleApis = (() => {
  const requestURL = (artistName) =>
    `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`;

  const fetchAlbums = (artistName) => {
    fetchJsonp(requestURL(artistName))
      .then((response) => response.json());
  };

  return {
    fetchAlbums: fetchAlbums,
  };
})();

const model = ((api) => {
  class album {
    constructor(rawData) {
      this.name = rawData.collectionName;
      this.cover = rawData.artworkUrl100;
    }
  }

  const getAlbums = function (artistName) {
    let albumList;
    api.fetchAlbums(artistName).then((res) => console.log(res));
    console.log(albumList);
    for (let i = 0; i < albumList.length; i++) {
      albumList[i] = new album(albumList[i]);
    }
    return albumList;
  };

  return {
    album: album,
    getAlbums: getAlbums,
  };
})(appleApis);

const view = (() => {
  const selectors = {
    album: "album-container",
    searchBtn: "btn-search",
    searchBox: "input-search",
  };

  const albumHtml = (albumList) => {
    let html = "";
    for (let i = 0; i < albumList.length; i++) {
      html += `
        <div class="album-container flex-item-space">
          <div class="album-cover"></div>
          <div class="album-name">
            ${album.collectionName}
          </div>
        </div>
      `;
    }

    return html;
  };

  const render = (domElement, html) => {
    domElement.innerHTML = html;
  };

  return {
    selectors: selectors,
    albumHtml: albumHtml,
    render: render,
  };
})();

const controller = (function (model, view) {
  const searchAlbums = () => {
    let searchValue = document.querySelector(
      "." + view.selectors.searchBox
    ).value;

    if (searchValue != "") {
      console.log(model.getAlbums(searchValue));
    }
  };

  const addSearchEvent = () => {
    document
      .querySelector("." + view.selectors.searchBox)
      .addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          searchAlbums();
        }
      });
    document
      .querySelector("." + view.selectors.searchBtn)
      .addEventListener("click", searchAlbums);
  };

  return {
    addSearchEvent: addSearchEvent,
  };
})(model, view);

controller.addSearchEvent();
