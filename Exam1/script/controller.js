import { View } from "./view.js";
import { Model } from "./model.js";

const Controller = ((view, model) => {

    const indicatorElement = document.querySelector('.' + view.domItems.indicator);
    const cardsElement = document.querySelector('.' + view.domItems.cardsDiv);
    const input = document.querySelector('.' + view.domItems.input);

    
    const init = () => {
        console.log(view);
        // get Artist name and fetch ablum
        input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && event.target.value !== '') {
                const artist = event.target.value
                console.log(view); //test for get user input

                //------------  STUCK in here -------------//
                // TypeError: Cannot read property 'then' of undefined
                // but success in API fetch
                // fixed by adding a return for fetchJsonp 
                model.getAlbums(artist).then((data) => {

                    // update indicator
                    const indicatorUpdate = `${data.results.length} result of "${artist}"`
                    view.render(indicatorElement, indicatorUpdate);
                    // create cards div
                    const createCards = view.createCard(data.results);
                    view.render(cardsElement, createCards);

                });
            }
        })
    }

    return {
        init
    }
})(View, Model);

Controller.init();