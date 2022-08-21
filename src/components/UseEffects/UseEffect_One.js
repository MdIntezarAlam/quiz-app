import React, { useEffect, useState } from "react";

const UseEffect_One = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("2nd render");
    if (count >= 1) {
      document.title = `Md Intezar Alam (${count})`;
    } else {
      document.title = `title `;
    }
  }, [count]); //only count value change then useEffect will render otherwise it will not render

  //we can use multiple useEffect
  useEffect(() => {
    console.log("3rd render");
  });

  console.log("outside  of useState block"); //fist render

  //useEffect mai pahale useeffect ka outside wala block work karega
  //then useEffect ke inside wala block kam karega

  const clicked = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clicked}>click Me</button>
    </div>
  );
};

export default UseEffect_One;
