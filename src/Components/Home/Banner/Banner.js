import axios from "../../../axios";
import "./Banner.css";
import { API_KEY, imageUrl } from "../../../constants/constants";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  const style = "none";
  const [movie, setMovie] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
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

  const [urlId, setUrlId] = useState("");
  const all = () => {handleMovie(movie.id);setShow(!show)};

  const handleMovie = (id) => {
    //console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      });
  };

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie.title}</h1>
        <div className="buttons">
          <button onClick={() => all()} className="button">
            Play
          </button>
          <button className="button">My List</button>
        </div>
        {show ? (
          <div className="trailer">
            {urlId && (
              <YouTube videoId={urlId.key} opts={opts} className="YouTube" />
            )}
            {urlId && (
              <FontAwesomeIcon
                onClick={() => setShow(!show)}
                icon={faTimes}
                className="icons"
                size="3x"
              />
            )}
          </div>
        ) : null}
        <h1 className="description">{movie.overview}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
