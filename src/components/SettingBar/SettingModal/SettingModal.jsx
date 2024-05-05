import React, { useState } from "react";
import "./SettingModal.scss";
import CamerBox from "./CamerBox";
import General from "./General";
import AudioBox from "./AudioBox";
import { useDispatch } from "react-redux";
import { ManageSettingBox } from "../../../store/theme";

function SettingModal({ setOpenBox }) {
  let [active, setactive] = useState("Camera");
  let HandleACtive = (e) => {
    setactive(e);
  };
  let dispatch = useDispatch();
  return (
    <div className="modal-setting">
      <div className="header-setting">
        <div className="wrapper-header">
          <h2>Settings</h2>
        </div>
        <div
          className="box-icon"
          onClick={() => {
            dispatch(ManageSettingBox(false));
            setOpenBox && setOpenBox(false);
          }}
        >
          <i className="fa-solid fa-xmark" />
        </div>
      </div>
      <div className="body-setting">
        <div className="sidebar">
          <ul className="list-unstyled">
            {/* <li
              className={`${active === "General" && "active"}`}
              onClick={(e) => HandleACtive("General")}
            >
              <i className="fa-solid fa-gear" /> <span>General</span>
            </li> */}
            <li
              className={`${active === "Camera" && "active"}`}
              onClick={(e) => HandleACtive("Camera")}
            >
              <i className="fa-solid fa-video" /> <span>Camera</span>
            </li>{" "}
            <li
              className={`${active === "Audio" && "active"}`}
              onClick={(e) => HandleACtive("Audio")}
            >
              <i className="fa-solid fa-microphone" /> <span>Audio</span>
            </li>
            {/* <li
              className={`${active === "Layouts" && "active"}`}
              onClick={(e) => HandleACtive("Layouts")}
            >
              <i className="fa-regular fa-id-card" /> <span>Layouts</span>
            </li>
            <li
              className={`${active === "Guests" && "active"}`}
              onClick={(e) => HandleACtive("Guests")}
            >
              <i className="fa-solid fa-user" /> <span>Guests</span>
            </li> */}
          </ul>
        </div>
        <div className="content">
          <div className="content-wraper">
            <div className="content-wraper-tow">
              {active === "Camera" ? (
                <CamerBox />
              ) : active === "General" ? (
                <General />
              ) : active === "Audio" ? (
                <AudioBox />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingModal;
