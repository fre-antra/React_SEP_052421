import { View } from "./display";

function albumAPI() {
  let count;
  let view = View();
  let countEle = document.getElementById(`${view.domString.resultCount}`);
  let searchEle = document.getElementById(`${view.domString.resultCount}`);

  function search(input) {
    fetchJsonp(
      ` https://itunes.apple.com/search?term=${input}&media=music&entity=album&attribute=artistTerm&limit=200`
    )
      .then((res) => res.json())
      .then((albums) => {
        count = albums.resultCount;
        let htmlString1 = view.createAlbum(albums);
        let htmlString2 = view.creatCount(countEle, count);
        view.render()
      });
  }
}
