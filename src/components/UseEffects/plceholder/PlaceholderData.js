import React from "react";
import "../../../App.css";
import int from "../../../img/int.jpg";
const PlaceholderData = ({ users }) => {

  return (
    <div className="place_api">
      <div className="place_container">
        {users.map((user) => (
          <div className="plcae-one" key={user.id}>
            <div className="imfdiv">
              {/* <img src={int} alt="" className="img" /> */}
              <img src={int} alt="" className="img" />
            </div>
            <div className="content-container">
              <span className="name">{user.name}</span>
              <span className="user1">{user.username}</span>
              <div className="section">
                <span className="secions">{user.address.street}</span>
                <span className="secions">{user.address.city}</span>
                <span className="secions">{user.address.zipcode}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceholderData;
