import { Model } from "./model.js";
import { View } from "./view.js";

export const AppController = ((model, view) => {
  const state = new model.State();

  const addResult = () => {
    const inputQuery = document.querySelector("." + view.domString.input);

    inputQuery.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        state.input = e.target.value;
        model.getAPI(state.input).then((data) => {
          console.log(data);
          if (data.resultCount === 0) {
            state.resultList = [];
            state.resultNum = 0;
          } else {
            console.log(data.results);
            state.resultNum = data.resultCount;
            state.resultList = data.results;
          }
        });
      }
    });
  };

  const init = () => {
    state.resultList = [];
    state.resultNum = 0;
    addResult();
  };

  return {
    init,
  };
})(Model, View);
