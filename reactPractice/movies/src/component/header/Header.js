import React from "react";
import Gallery from "../moviesGallery/Gallery";
import './headerStyle.css'

const Header = () => {
  let searchMovie = "Avenger";

  const userInput = (e) => {
    console.log(searchMovie, e.target.value );
    if (e.target.value !== "" && e.keyCode === 13) {
      searchMovie = e.target.value;
      e.target.value = "";
      // dispatch
    }
  };



  return (
    <>
      <div className="search">
        <header className="search__header">Search Movies</header>
        <input
          className="search__input"
          type="text"
          placeholder="Search movies ..."
          onKeyDown={userInput}
        />
        <p className="search__notation"> notation </p>
      </div>
      <Gallery searchMovie={searchMovie}></Gallery>
    </>
  );
};

export default Header;
