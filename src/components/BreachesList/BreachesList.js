import React from "react";
import classes from "./BreachesList.css";
import LazyLoad from '../LazyLoad/LazyLoad';

const BreachesList = (props) => {
  return (
    <div className={classes.Center}>
      {(props.breaches || []).map((item) => {
        return (
          <div key={item.Name} className={classes.PropertyCard} onClick={() => props.clickHandler(item.Name)}>
            <span>
              <div className={classes.PropertyImage}>
                <div className={classes.PropertyImageTitle}></div>
              </div>
            </span>
            <div className={classes.PropertyDescription}>
              <h5>Title: {item.Title} </h5>
              <p>BreachData: {item.BreachDate}</p>
              <LazyLoad>
                <img
                  src={item.LogoPath}
                  alt="logo"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "black",
                  }}
                />
              </LazyLoad>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BreachesList;
