import React from "react";
import { useState } from "react";


// first Components
const Add_delete = () => {
  //   const dummy_data = [
  //     {
  //       id: 0,
  //       name: "Alam",
  //       branch: "CSE",
  //     },
  //     {
  //       id: 1,
  //       name: "Bhai",
  //       branch: "CSE",
  //     },
  //     {
  //       id: 3,
  //       name: " M Bhai",
  //       branch: "CSE",
  //     },
  //   ];
  //   //useState
  //   const [user, setUser] = useState(dummy_data);
  //   //delete using filter method
  //   const removeUser = (id) => {
  //     //new var then store then use
  //     const removeUser = user.filter((item) => {
  //       return item.id !== id;
  //     });
  //     setUser(removeUser);
  //   };

  //   return (
  //     <div className="forms">
  //       <h3 className="forms_">
  //         {user.map((item, id) => (
  //           <div>
  //             <h3>
  //               Name: {item.name}, Branch: {item.branch}
  //             </h3>
  //             <button
  //               type=""
  //               className="btn1"
  //               onClick={() => removeUser(item.id)}
  //             >
  //               Delete
  //             </button>
  //           </div>
  //         ))}
  //       </h3>
  //     </div>
  //   );
  // };

  //Second Compmonents which is simply add

  ///=========>>>>>>>>>>>definign new  functions
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [addnewUser, setNewUser] = useState([]);
  //form submit
  const formSubmit = (e) => {
    e.preventDefault();
    setName("");
    setAge("");
  };

  const addNewUser = () => {
    setNewUser((prevUser) => {
      return [...prevUser, { name, age, id: Math.random().toLocaleString() }];
    });
  };
  //delete user
  const deleteUser = (id) => {
    const deleteVar = addnewUser.filter((item) => {
      return item.id !== id;
    });
    setNewUser(deleteVar);
  };

  return (
    <div className="forms">
      <form className="forms_" onSubmit={formSubmit}>
        <h1 className="h1">Add Delete Project</h1>
        <div className="inputs">
          <input
            type=""
            placeholder="Enter userame"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type=""
            placeholder="Enter userame"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div>
          {addnewUser.map((item) => (
            <div>
              <p key={item.id}>
                name: {item.name} , age: {item.age}
              </p>
              <button
                type=""
                onClick={() => deleteUser(item.id)}
                className="btn1"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="btn">
          <button type="" onClick={addNewUser} className="btn1">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add_delete;
