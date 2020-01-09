import React from "react";
import logo from "./logo.png";
import {BrowserRouter as Router,Route, Switch, Link } from 'react-router-dom';
import MovieList from "./Components/MovieList";
import MovieDetail from "./Components/MovieDetail";
import "./App.css";


const App = () => (
      <Router>
      <div className="App">
        <header className="App-header">
          <Link to='/'>
          <img src={logo} className="app-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
<Route exact path="/" component={MovieList} />
<Route path="/:id" component={MovieDetail} />
</Switch>
      </div>
      </Router>
    );
 

export default App;



// normal component