import React, { Fragment } from "react";
import Dropdown from "./Dropdown";
import classes from "./Header.module.css";

function Header(props) {
  let genre = [
    { label: "Drama", value: "Drama" },
    { label: "Romance", value: "Romance" },
    { label: "Action", value: "Action" },
    { label: "Adventure", value: "Adventure" },
    { label: "Thriller", value: "Thriller" },
    { label: "Comedy", value: "Comedy" },
    { label: "Animation", value: "Animation" },
    { label: "Horror", value: "Horror" },
    { label: "Biography", value: "Biography" },
    { label: "Mystery", value: "Mystery" },
    { label: "Family", value: "Family" },
    { label: "Fantasy", value: "Fantasy" },
    { label: "Crime", value: "Crime" }
  ];

  return (
    <Fragment>
      <header>
        <div className={classes.header}>
          <span style={{ color: "white" }}>Movie Trailers</span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginRight: "20px"
            }}
          >
            <Dropdown
              placeholder={"All Languages"}
              options={props.options}
              onChange={props.onChange}
            />
            <Dropdown
              placeholder={"All Genres"}
              options={genre}
              onChange={props.onChangeGenre}
            />
          </span>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
