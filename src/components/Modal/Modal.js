import React from "react";
import classes from "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
  const displayBlock = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: 'block',
    zIndex: '1'
  };

  const displayNone = {
    display: "none",
  };

  const showHideStyle = show ? displayBlock : displayNone;
  return (
    <div style={showHideStyle}>
      <section className={classes.ModalMain}>
        {children}
      </section>
    </div>
  );
};

export default Modal;
