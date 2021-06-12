import { itunesAPI } from "./itunesAPI.js";
import { View } from "./View.js";

export const Model = ((api, view) => {
  class State {
    #albumsList = [];
    #albumsCount = 0;
    #input = "";

    get albumsList() {
      return this.#albumsList;
    }

    set albumsList(newArr) {
      this.#albumsList = newArr;

      const albums = document.querySelector("." + view.domString.albums);
      const albumsTemplate = view.createAlbumsTemplate(this.#albumsList);
      view.render(albums, albumsTemplate);
    }

    get albumsCount() {
      return this.#albumsCount;
    }

    set albumsCount(num) {
      this.#albumsCount = num;

      const result_info = document.querySelector(
        "." + view.domString.result_info
      );
      const result_info_Template = view.createResultInfoTemplate(
        this.#albumsCount,
        this.#input
      );
      view.render(result_info, result_info_Template);
    }

    get input() {
      return this.#input;
    }

    set input(newInput) {
      this.#input = newInput;
    }
  }

  const getAlbums = api.getAlbums;

  return {
    State,
    getAlbums,
  };
})(itunesAPI, View);

