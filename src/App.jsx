import Navbar from "./Components/NavBar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import React from "react";
import TVShows from "./Components/TVShows/TVShows";
import Movies from "./Components/Movies/Movies";

function App() {
  return (
    <div>
    <Navbar />
    <main>
      <Routes>
        <Route  path="/" exact element={<Home />} />
        <Route  path="/tvshows" exact element={<TVShows />} />
        <Route  path="/movies" exact element={<Movies />} />
      </Routes>
    </main>
  </div>
  );
}

export default App;
