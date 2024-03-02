import React, { Fragment, useState } from "react";
import "./MobileBox.scss";
import Commints from "../Commints/Commints";
import Banners from "../Banners/Banners";
import Brand from "../Brand/Brand";
import PrivateChat from "../PrivateChat/PrivateChat";
import SettingBar from "../SettingBar/SettingBar";
import { useDispatch, useSelector } from "react-redux";
import { CamStatus, MicStatus, StopCameraMic } from "../../store/theme";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";

function MobileBox() {
  let [activeBox, setActiveBox] = useState("Comments");

  let { cam, mic } = useSelector((state) => state.themeslice);
  let dispatch = useDispatch();

  let ToggleMic = (e) => {
    dispatch(MicStatus(e));
    if (e) {
      dispatch(StopCameraMic(false));
    }
  };
  let ToggleCam = (e) => {
    dispatch(CamStatus(e));
    if (e) {
      dispatch(StopCameraMic(false));
    }
  };

  return (
    <div className="mobile-box d-block d-sm-none">
      <div className="list-actions">
        <div
          onClick={(e) => setActiveBox("Comments")}
          className={`box-item ${activeBox === "Comments" && "active"}`}
        >
          <span>Comments</span>
        </div>
        <div
          onClick={(e) => setActiveBox("Banners")}
          className={`box-item ${activeBox === "Banners" && "active"}`}
        >
          <span>Banners</span>
        </div>
        <div
          onClick={(e) => setActiveBox("Brands")}
          className={`box-item ${activeBox === "Brands" && "active"}`}
        >
          <span>Brands</span>
        </div>
        <div
          onClick={(e) => setActiveBox("PrivateChat")}
          className={`box-item ${activeBox === "PrivateChat" && "active"}`}
        >
          <span>PrivateChat</span>
        </div>
      </div>
      <Fragment>
        <div className="box-result">
          <div className="wrapper-result">
            <div className="box-content">
              {activeBox === "Comments" ? (
                <Commints />
              ) : activeBox === "Banners" ? (
                <Banners />
              ) : activeBox === "Brands" ? (
                <Brand />
              ) : (
                <PrivateChat />
              )}
            </div>
          </div>
        </div>
        <div className="action-settings">
          <div className="box-action">
            {/*Box For Mic */}
            {mic ? (
              <div
                className="box-icon"
                onClick={(e) => {
                  ToggleMic(false);
                }}
              >
                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      Press <text>CRTL</text> + <text>D</text>
                    </span>
                  }
                >
                  <i className="fa-solid fa-microphone" />
                </BoxTooltipTitle>
                <span>Mute</span>
              </div>
            ) : (
              <div
                className="box-icon active"
                onClick={(e) => {
                  ToggleMic(true);
                }}
              >
                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      Press <text>CRTL</text> + <text>D</text>
                    </span>
                  }
                >
                  <i className="fa-solid fa-microphone-slash" />
                </BoxTooltipTitle>
                <span>Unmute</span>
              </div>
            )}

            {/*Box For cam */}

            {cam ? (
              <div
                className="box-icon"
                onClick={(e) => {
                  ToggleCam(false);
                }}
              >
                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      Press <text>CRTL</text> + <text>E</text>
                    </span>
                  }
                >
                  <i className="fa-solid fa-video" />
                </BoxTooltipTitle>
                <span>Stop Cam</span>
              </div>
            ) : (
              <div
                className="box-icon active"
                onClick={(e) => {
                  ToggleCam(true);
                }}
              >
                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      Press <text>CRTL</text> + <text>E</text>
                    </span>
                  }
                >
                  <i className="fa-solid fa-video-slash" />
                </BoxTooltipTitle>
                <span>Start Cam</span>
              </div>
            )}
            {/**
                    <div className="box-icon">
              <i className="fa-solid fa-gear"></i>
              <span>Settings</span>
            </div>
         */}
            {/*
                  <div className="box-icon">
              <i className="fa-solid fa-desktop" />
              <span>Present</span>
            </div>
            */}
            <div className="box-icon">
              <i className="fa-solid fa-users" />
              <span>Guests</span>
            </div>

            <div className="box-icon">
              <i className="fa-solid fa-ellipsis" />
              <span>More</span>
            </div>
            {/*
             <div className="box-icon">
              <i className="fa-solid fa-user-plus" />
              <span>Invite</span>
            </div>
        */}
            {/*
            <div className="box-icon">
              <i
                className="fa-solid fa-circle-xmark"
                style={{ color: "red" }}
              />
              <span style={{ fontSize: "1.07rem", marginTop: "5px" }}>
                Leave Studio
              </span>
            </div>
    */}
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default MobileBox;
