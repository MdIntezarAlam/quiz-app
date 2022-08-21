//1=> crete useEffect hooks in another compo and export frfault
//2=> import in main compo wherever we want to use just import
import React, { useState } from "react";
import UseEffectHooks from "./UseEffectHooks";
const CustomHooks = () => {
  const [title, setTilte] = useState(0);

  const ClickedButton = () => {
    setTilte(title + 1);
  };
UseEffectHooks({title})

  return (
    <div>
      <h1>Cutom hooks in react</h1>
      <p>{title}</p>
      <button type="" onClick={ClickedButton}>
        change Title
      </button>
    </div>
  );
};

export default CustomHooks;
