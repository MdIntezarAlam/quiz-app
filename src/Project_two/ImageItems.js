import React from "react";

const ImageItems = ({ data }) => {
  
    return (
    <div className="image_container">
      {data.map((item) => (
        <div className="image_container_galary_one" key={item.id}>
          <img src={item.image} alt="" className="left_img" />{" "}
          <div className="left_content">
            <div className="left_content_name">{item.name}</div>
            <p className="left_content_lorem">{item.description}</p>
            <div className="bottom">
              <div className="bottom_one">
                <div>Price: {item.price}</div>
                <button className="btn__">order now</button>
              </div>
              <div className="desc_two">{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageItems;
