import React, { useContext } from "react";
import { myData } from "./SecMainComponent";
const SecFour = () => {
  const gettingmyContext = useContext(myData);

  return (
    <div>
      <h1>
        Name:{gettingmyContext.name}, Age: {gettingmyContext.age}, branch
        {gettingmyContext.branch}, living:{gettingmyContext.living}, mob:
        {gettingmyContext.mob}
      </h1>
    </div>
  );
};

export default SecFour;
