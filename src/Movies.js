import React, { Fragment, useState } from "react";
import classes from "./Movies.module.css";
import YouTube from "react-youtube";

function Movies(props) {
  const movies = props.movies;
  const [trailerUrl, setTrailerUrl] = useState("");
  const [code, setCode] = useState("");

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  function showImg(e) {
    let img = document.getElementById(`${e}`);
    img.style.display = "block";
  }

  //logic to play the trailer
  const handleClick = (movie) => {
    if (movie.TrailerURL) {
      setCode(movie.EventCode);
      setTrailerUrl(movie.TrailerURL.split("v=")[1].split("&")[0]);
    }
  };

  return (
    <div className="row">
      <div className={classes.row__movies}>
        {movies.map((movie) => (
          <Fragment key={movie.EventCode}>
            {trailerUrl && movie.EventCode === code && (
              <YouTube videoId={trailerUrl} opts={opts} />
            )}
            <img
              style={{ display: "none" }}
              onClick={() => handleClick(movie)}
              className={classes.row__movie}
              src={movie.EventImageUrl}
              alt=""
              id={movie.EventCode}
              onLoad={showImg.bind(this, movie.EventCode)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Movies;
