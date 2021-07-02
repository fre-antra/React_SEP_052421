import "./GalleryStyle.css";
import { React } from "react";
// import { useEffect } from "react";
// import { Route, Switch, Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const Gallery = ({ photos, searchTarget }) => {
  const galleryTitle =
    searchTarget === ""
      ? searchTarget.charAt(0).toUpperCase() + searchTarget.substring(1)
      : "Mountain";

  console.log(galleryTitle);
  const content = () => {
    // console.log(searchTarget);
    // ["mountain", "beaches", "birds", "food"].includes(searchTarget)
    //   ? console.log("YES")
    //   : console.log("NO");

    if (photos.length > 0) {
      return photos.map((image) => {
        let farm = image.farm;
        let server = image.server;
        let id = image.id;
        let secret = image.secret;
        let title = image.title;
        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
        return (
          <p className="gallery__imageBolck" key={id}>
            <img src={url} alt={title} />
          </p>
        );
      });
    } else {
      return (
        <div style={{ textAlign: "center", paddingTop: "40px" }}>
          <h2>No Images Found</h2>
          <p>Please try a different search term</p>
        </div>
      );
    }
  };

  return (
    <>
      <h1 className="gallery__title"> {galleryTitle} Photos </h1>
      <section className="gallery">{content()}</section>
    </>
  );
};

export default Gallery;
