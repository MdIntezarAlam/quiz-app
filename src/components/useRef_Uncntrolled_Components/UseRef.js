import React, { useRef, useState } from "react";
//Uncontrolled Components: Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model).
//In a controlled component, form data is handled by a React component. The
import "../../App.css";
const UseRef = () => {
  const [show, setShow] = useState(false);
  const username = useRef(null); //.using useRef //it does not  rerender

  const formSubmit = (e) => {
    e.preventDefault();
    // console.log(username.current.value)
    const name = username.current.value;

    if (name === "") {
      alert("please Enter username");
    } else {
      setShow(username.current.value);
    }
  };

  return (
    <div className="form" onSubmit={formSubmit}>
      <form>
        <h1 className="hed">Uncontrolled </h1>
        <label htmlFor="username">Enter User name</label>
        <input type="text" ref={username} id="username" autoComplete="off"/>
        <br />
        <button type="submit">Submit</button>
        <div className="disp">
          {show ? `Your Name is ${username.current.value}` : ""}
        </div>
      </form>
    </div>
  );
};

export default UseRef;
