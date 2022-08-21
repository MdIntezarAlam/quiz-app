import React, { useState } from "react";
const Toogle = () => {
  const [toggle, setToogle] = useState("I am Toogle ON");

  const toggleChange = () => {
    // let newToogle = toggle;
    // //ternory operator
    // newToogle === "I am Toogle ON"
    //   ? setToogle("I am Off")
    //   : setToogle("I am Toogle ON");

    // if Conditation
    let newToogle = toggle;

    if (newToogle === "I am Toogle ON") {
      setToogle("I am OFF ");
    } else {
      setToogle("I am Toogle ON");
    }
  };

  return (
    <div
      style={{
        width: "70%",
        backgroundColor: "gray",
        textAlign: "center",
        margin: "30px auto",
        padding: "40px",
        borderRadius: "10px",
      }}
    >
      <h1> {toggle}</h1>
      <button
        onClick={toggleChange}
        style={{
          backgroundColor: "blue",
          textAlign: "center",
          margin: "30px auto",
          borderRadius: "10px",
          width: "70%",
          padding: "8px",
          color: "#fff",
        }}
      >
        Toogle
      </button>
    </div>
  );
};

export default Toogle;
