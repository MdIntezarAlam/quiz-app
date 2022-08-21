//this is custom Hooks components which is define another compo
//and it will use in any compoents as a customHooks
import React, { useEffect } from "react";

const UseEffectHooks = ({ title }) => {
  useEffect(() => {
    if (title >= 1) {
      document.title = `Title is changing (${title})`;
    } else {
      document.title = "Title";
    }
  }, [title]);
};

export default UseEffectHooks;
