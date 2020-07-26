import React from "react";
import classes from "./BreachInfo.css";

const BreachInfo = (props) => {
  const breachObject = JSON.parse(localStorage.getItem("breach"));
  const breachDetails =
    breachObject !== null ? (
      <>
        <div className={classes.BtnContainer}>
          <button className={classes.CloseBtn} onClick={props.closeModalHandler}>
            <i class="far fa-times-circle fa-lg"></i>
          </button>
        </div>
        <h4>Site Name: {breachObject.Name}</h4>{" "}
        <p className={classes.Description}>{breachObject.Description}</p>{" "}
      </>
    ) : null;
  return <div className={classes.Info}>{breachDetails}</div>;
};

export default BreachInfo;
