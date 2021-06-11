// import { search } from './search';

const albumAPI = (() => {
  const getAlbums = (input) => {
    return fetchJsonp(
      `https://itunes.apple.com/search?term=${input}&media=music&entity=album&attribute=artistTerm&limit=200`
    ).then((response) => response.json());
  };
  return { getAlbums };
})();

const View = (() => {
  const domString = {
    albumRes: "album-result",
    count: "result-count",
    searchInput: "search-input",
    searchBtn: "search-btn",
  };

  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  const createAlbum = (albums) => {
    let htmlString = "";
    albums.forEach((album) => {
      htmlString += `
        <div class="album">
          <img class="album-img" src="${album.artworkUrl100}" />
          <div class="album-title">
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

const Model = ((api) => {
  const getAlbums = api.getAlbums;

  return {
    getAlbums,
  };
})(albumAPI);

const AppController = ((view, model) => {
  let searchValue = "";
  const addLisToInput = () => {
    const albumEle = document.querySelector("." + view.domString.searchInput);
    albumEle.addEventListener("keyup", (event) => {
      searchValue = event.target.value;
      if (event.key === "Enter") {
        event.preventDefault();
        let searchInput = event.target.value;
        if (searchInput) {
          model.getAlbums(searchInput).then((res) => {
            const htmlString1 = view.creatCount(searchInput, res.resultCount);
            const countEle = document.querySelector("." + view.domString.count);
            view.render(countEle, htmlString1);

            const htmlString2 = view.createAlbum(res.results);
            const albumEle = document.querySelector(
              "." + view.domString.albumRes
            );
            view.render(albumEle, htmlString2);
          });
          event.target.value = "";
        }
      }
    });
  };
  const addLisToBtn = () => {
    const searchBtn = document.querySelector("." + view.domString.searchBtn);
    searchBtn.addEventListener("click", (event) => {
      if (searchValue) {
        model.getAlbums(searchValue).then((res) => {
          const htmlString1 = view.creatCount(searchValue, res.resultCount);
          const countEle = document.querySelector("." + view.domString.count);
          view.render(countEle, htmlString1);

          const htmlString2 = view.createAlbum(res.results);
          const albumEle = document.querySelector(
            "." + view.domString.albumRes
          );
          view.render(albumEle, htmlString2);
        });
      }
    });
  };
  const init = () => {
    addLisToInput();
    addLisToBtn();
  };

  return {
    init,
  };
})(View, Model);

AppController.init();
