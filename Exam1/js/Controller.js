import Model from "./Model";
import View from "./View";

const Controller = ((model, view) => {
  const state = new model.State();
  
  const showAlbums = () => {
    const input = document.querySelector("." + view.domString.input);
    const btn = document.querySelector("." + view.domString.btn);
    
    input.addEventListener("keyup", (event) => {
      state.input = event.target.value;
    })

    btn.addEventListener("click", (event) => {
      model.getAlbums().then((data) => {
        state.albums = data;
        console.log(data)
      })
    })

    return {
      showAlbums
    }
  }
})(Model, View);

Controller.showAlbums();