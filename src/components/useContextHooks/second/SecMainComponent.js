import React, { createContext } from "react";
import SecOne from "./SecOne";

//1=> crete context variable and export
//2=> wrap this variable with provider in main componetns
//3=> use main componets whatever we want to use
//4=> pass the data value Fun in provider
//5=> jis bhee compo mai use karna hai pahle import kre pir new var mai store kre
//6=> pr store var ko usekre

const myData = createContext();  

const SecMainComponent = () => {
  return (
    <myData.Provider
      value={{
        id: "0",
        name: "Md Intezar Alam",
        age: 21,
        branch: "Computer Science & Engineering",
        living: "CDC boys Hostel",
        mob: 6238564088,
      }}
    >
      <SecOne />
    </myData.Provider>
  );
};

export default SecMainComponent;
export { myData };
