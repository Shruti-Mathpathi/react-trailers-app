import React, { useEffect, useState } from "react";
import classes from "./Movies.module.css";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const responseJsonData = await fetch(
        "https://peaceful-forest-62260.herokuapp.com/"
      );

      if (!responseJsonData.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await responseJsonData.json();

      setMovies(Object.values(responseData.moviesData));
    };
    fetchMovies().catch((error) => {
      console.log(error.message);
    });
  }, []);

  function showImg(e) {
    let img = document.getElementById(`${e}`);
    img.style.display = "block";
  }

  return (
    <div className={classes.row__movies}>
      {movies.map((movie) => (
        <img
          style={{ display: "none" }}
          key={movie.EventCode}
          className={classes.row__movie}
          src={movie.EventImageUrl}
          alt=""
          id={movie.EventCode}
          onLoad={showImg.bind(this, movie.EventCode)}
        />
      ))}
    </div>
  );
}

export default Movies;
