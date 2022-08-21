import React from "react";

export const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      style={{
        backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
            outline: "none",
            width: "30%",
            padding: "7px",
            fontSize: "16px",
      }}
    >
      {props.children}
    </button>
  );
};
