import React, {Component} from 'react';
import Movie from "./Movie";

class MovieList extends Component {
    state = {
        movies: []
      }

      async componentDidMount() {
        try {
          const res = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=625c617a9abf086d7bc551088835e18f&language=en-US&page=1"
          );
          const movies = await res.json();
          console.log(movies);
          this.setState({
    movies: movies.results
          })
        } catch (e) {
          console.log(e);
        }
      }

    render() {

        return(
            <div>
                {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
            </div>
        )
    }
}
export default MovieList;
