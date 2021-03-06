import axios from "../../../axios";
import "./Banner.css";
import { API_KEY, imageUrl } from "../../../constants/constants";
import { useEffect, useState } from "react";

function Banner() {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    axios
      .get(`tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        // console.log(response);
        for (let i = 0; i < 20; i++) {
          task(i);
        }

        function task(i) {
          setTimeout(function () {
            setMovie(response.data.results[i]);
          }, 8000 * i);
        }
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie.name}</h1>
        <div className="buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie.overview}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
