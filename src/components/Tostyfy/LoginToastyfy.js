import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginToastyfy = () => {
  const loginBtn = () => {
    // toast.success("Login Successfully");
    // toast.info("Login Successfully");
    // toast.warning("please fill the form");
    toast.success("please fill the form");
  };

  return (
    <div>
      <h1>Login Toastify Components</h1>
      <hr />
      <button onClick={loginBtn}>Login</button>
      {/* <ToastContainer /> */}
      <ToastContainer />
    </div>
  );
};

export default LoginToastyfy;
