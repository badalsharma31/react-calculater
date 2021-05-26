import React from "react";
import "./Sidebar.css";
const SideBar = (props) => {
  return (
    <div className="sideContainer">
      <div className="sideHead">
        <div></div>
        <div className="close" onClick={() => props.setShow(false)}>
          X
        </div>
      </div>
      <div className="sideBody">
        <div className="item">Standard</div>
        <div className="item">Scientific</div>
      </div>
    </div>
  );
};

export default SideBar;
