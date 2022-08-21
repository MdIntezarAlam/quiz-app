import React, { useEffect, useState } from "react";
import "../../App.css";

const Useeffect_API = () => {
  //this is second Example
  const [sec, setSec] = useState([]); //this is second Example
  const [user, setUser] = useState([]); //this is one Example
  const fetChingUser = async () => {
    //this is one Example
    const responce = await fetch("https://jsonplaceholder.typicode.com/users"); //this is one Example
    // console.log(responce); // responce should be like that Promise {<pending>}
    setUser(await responce.json()); //this is one Example
    // console.log(await responce.json()); //this is one Example
  };

  //this is second Example
  const secondExample = async () => {
    const secondresponce = await fetch(
      "https://jsonplaceholder.typicode.com/albums"
    );
    // console.log(secondresponce)
    setSec(await secondresponce.json());
    // console.log(await secondresponce.json());
  };

  useEffect(() => {
    fetChingUser(); //this is one Example
    secondExample(); //this is second Example
  }, []);

  return (
    <>
      <div className="useeffect_api">
        {user.map((item) => (
          <div className="users" key={item.id}>
            <div className="u1">{item.company.name}</div>
            <div className="u2">{item.name}</div>
            <div className="u3">{item.website}</div>
            <div className="u4">{item.email}</div>
          </div>
        ))}
      </div>
      <div className="sec">
        {sec.map((secItem) => (
          <>
            <div key={secItem.id} className="secc">
              {secItem.title}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Useeffect_API;
