import React, { useContext } from "react";
import { BioData } from "./One";

const Three = () => {
  const context = useContext(BioData); //context ham koi bhee name  de skate hai
  console.log(context);
  return (
    <div>
      <p>
        My name is {context.name} i am {context.age} year's old, email {context.email} and
        i am currently in {context.branch}
      </p>
    </div>
  );
};
export default Three;
