import React, { useCallback, useState } from "react";
import ChildUseCallback from "./ChildUseCallback";

const UseCallback = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  //   const dontusewithoutCalllbackFun = () => { //this is incorrect way
  //some operation
  //   }; //if we pass the fun from parent to child as props it will re-render

  // so we useCallback which doesnot render agai and again
  const usewithCallbackFun = useCallback(() => {
    //this is incorrect way
    //some operation
  }, [count]);

  return (
    <div>
      {/* <ChildUseCallback dontusewithoutCalllbackFun={dontusewithoutCalllbackFun} /> */}
      <ChildUseCallback usewithCallbackFun={usewithCallbackFun} count={count}/>
      <div>{add}</div>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      {count}
      <button onClick={() => setCount(count + 10)}>Count</button>
    </div>
  );
};

export default UseCallback;
