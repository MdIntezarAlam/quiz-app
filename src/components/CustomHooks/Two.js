import React, { useState } from "react";
import TwoCustomHooks from "./TwoCustomHooks";

const Two = () => {
  const [count, setCount] = useState(0);

  TwoCustomHooks({ count });

  const clickedBtn = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h6>{count}</h6>
      <button onClick={clickedBtn}>
        Clicked me to check your reasult at the title bar
      </button>
    </div>
  );
};

export default Two;
