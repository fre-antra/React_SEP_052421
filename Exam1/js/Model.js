import View from "./View";
import API from "./API";

const Model = ((api, view) => {
  class State {
    #albums = [];
    #input = "";

    get input() {
      return this.#input;
    }

    set input(input) {
      this.#input = input;
    }

    get albums() {
      return this.#albums;
    }

    set albums(newAlbums) {
      this.#albums = newAlbums;
      const albumsElments = document.querySelector(
        "." + view.domString.albums
      );
      const albumsTmp = view.createAlbumsTmp(this.#albums);
      view.render(albumsElments, albumsTmp);
    }
  }

  const getAlbums = api.getAlbums;

  return {
    State,
    getAlbums
  }
})(API, View);


export default Model;