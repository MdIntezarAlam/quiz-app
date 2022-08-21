//step1=> define useReducer which is same as useState 1=> variable(state) and 2=> dispatch(setState)
//where state=> work as variable
//dispatch=> work as a setState button mai setState ke jagaha use kre
//step2=> define initial state at the top of the main fun or other compo
//step3=> define reducre as a function which takes two arguments at the top of the main function
import React, { useReducer } from "react";
import Two from "./Two";
const initialState = 0; //step2=>

//step3=> and it will return
const reducer = (state, action) => {
  //   console.log(state, action);
  if (action.type === "INCRE") {
    return state + 1;
  }
  if (action.type === "DECRE") {
    return state - 1;
  }
};

const One = () => {
  const [state, dispatch] = useReducer(reducer, initialState); //step1=>
  return (
    <div style={{ marginLeft: "40%" }}>
      <p>useReducer</p>
      <h2>State {state}</h2>
      <button onClick={() => dispatch({ type: "INCRE" })}>Incerement:</button>
      <button onClick={() => dispatch({ type: "DECRE" })}>Decerement:</button>
      <hr />
      <br />
      <Two />
    </div>
  );
};

export default One;
