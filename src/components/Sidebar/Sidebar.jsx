import React, { useState } from "react";
import "./Sidebar.scss";
import Commints from "../Commints/Commints";
import Banners from "../Banners/Banners";
import Brand from "../Brand/Brand";
import PrivateChat from "../PrivateChat/PrivateChat";
import { ManageSideBarSize } from "../../store/theme";
import { useDispatch } from "react-redux";

function Sidebar() {
  let [Check, setTap] = useState("Commints");
  let [close, setClose] = useState(false);
  let dispatch = useDispatch();
  let setCheck = (e) => {
    if (Check === e) {
      setClose(!close);
      dispatch(ManageSideBarSize(!close));
    } else {
      setClose(false);
      dispatch(ManageSideBarSize(false));
    }
    setTap(e);
  };
  return (
    <div className="box-setting" style={{ width: close ? "74px" : "460px" }}>
      <div className="wrapper">
        <div className="box-icon">
          <div className="icons-wrap">
            <div
              className={`container-icon ${
                Check === "Commints" ? "active" : ""
              }`}
              onClick={(e) => setCheck("Commints")}
            >
              <i className="fa-solid fa-message"></i>
              <span>Comments</span>
            </div>
            <div
              className={`container-icon ${
                Check === "Banners" ? "active" : ""
              }`}
              onClick={(e) => setCheck("Banners")}
            >
              <i className="fa-regular fa-window-maximize" />
              <span>Banners</span>
            </div>
            <div
              className={`container-icon ${Check === "Brand" ? "active" : ""}`}
              onClick={(e) => setCheck("Brand")}
            >
              <i className="fa-solid fa-palette"></i>
              <span>Brand</span>
            </div>
            <div
              className={`container-icon ${
                Check === "Private" ? "active" : ""
              }`}
              onClick={(e) => setCheck("Private")}
            >
              <i className="fa-regular fa-comment-dots" />
              <span>Private Chat</span>
            </div>
          </div>
        </div>

        <div className="box-result">
          <div className="wrapper-result">
            {Check === "Commints" ? (
              <Commints />
            ) : Check === "Banners" ? (
              <Banners />
            ) : Check === "Brand" ? (
              <Brand />
            ) : (
              <PrivateChat />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
