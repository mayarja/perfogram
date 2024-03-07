import React, { Fragment, useState } from "react";
import "./MobileBox.scss";
import Commints from "../Commints/Commints";
import Banners from "../Banners/Banners";
import Brand from "../Brand/Brand";
import PrivateChat from "../PrivateChat/PrivateChat";
import SettingBar from "../SettingBar/SettingBar";
import { useDispatch, useSelector } from "react-redux";
import {
  CamStatus,
  ManageSettingBox,
  ManageShowGest,
  MangeStart,
  MicStatus,
  StopCameraMic,
} from "../../store/theme";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import GestSmallBox from "./GestSmallBox";
import UnderStage from "../UnderStage/UnderStage";

function MobileBox() {
  let [activeBox, setActiveBox] = useState("Comments");

  let { cam, mic, settingBox, showGest } = useSelector(
    (state) => state.themeslice
  );
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
          onClick={(e) => {
            setActiveBox("Comments");
            dispatch(ManageShowGest(false));
          }}
          className={`box-item ${activeBox === "Comments" && "active"}`}
        >
          <span>Comments</span>
        </div>
        <div
          onClick={(e) => {
            dispatch(ManageShowGest(false));
            setActiveBox("Banners");
          }}
          className={`box-item ${activeBox === "Banners" && "active"}`}
        >
          <span>Banners</span>
        </div>
        <div
          onClick={(e) => {
            dispatch(ManageShowGest(false));
            setActiveBox("Brands");
          }}
          className={`box-item ${activeBox === "Brands" && "active"}`}
        >
          <span>Brands</span>
        </div>
        <div
          onClick={(e) => {
            dispatch(ManageShowGest(false));
            setActiveBox("PrivateChat");
          }}
          className={`box-item ${activeBox === "PrivateChat" && "active"}`}
        >
          <span>PrivateChat</span>
        </div>
      </div>
      <Fragment>
        <div className="box-result">
          <div className="wrapper-result">
            <div className="box-content">
              {showGest ? (
                <div className="mobil-understage">
                  <UnderStage />
                </div>
              ) : activeBox === "Comments" ? (
                <Commints />
              ) : activeBox === "Banners" ? (
                <Banners />
              ) : activeBox === "Brands" ? (
                <Brand />
              ) : activeBox === "PrivateChat" ? (
                <PrivateChat />
              ) : (
                ""
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
            <div
              className="box-icon"
              onClick={() => {
                setActiveBox("");
                dispatch(ManageShowGest(true));
              }}
            >
              <i className="fa-solid fa-users" />
              <span>Guests</span>
            </div>

            <TooltipBoxAction
              title={
                <ul className="box-action-toltip list-unstyled">
                  <li
                    className=""
                    onClick={() => dispatch(ManageSettingBox(true))}
                  >
                    <i className="fa-solid fa-gear" /> <span>General</span>
                  </li>
                  <li className="" onClick={() => dispatch(MangeStart(true))}>
                    <i
                      className="fa-solid fa-circle-xmark"
                      style={{ color: "red" }}
                    />
                    <span>Leave Studio</span>
                  </li>
                </ul>
              }
              status={settingBox}
            >
              <div className="box-icon">
                <i className="fa-solid fa-ellipsis" />
                <span>More</span>
                <label>2</label>
              </div>
            </TooltipBoxAction>
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
