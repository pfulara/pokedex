import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Poke from "./Poke.js";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div id="pageContent">
        <Route exact path="/" component={Home} />
        <Route path="/:name" component={Poke} />
      </div>
    </BrowserRouter>
  );
}
