import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Gallery from "../component/gallery/Gallery";
// import { Route, Switch, Link } from "react-router-dom";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

// export const getData = (props) => {
//   console.log(props.searchTarget);
//     axios
//       .get(
//         `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
//       )
//       .then((res) => (res.data.photos.photo))
//       .catch((err) => console.log(err));
// }

const PhotoData = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);

  const searchTarget = useSelector((state) => state.search.searchTarget);

  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTarget}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) =>
        dispatch({ type: "photosUpdate", payload: res.data.photos.photo })
      )
      .catch((err) => console.log(err));

    console.log("Fetch data:", searchTarget, photos[0]);
  }, [searchTarget]);

  return (
    <>
      {/* <Route
        path={`/${searchTarget}`}
        render={() =><Gallery photos={photos} searchTarget={searchTarget} />}
      /> */}
      <Gallery photos={photos} searchTarget={searchTarget} />
    </>
  );
};

export default PhotoData;
