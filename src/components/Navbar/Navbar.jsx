import React from "react";
import "./Navbar.scss";
import img1 from "../../assits/logo.svg";
function Navbar() {
  return (
    <div className="mian-nav">
      <div className="header-inner">
        <div className="img-name">
          <div className="img-box">
            <img src={img1} alt="..." />
          </div>
          <span>Test</span>
        </div>
        <div className="redcord">
          <div className="title">
            <span>Record only</span>
            <text className="edit">Edit</text>
          </div>
          <button className="btn btn-primary">
            <text>Record</text>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
