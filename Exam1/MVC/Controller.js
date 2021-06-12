import { View } from './View.js';
import { Model } from './Model.js';

export const Controller = ((view, model) => {
  const inputElement = document.querySelector('#' + view.domString.searchBar);
  const resultContainerElement = document.querySelector(
    '#' + view.domString.cardsContainer
  );
  const infoElement = document.querySelector(
    '#' + view.domString.searchMessage
  );

  const addListenerOnInput = () => {
    inputElement.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const artist = event.target.value;

        if (artist) {
          model.getAllAlbums(artist).then((data) => {
            const messageDiv = `${data.resultCount} results for "${artist}"`;
            view.render(infoElement, messageDiv);

            const cardsDiv = view.createCardTmp(data.results);
            view.render(resultContainerElement, cardsDiv);
          });
        } else {
          const messageDiv = `Please input an artist name.`;
          view.render(infoElement, messageDiv);
          view.render(resultContainerElement, '');
        }
      }
    });
  };

  const init = () => {
    addListenerOnInput();
  };

  return {
    init,
  };
})(View, Model);
