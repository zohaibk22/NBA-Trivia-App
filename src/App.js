import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import GameMenu from "./GameMenu";

export default class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>NBA Trivia</h1>
        </header>
        <Link to="/">Home</Link>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Menu">
          <GameMenu />
        </Route>
      </>
    );
  }
}
