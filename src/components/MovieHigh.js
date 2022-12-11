import React from "react";
import "./MovieHigh.css";
import { Link } from "react-router-dom";

const MovieHigh = ({ highMovies }) => {
  return (
    <div
      className="movie_high"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${highMovies.backdrop_path})`,
      }}
    >
      <div className="movie_background_vertical">
        <div className="movie_background_horizontal">
          <div className="movie_content">
            <h1>{highMovies.title}</h1>
            <p>{highMovies.overview}</p>
            <Link to={`/movie/details/${highMovies.id}`}>Ver detalhes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHigh;
