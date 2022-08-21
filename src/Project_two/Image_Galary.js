import React, { useState } from "react";
import "./glarry.css";
import ImageItems from "./ImageItems";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

const Image_Galary = () => {
  const [data, setData] = useState(Menu);
  const filterData = (category) => {
    const updatedData = Menu.filter((item) => {
      return item.category === category;
    });
    setData(updatedData);
  };

  return (
    <div className="container">
      <div className="main">
        <h1 className="main_heding">Order Your Favourite Dish</h1>
        <div className="main_container">
          {/* MenuButtonComponetns */}
          <MenuButton filterData={filterData} Menu={Menu} setData={setData} />
          {/* ImageItems components */}
          <ImageItems data={data} />
        </div>
      </div>
    </div>
  );
};

export default Image_Galary;
