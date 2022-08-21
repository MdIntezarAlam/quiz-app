import React, { useEffect, useState } from "react";

const UseEffct_CleanUP_Fun = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    console.log("Add event");
    window.addEventListener("resize", actualWidth);

    //cleanup fun
    return () => {
      console.log("remove event");
      window.addEventListener("resize", actualWidth);
    };
  });

  return (
    <div style={{ position: "fixed" }}>
      <div style={{ margin: "40px ", padding: "50px", textAlign: "center" }}>
        <h3 style={{ textAlign: "center" }}>The window width is</h3>
        <h4 style={{ textAlign: "center" }}>{widthCount}</h4>
      </div>
    </div>
  );
};

export default UseEffct_CleanUP_Fun;
