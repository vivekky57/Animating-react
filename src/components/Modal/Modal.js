import React from "react";
// import { Transition } from "react-transition-group";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

const animationTiming = {
  enter: 400, //we'll use for adding this elemrnt
  exit: 1000, // exit defines the duration it will use for removing it.
};

const modal = (props) => {
  // const cssClasses = ["Modal"];

  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames="fade-slide"
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
