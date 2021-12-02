import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../../axios";
import { API_KEY, imageUrl } from "../../../constants/constants";

function Originals(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`discover/tv?api_key=${API_KEY}&with_genres=18`)
      .then((response) => {
        //console.log(response.data);
        setMovies(response.data.results);
      });
  }, []);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <>
            <div className="img">
              <img
                className="poster"
                src={`${imageUrl + obj.poster_path}`}
                alt="Posters"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Originals;
