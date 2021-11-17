import React, { Fragment } from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>Movie Trailers</header>
    </Fragment>
  );
}

export default Header;
