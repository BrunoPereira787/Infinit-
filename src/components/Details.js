import React from "react";
import Api from "../API";
import { useParams } from "react-router-dom";
import "./Details.css";
import Loading from "./Loading";

const Details = () => {
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = React.useState(null);
  const [trailer, setTrailer] = React.useState(null);

  React.useEffect(() => {
    const load = async () => {
      setLoading(true);
      const response = await Api.getDetails(id);
      const trailler = await Api.getTrailler(id);
      setTrailer(trailler.loadAPI.results[0]);
      setMovieDetails(response.loadAPI);
      setLoading(false);
    };
    load();
  }, [id]);

  if (loading) return <Loading />;

  if (movieDetails)
    return (
      <div className="details container">
        <div className="detailsImg">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
            alt={movieDetails.original_title || movieDetails.name}
          />
        </div>
        <div className="detailsInfo">
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          <div className="detailsGenres">
            {movieDetails.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
          <div className="detailsVotes">
            <div className="detailsVotesContainer">
              <p>{movieDetails.vote_average.toFixed(2)}</p>
            </div>
            {trailer ? (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target={"_blank"}
                rel="noreferrer"
              >
                Ver Trailer
              </a>
            ) : (
              <p>Trailler indisponivel</p>
            )}
          </div>
        </div>
      </div>
    );
};

export default Details;
