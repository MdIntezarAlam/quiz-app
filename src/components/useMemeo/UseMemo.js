import React, { useMemo, useState } from "react";
//TuseMemo Hook returns a memoized value.
// The useMemo and useCallback Hooks are similar. useMemo returns a memoized value
//  and useCallback returns a memoized function.
//usememo ko tab usekarte hai jab hamko kisi particular var ko run karna hai usko usememo ke andar likna hai aur dependency array mai pass akrna hai
//same as useEffect

const [Sub, setSub] = useState(0);
const UseMemo = () => {
  const [add, setAdd] = useState(0);

  const multy = useMemo(
    function multiply() {
      console.log("only add fun will workf");
      return add * 10;
    },
    [add]
  );

  return (
    <div>
      {multy}
      <br />
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <span>{add}</span>
      <br />

      <button onClick={() => setSub(Sub - 1)}>Sub</button>
      <span>{Sub}</span>
    </div>
  );
};

export default UseMemo;
