import React, { useMemo, useState } from "react";

const UseMemo_two = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);

  const multiplaction = useMemo(
    function multiply() {
      return add + 100;
    },
    [add] //only add fun will call
  );

  return (
    <div>
      {multiplaction}
      <span>{add}</span>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <span>{sub}</span>  
      <button onClick={() => setSub(sub - 1)}>sub</button>
    </div>
  );
};

export default UseMemo_two;
