import React, { memo } from "react";

// const ChildUseCallback = ({dontusewithoutCalllbackFun}) => { //this is incorrect way
const ChildUseCallback = ({usewithCallbackFun,count}) => { //this is correct way
  console.log("CHILD COMPONENTS");
  return <></>;
};

export default memo(ChildUseCallback);
