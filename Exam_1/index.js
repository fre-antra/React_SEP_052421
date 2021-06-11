// Model View Controller

const API = (() => {
  const baseUrl = "https://itunes.apple.com/search?term=";
  const tailUrl = "&media=music&entity=album&attribute=artistTerm&limit=200";

  const getImg = (name) =>
    fetch([baseUrl, name, tailUrl].join("")).then((response) =>
      response.json()
    );

  return { getImg };
})();

const View = (() => {
  const domString = {
    input: ".search",
    button: ".button",
    cards: ".cards",
    result: ".result",
  };

  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  const createCard = (cardArray) => {
    let htmlString = "";
    cardArray.forEach((ele) => {
      htmlString += `<div class="card">
          <img
            src="${ele.artworkUrl100}"
            alt=""
            class="img"
          />
          <p class="description">${ele.collectionName}</p>
        </div>`;
    });
    return htmlString;
  };

  return { domString, render, createCard };
})();

const Model = ((api, view) => {
  class albumSearch {
    #result = "Search Albums by ArtistName:";
    #album = [];

    set result(content) {
      const resultField = document.querySelector(view.domString.result);
      this.#result = content;
      view.render(resultField, this.#result);
    }

    set album(content) {
      this.#album = content;
      const cardsField = document.querySelector(view.domString.cards);
      const cardHtml = view.createCard(this.#album);
      view.render(cardsField, cardHtml);
    }
  }
  const getImg = api.getImg;
  return { albumSearch, getImg };
})(API, View);

const appController = ((model, view) => {
  const album = new model.albumSearch();
  const input = document.querySelector(view.domString.input);
  const button = document.querySelector(view.domString.button);

  const upgrade = () => {
    model.getImg(input.value).then((data) => {
      album.album = data.results;
      album.result = data.resultCount + " results for '" + input.value + "'";
      console.log(data);
    });
  };

  const init = () => {
    input.addEventListener("keyup", (event) => {
      if (event.key === "Enter" && event.target.value !== "") {
        upgrade();
      }
    });
    button.addEventListener("click", upgrade);
  };
  return { init };
})(Model, View);

appController.init();
