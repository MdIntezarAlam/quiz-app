import React, { useEffect } from "react";

const TwoCustomHooks = ({ count }) => {

  useEffect(() => {
    if (count >= 1) {
      document.title = `Title is going to be change (${count})`;
    } else {
      document.title = `Title `;
    }
  }, [count]);
};

export default TwoCustomHooks;
