import React from "react";
import { useEffect, useState } from "react";
import Api from "../API";
import MoviesLists from "./MoviesLists";
import MovieHigh from "./MovieHigh";
import Loading from "./Loading";

const Home = () => {
  const [loading, setLoading] = React.useState(false);

  const [movies, setMovies] = useState([]);
  const [highMovies, setHighMovies] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      setLoading(true);
      const response = await Api.getDataApi();
      setMovies(response);

      const onHigh = response.filter((movie) => movie.name === "onHigh");
      const numberRandom = Math.floor(
        Math.random() * onHigh[0].loadAPI.results.length - 1
      );
      let randomNumberMovie = onHigh[0].loadAPI.results[numberRandom];
      if (!randomNumberMovie) {
        randomNumberMovie = onHigh[0].loadAPI.results[0];
      }
      setHighMovies(randomNumberMovie);
      setLoading(false);
    };
    loadAll();
  }, []);

  if (loading) return <Loading />;

  if (highMovies && movies)
    return (
      <div>
        {highMovies && (
          <section className="movie_featured">
            <MovieHigh highMovies={highMovies} />
          </section>
        )}
        <section className="movie_lists">
          {movies.map((movie, key) => (
            <MoviesLists
              key={key}
              title={movie.title}
              type={movie.type}
              movies={movie.loadAPI}
            />
          ))}
        </section>
      </div>
    );
};

export default Home;
