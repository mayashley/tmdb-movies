import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

const POSTER_PATH = "http://image.tmdb.org/t/p/w200";

const Movie = ({ movie }) => (
  <div className="single-movie-container">
    <Link to={`/${movie.id}`}>
      <div className="movie-clickable-poster">
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      </div>
    </Link>
  </div>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

// funstional stateless component,if no state, or lifecycle methods then use this component.
