import React, { useState } from "react";
import Form from "./Form";

const Usestatewith_Array = () => {
  const dummmy_Data = [
    {
      id: 0,
      name: "Md Intezar Alam",
      age: 21,
    },
    {
      id: 1,
      name: "Mukesh Bhai",
      age: 28,
    },
    {
      id: 3,
      name: "Irfan Bhai",
      age: 28,
    },
  ];
  const [state, setState] = useState(dummmy_Data);

  const clearallData = () => {
    setState([]); //passing Empty Array
  };

  return (
    <div
      style={{
        width: "80%",
        textAlign: "center",
        backgroundColor: "gray",
        borderRadius: "20px",
        minHeight: "50vh",
        margin:'30px auto'
        // marginLeft: "50px",
        // marginRight: "50px",
      }}
    >
      <Form />
      {state.map((item) => (
        <h1
          style={{
            textAlign: "center",
            padding: "10px",
            color: "white",
            backgroundColor: "black",
            fontSize: "19px",
            borderRadius: "20px",
            width: "70%",
            margin: "10px auto",
          }}
          key={item.id}
        >
          Name: {item.name} age: {item.age}
        </h1>
      ))}
      {/* Delete All Data using UseState */}

      <div
        style={{
          display: "flex",
          textAlign: "center",
          padding: "10px",
          color: "white",
          fontSize: "19px",
          borderRadius: "20px",
          width: "70%",
          margin: "10px auto",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={clearallData}
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
            outline: "none",
            width: "30%",
            padding: "7px",
            fontSize: "17px",
          }}
        >
          Clear All{" "}
        </button>
      </div>
    </div>
  );
};

export default Usestatewith_Array;
