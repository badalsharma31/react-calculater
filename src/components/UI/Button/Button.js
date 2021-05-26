import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <>
      {props.sp ? (
        <button className="button" onClick={props.click}>
          {props.children}
        </button>
      ) : (
        <button className="button " onClick={props.click}>
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
