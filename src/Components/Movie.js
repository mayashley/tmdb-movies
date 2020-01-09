import React  from "react";
import PropTypes from "prop-types";

const POSTER_PATH = 'http://image.tmdb.org/t/p/w200';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280/';



const Movie = ({movie}) => (
    <div>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.release_date}</h3>
      <p>{movie.overview}</p>
    </div>
  );

export default Movie;

Movie.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired,
};


// funstional stateless component,if no state, or lifecycle methods then use this component.