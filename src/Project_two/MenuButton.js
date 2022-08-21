import React from "react";

const MenuButton = ({ filterData, Menu, setData }) => {
  return (
    <div className="btn_container">
      <button onClick={() => filterData("breakfast")} className="btn">
        breakfast
      </button>
      <button onClick={() => filterData("morning")} className="btn">
        morning
      </button>
      <button onClick={() => filterData("evening")} className="btn">
        evening
      </button>
      <button onClick={() => filterData("dinner")} className="btn">
        Dinner
      </button>
      <button onClick={() => setData(Menu)} className="btn">
        All
      </button>
    </div>
  );
};

export default MenuButton;
