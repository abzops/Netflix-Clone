import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../../axios";
import { API_KEY, imageUrl } from "../../../constants/constants";

function Popular(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
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

export default Popular;
