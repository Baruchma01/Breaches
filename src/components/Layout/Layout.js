import React, { useState, useEffect } from "react";

import classes from "./Layout.css";

const Layout = (props) => {
  const [isDark, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("darkMode") !== null) {
      setDarkMode(true);
    }
  }, []);

  const darkMode = {
    backgroundColor: "black",
  };

  const headerDark = {
    backgroundColor: "#111111"
  }

  const darkModeHandler = () => {
    if (isDark) {
      setDarkMode(false);
      localStorage.removeItem("darkMode");
    } else {
      setDarkMode(true);
      localStorage.setItem("darkMode", true);
    }
  };

  return (
    <div style={isDark ? darkMode : null}>
      <header style={isDark? headerDark: null}>
        <button className={classes.DarkMode} onClick={darkModeHandler}>
          <i className={!isDark ? "fas fa-moon" : "fas fa-sun"}></i>
        </button>
        <h1>Breaches Info</h1>
        <span className={classes.Byline}>Last Known Breaches</span>
        <span className={classes.Byline}>Click on site for more info</span>
      </header>
      <main className={classes.Content}>{props.children}</main>
    </div>
  );
};

export default Layout;
