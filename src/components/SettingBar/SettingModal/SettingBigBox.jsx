import React, { useState } from "react";
import General from "./General";
import CamerBox from "./CamerBox";
import AudioBox from "./AudioBox";
import { ManageSettingBox } from "../../../store/theme";
import { useDispatch } from "react-redux";

function SettingBigBox() {
  let dispatch = useDispatch();

  let [active, setactive] = useState("");
  let HandleACtive = (e) => {
    setactive(e);
  };
  return (
    <div className="SettingBigBox">
      <div className="header-setting">
        <div className="wrapper-header d-flex justify-content-start align-items-center gap-4">
          {active && (
            <i
              onClick={() => setactive("")}
              className="fa-solid fa-arrow-left"
              style={{
                fontSize: "18px",
                color: "rgb(20, 97, 225)",
                cursor: "pointer",
              }}
            />
          )}
          <h2>{active ? active : "Settings"}</h2>
        </div>
        <div
          className="box-icon"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(ManageSettingBox(false))}
        >
          <i className="fa-solid fa-xmark" />
        </div>
      </div>

      {active ? (
        <div className="content">
          <div className="content-wraper">
            <div className="content-wraper-tow">
              {active === "General" ? (
                <General />
              ) : active === "Camera" ? (
                <CamerBox />
              ) : active === "Audio" ? (
                <AudioBox />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="body-setting">
          <div className="sidebar">
            <div className="sidebar-two">
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
                {/**
  <li className="">
      //   <i className="fa-solid fa-xmark" />{" "}
      //   <span>Virtual background</span>
      // </li>
  */}
                <li
                  className={`${active === "Audio" && "active"}`}
                  onClick={(e) => HandleACtive("Audio")}
                >
                  <i className="fa-solid fa-microphone" /> <span>Audio</span>
                </li>
                {/*
       <li
        className={`${active === "Recording" && "active"}`}
        onClick={(e) => HandleACtive("Recording")}
      >
        <i className="fa-solid fa-record-vinyl" />
        <span>Recording</span>
      </li>
      <li
        className={`${active === "Hotkeys" && "active"}`}
        onClick={(e) => HandleACtive("Hotkeys")}
      >
        <i className="fa-solid fa-keyboard" /> <span>Hotkeys</span>
      </li>
  */}
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
          </div>
        </div>
      )}
    </div>
  );
}

export default SettingBigBox;
