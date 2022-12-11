import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import Api from "../API";
import Loading from "./Loading";
import "./Search.css";

const Search = () => {
  const [loading, setLoading] = React.useState(false);

  const [movies, setMovies] = React.useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  React.useEffect(() => {
    const load = async () => {
      setLoading(true);
      const response = await Api.getSearch(query);
      setMovies(response.loadAPI.results);
      setLoading(false);
    };
    load();
  }, [query]);

  if (loading) return <Loading />;

  if (!movies) return <p>Filme não encontrado</p>;

  if (movies)
    return (
      <section className="container">
        <div className="list_movies">
          {movies.map((movie, key) => (
            <div key={key} className="list_imgs">
              <Link to={`/movie/details/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.original_title || movie.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Search;
