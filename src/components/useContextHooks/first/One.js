//useContext
//it provides a way to pass data or state through the component tree without having to pass props down manually through each nested component.
//It is designed to share data that can be considered as global data for a tree of React components, such as the current authenticated user or theme(e.g. color, paddings, margins, font-sizes)
//syntax =>const createContext = useContext(initialValue);
//step1=>  createContext at the top of the function or other components and export it
//step2=>  createContext aur .provider ko wrap kar ke likhe aur usme value pass kre whatever we want
//step3=> wrap ke inside mai components ko use kre
//step4=> ab jis bhee compo mai use krna usmai pahle createContext wala var ko import kre
//pir new var banana hai aur createContext ko use kre

import React, { createContext } from "react";
import Two from "./Two";

const BioData = createContext();

const One = ({ name }) => {
  return (
    <BioData.Provider
      value={{
        name: "Intezar Alam",
        email: "mdintezar@gmail.com",
        age: 22,
        branch: "CSE",
      }}
    >
      <Two />
    </BioData.Provider>
  );
};
export default One;
export { BioData };
