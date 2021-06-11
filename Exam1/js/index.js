const appleApis = (() => {
  const requestURL = (artistName) =>
    `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`;

  const fetchAlbums = (artistName) => {
    return fetchJsonp(requestURL(artistName)).then((response) =>
      response.json()
    );
  };

  return {
    fetchAlbums: fetchAlbums,
  };
})();

const model = (function (api) {
  class album {
    constructor(rawData) {
      this.name = rawData.collectionName;
      this.cover = rawData.artworkUrl100;
    }
  }

  const getAlbums = function (artistName) {
    return api.fetchAlbums(artistName).then((albumList) => {
      albumList = albumList.results;
      for (let i = 0; i < albumList.length; i++) {
        albumList[i] = new album(albumList[i]);
      }
      console.log(this);
      this.albumCount = albumList.length;
      this.albumList = albumList;
      return albumList;
    });
  };

  return {
    album: album,
    getAlbums: getAlbums,
  };
})(appleApis);

const view = (() => {
  const selectors = {
    info: "search-info p",
    albums: "search-results",
    searchBtn: "btn-search",
    searchBox: "input-search",
  };

  const albumHtml = (albumList) => {
    let html = "";
    for (let i = 0; i < albumList.length; i++) {
      html += `
        <div class="album-container flex-item-space">
          <div class="album-cover">
          <img class="cover-img" src="${albumList[i].cover}" />
          </div>
          <div class="album-name">
            ${albumList[i].name}
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
  const addLoading = function () {
    view.render(
      document.querySelector("." + view.selectors.info),
      `
      <div class="loading">
        <div class="loading-circle1"></div>
        <div class="loading-circle2"></div>
      </div>
      `
    );
  };

  const searchAlbums = () => {
    addLoading();

    let searchValue = document.querySelector(
      "." + view.selectors.searchBox
    ).value;

    if (searchValue != "") {
      model.getAlbums(searchValue).then((albums) => {
        view.render(
          document.querySelector("." + view.selectors.albums),
          view.albumHtml(albums)
        );
        view.render(
          document.querySelector("." + view.selectors.info),
          `${model.albumCount} results for "${searchValue}"`
        );
      });
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
