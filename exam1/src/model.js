import { albumsAPI } from "./api.js";
import { View } from "./view.js";

export const Model = ((api, view) => {
  const getAPI = api.getAPI;

  class State {
    #input = "";
    #resultNum = 0;
    #resultList = [];

    get resultList() {
      return this.#resultList;
    }

    get input() {
      return this.#input;
    }

    get resultNum() {
      return this.#resultNum;
    }

    set resultList(newList) {
      this.#resultList = newList;

      const resultElem = document.querySelector("." + view.domString.resultList);
      const resultTmp = view.createResults(this.#resultList);
      view.render(resultElem, resultTmp);

      const infoElem = document.querySelector("." + view.domString.headerText);
      const infoTmp = view.createInfo(this.#resultNum, this.#input);
      view.render(infoElem, infoTmp);
    }

    set input(input) {
      this.#input = input;
    }

    set resultNum(num) {
      this.#resultNum = num;
    }
  }

  return {
    getAPI,
    State,
  };
})(albumsAPI, View);
