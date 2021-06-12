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
          model.getITunesAlbums(e.target.value).then((data) => {
            const albumHtmlTmpString = view.createCardTmp(data.results);
            view.render(cardSection, albumHtmlTmpString);
            view.infoTitle(infoTitle, data.resultCount, e.target.value);
          });
        }
      }
    });
    searchIcon.addEventListener("click", () => {
      if (searchInput.value === null || searchInput.value.trim() === "") {
        alert("Type Artist name");
      } else {
        model.getITunesAlbums(searchInput.value).then((data) => {
          const albumHtmlTmpString = view.createCardTmp(data.results);
          view.render(cardSection, albumHtmlTmpString);
          view.infoTitle(infoTitle, data.resultCount, searchInput.value);
        });
      }
    });
  };

  return {
    init,
  };
})(View, Models);

Controller.init();
