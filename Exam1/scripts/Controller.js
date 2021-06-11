//App Controller

import { View } from "./View.js";
import { Models } from "./Model.js";

const Controller = ((view, model) => {
  const searchInput = document.querySelector("." + view.domString.search);
  const searchIcon = document.querySelector("." + view.domString.searchIcon);
  const infoTitle = document.querySelector("." + view.domString.info);
  const cardSection = document.querySelector("." + view.domString.cardsection);

  const init = () => {
    searchInput.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        if (e.target.value === null || e.target.value.trim() === "") {
          alert("Type artist name");
        } else {
          //FIXME for some reason the then function was not working from the models file.
          fetch(
            `https://itunes.apple.com/search?term=${e.target.value}&media=music&entity=album&attribute=artistTerm&limit=200"`
          )
            .then((response) => response.json())
            .then((data) => {
              const albumHtmlTmpString = view.createCardTmp(data.results);
              view.render(cardSection, albumHtmlTmpString);
              view.infoTitle(infoTitle, data.resultCount, e.target.value);
            });

          //FIXME Then of undefined error even after using fetchJsonp
          //   model.getITunesAlbums(e.target.value).then((data) => {
          //     console.log(data);
          //     const albumHtmlTmpString = view.createCardTmp(data.results);
          //     console.log(albumHtmlTmpString);
          //   });
        }
      }
    });
  };

  return {
    init,
  };
})(View, Models);

Controller.init();
