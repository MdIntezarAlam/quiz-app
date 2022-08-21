import React from "react";
import { useState } from "react";

const Usestate_withObject = () => {
  const [object, setobject] = useState({
    name: "Md Intezar alam",
    age: 21,
    branch: "Computer Science & Engg.",
  });
  //update object with copy spered operator
  const updatObject = () => {
    setobject({
      ...object,
      name: "Mukesh Bhai",
      age: 28,
      branch: "Computer Science & Engg.",
    });
  };

  return (
    <div>
      <h3
        style={{
          width: "80%",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "gray",
          borderRadius: "10px",
          margin: "20px auto",
          position: "relative",
        }}
      >
        Name: {object.name}, age: {object.age}, branch: {object.branch}
      </h3>
      <button
        onClick={updatObject}
        style={{
          color: "white",
          outline: "none",
          fontSize: "16px",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "blue",
          borderRadius: "10px",
          marginLeft: "20%",
          width: "50%",
        }}
      >
        Click me to Update
      </button>
    </div>
  );
};

export default Usestate_withObject;
