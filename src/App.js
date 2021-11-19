import Header from "./Header";
import Movies from "./Movies";
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [masterMoviesList, setMasterMoviesList] = useState([]);
  const [filteredLangMovies, setFilteredLangMovies] = useState([]);

  // fetching list of movies
  useEffect(() => {
    const fetchMovies = async () => {
      const responseJsonData = await fetch(
        "https://peaceful-forest-62260.herokuapp.com/"
      );

      if (!responseJsonData.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await responseJsonData.json();

      const moviesList = Object.values(responseData.moviesData);
      setMovies(moviesList);
      setMasterMoviesList(moviesList);

      let options = responseData.languageList.map((d) => ({
        value: d,
        label: d
      }));

      setLanguages(options);
    };
    fetchMovies().catch((error) => {
      alert("Something went wrong!");
    });
  }, []);

  //filter movies based on the language
  function onChangeLangFilter(langFilter) {
    if (langFilter.length > 0) {
      let prevList = [];
      for (let i = 0; i < langFilter.length; i++) {
        let tempMoviesList = masterMoviesList;
        let fileredList = [];
        fileredList = tempMoviesList.filter(
          (f) => f.EventLanguage === langFilter[i].value
        );
        setFilteredLangMovies([...prevList, ...fileredList]);
        setMovies([...prevList, ...fileredList]);
        prevList = movies;
      }
    } else {
      setMovies(masterMoviesList);
    }
  }

  //filter movies based on the genre
  function onChangeGenre(genreFilter) {
    if (genreFilter.length > 0) {
      let prevList = [];
      for (let i = 0; i < genreFilter.length; i++) {
        let tempMoviesList =
          filteredLangMovies.length > 0 ? filteredLangMovies : masterMoviesList;
        let fileredList = [];
        fileredList = tempMoviesList.filter((f) => {
          let ans = false;
          let genre = f.EventGenre.split("|");
          for (let j = 0; j < genre.length; j++) {
            if (genre[j] === genreFilter[i].value) {
              ans = true;
              break;
            }
          }
          if (ans === true) {
            return f;
          }
        });
        setMovies([...prevList, ...fileredList]);
        prevList = movies;
      }
    } else {
      setMovies(filteredLangMovies);
    }
  }

  return (
    <div className="App">
      <Header
        options={languages}
        onChange={onChangeLangFilter}
        onChangeGenre={onChangeGenre}
      />
      <Movies movies={movies} />
    </div>
  );
}
