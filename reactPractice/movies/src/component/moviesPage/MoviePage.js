import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./moviepageStyle.css";
const MoviePage = (props) => {
  console.log(props);
  let location = useLocation();

  const movie = location.state.data;

  return (
    <div className="moviepage">
      {/* <div className="container"> */}
      <div className="movie__poster">
        <img src={movie.poster} alt={movie.name} />
      </div>

      <div className="movie__contant">
        <h1>{movie.name}</h1>
        <p>{movie.detail}</p>
        <p>{movie.year}</p>

        <p className="btn-backhome">
          <Link to={"/"}>Back To Movies</Link>
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default MoviePage;
