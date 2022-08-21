import React, { useEffect, useState } from "react";
import int from "../../img/int.jpg";
import { GrFormAdd } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./todo.css";
//how to set data in localsotage
//1=>use useEffect hooks  d
//2> dependency array mai updated var use kre ie. newItem
//3=> localsorage.setItems('lists',json.stringfy(list)) use kr

//how to get the data from localStorage
//4> create another var at the top of the fun and return with array
//5= use these var in updated state as a fun

const getLocalStorageData = () => {
  const list = localStorage.getItem("lists");
  // console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const Todo = () => {
  const [change, setChange] = useState("");
  const [newItem, setNewItem] = useState(getLocalStorageData());

  //add user
  const addItems = () => {
    if (!change) {
      toast.warn("please enter your plan");
    } else {
      setNewItem((prevItem) => {
        return [...prevItem, { change, id: Math.random().toLocaleString() }];
      });
    }
    setChange("");
  };
  //delete user
  const deleteItems = (id) => {
    const removeUser = newItem.filter((item) => {
      return item.id !== id;
    });
    toast.success("your plan is deleted");
    setNewItem(removeUser);
  };
  //deleteAll user
  const deleteAll = () => {
    setNewItem([]);
  };

  // how to set  data in localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(newItem));
  }, [newItem]);

  return (
    <>
      <div className="main_div">
        <div className="childs-div">
          <figure>
            <img src={int} alt="" width={"100px"} height="100px" />
            <figcaption>Add your plan here</figcaption>
          </figure>
          <div className="add-items">
            <input
              value={change}
              placeholder="Add your plan here..."
              onChange={(e) => {
                setChange(e.target.value);
              }}
            />
            <GrFormAdd className="add_icon_div" onClick={addItems} />
          </div>

          {/* Display Items */}
          {newItem.map((item, id) => (
            <div className="show-items" key={id}>
              <div className="eachs-items">
                <span>{item.change}</span>
                <MdDelete
                  className="delete_ico"
                  onClick={() => deleteItems(item.id)}
                />
              </div>
            </div>
          ))}
          <div className="btn_div">
            <button className="btns_Btn" onClick={deleteAll}>
              Clear All
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Todo;
