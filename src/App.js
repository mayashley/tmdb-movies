import React, { Component } from "react";
import logo from "./logo.png";
import Movie from "./Components/Movie";
import "./App.css";

const movies = [
  {
    title: "star wars",
    id: 0,
    desc: "all about war in space"
  },
  {
    title: "falling up",
    id: 1
  },
  {
    title: "the long way home",
    id: 2
  },
  {
    title: "moby dick",
    id: 3
  }
];

class App extends Component {
  async componentDidMount() {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=625c617a9abf086d7bc551088835e18f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} desc={movie.desc} />
        ))}
      </div>
    );
  }
}

export default App;
