import React, { Component } from "react";
import "./MovieDetail.css";

const POSTER_PATH = 'http://image.tmdb.org/t/p/w200';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280/';

class MovieDetail extends Component {
  state = {
    movie: {}
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=625c617a9abf086d7bc551088835e18f&language=en-US`
      );
      const movie = await res.json();
      console.log(movie);
      this.setState({
        movie: movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {movie} = this.state;
    return (
      <div className="movie-container">
        <div className="backdrop-container">
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        </div>
        <div className="posterBackdrop-container">
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </div>
        
        <div className="title-date-container">
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        </div>
        <div className="p-info-container">
      <p>{movie.overview}</p>
      </div>
      </div>
    
      
    );
  }
}
export default MovieDetail;
