import { Model } from "./Model.js";
import { View } from "./View.js";

export const Controller = ((model, view) => {
  const state = new model.State();
  const input = document.querySelector("." + view.domString.input);

  const addAlbumsToList = () => {
    const input = document.querySelector("." + view.domString.input);
    const btn = document.querySelector("." + view.domString.btn);

    input.addEventListener("input", (e) => {
      state.input = e.target.value;
    });

    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter" && e.target.value !== "") {
        model.getAlbums(e.target.value).then((data) => {
          state.albumsList = data.results;
          state.albumsCount = data.resultCount;
        });
      }
    });

    btn.addEventListener("click", () => {
      model.getAlbums(state.input).then((data) => {
        state.albumsList = data.results;
        state.albumsCount = data.resultCount;
      });
    });
  };

  const init = () => {
    addAlbumsToList();
  };

  return {
    init,
  };
})(Model, View);

Controller.init();
