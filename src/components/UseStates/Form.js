import React, { useState } from "react";
import { Button } from "./Button";

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [addnewUser, setAddNewUser] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    //add new User in the form make an anonimius function and add prev then copy then display
    setAddNewUser((prevuser) => {
      return [...prevuser, { name, age, id: Math.random().toString() }];
    });
    setName("");
    setAge("");
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  return (
    <form
      onSubmit={formSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        width: "70%",
        textAlign: "center",
        color: "white",
        fontSize: "19px",
        borderRadius: "20px",
        margin: "30px auto",
      }}
    >
      <input
        onChange={handleChangeName}
        type="text"
        placeholder="Enter Name"
        value={name}
        style={{
          padding: "8px",
          margin: "5px",
          outline: "none",
          borderRadius: "5px",
          borderStyle: "none",
          fontSize: "18px",
        }}
      />
      <input
        onChange={handleChangeAge}
        type="number"
        placeholder="Enter age"
        value={age}
        style={{
          padding: "8px",
          margin: "5px",
          outline: "none",
          borderRadius: "5px",
          borderStyle: "none",
          fontSize: "18px",
        }}
      />
      <Button type="submit">Add User</Button>

      {/* Display the new User in the Form  */}
      {addnewUser.map((item) => (
        <h1
          style={{
            textAlign: "center",
            padding: "10px",
            color: "white",
            backgroundColor: "black",
            fontSize: "19px",
            borderRadius: "20px",
            width: "70%",
            margin: "10px auto",
          }}
          key={item.id}
        >
          Name: {item.name} age: {item.age}
        </h1>
      ))}
    </form>
  );
};

export default Form;
