import React, { useContext } from "react";
import { BioData } from "./One";
import Three from "./Three";
export default function Two() {
  const context = useContext(BioData);
  return (
    <div>
      <h1>components Two</h1>
      <p>
        My name is {context.name} i am {context.age} year's old, email{" "}
        {context.email} and i am currently in {context.branch}
      </p>
      <hr />
      <Three />
    </div>
  );
}
