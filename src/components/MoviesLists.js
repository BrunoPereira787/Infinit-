import React from "react";
import "./MoviesLists.css";
import { Link } from "react-router-dom";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useRef } from "react";

const MoviesLists = ({ movies, title }) => {
  const carrousel = useRef(null);

  const handleCLickBefore = () => {
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
  };

  const handleCLickNext = () => {
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
  };

  return (
    <div className="list">
      <h2>{title}</h2>
      <div className="navigateBefore" onClick={handleCLickBefore}>
        <MdNavigateBefore style={{ fontSize: 40 }} />
      </div>
      <div className="navigateNext" onClick={handleCLickNext}>
        <MdNavigateNext style={{ fontSize: 40 }} />
      </div>
      <div className="list_area" ref={carrousel}>
        <div className="list_movie">
          {movies.results.length > 0 &&
            movies.results.map((movie, key) => (
              <div key={key} className="list_img">
                <Link to={`/movie/details/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.original_title || movie.name}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesLists;
