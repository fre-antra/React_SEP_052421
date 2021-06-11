const iTuneAPI = (() => {
  const getAlbums = (name) =>
    fetchJsonp(
      `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=50`
    ).then((response) => response.json());

  return {
    getAlbums,
  };
})();

const View = (() => {
  const domStrings = {
    list: "display__list",
    input: "display__input",
  };

  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  const createAlbums = (albums) => {
    let htmlString = "";
    albums.forEach((ele) => {
      htmlString += `
                <li>
                    <img src="${ele.artworkUrl100}" />
                    <div class="info">
                        <h1>
                        ${ele.collectionName}
                        </h1>
                        <br/>
                        <h4>
                            by ${ele.artistName}
                        </h4>
                    </div>
                </li>
            `;
    });
    return htmlString;
  };

  return {
    domStrings,
    render,
    createAlbums,
  };
})();

const Model = ((api, view) => {
  class State {
    #albumlist = [];
    #input = "";

    get input() {
      return this.#input;
    }

    set input(input) {
      const inputelement = document.querySelector("." + view.domStrings.input);
      inputelement.value = input;
      this.#input = input;
    }

    get albumlist() {
      return this.#albumlist;
    }

    set albumlist(newlist) {
      this.#albumlist = newlist;

      const albumElement = document.querySelector("." + view.domStrings.list);
      const albumTemp = view.createAlbums(this.#albumlist);
      view.render(albumElement, albumTemp);
    }
  }

  const getAlbums = api.getAlbums;

  return {
    State,
    getAlbums,
  };
})(iTuneAPI, View);

const AppController = ((model, view) => {
  const state = new model.State();

  const searchArtist = () => {
    const input = document.querySelector("." + view.domStrings.input);

    input.addEventListener("keyup", (event) => {
      if (event.key === "Enter" && event.target.value !== "") {
        state.input = event.target.value;
        model.getAlbums(state.input).then((data) => {
          state.albumlist = data.results;
          console.log(state.albumlist);
        });

        state.input = "";

        // event.target.value = '';
      }
    });
  };

  const init = () => {
    searchArtist();
  };

  return {
    init,
  };
})(Model, View);

AppController.init();

const tst = iTuneAPI.getAlbums("Rhianna").then((data) => {
  console.log(data);
});
