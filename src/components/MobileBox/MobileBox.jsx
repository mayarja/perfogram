import React, { Fragment, useState } from "react";
import "./MobileBox.scss";
import Commints from "../Commints/Commints";
import Banners from "../Banners/Banners";
import Brand from "../Brand/Brand";
import PrivateChat from "../ChatComponent/PrivateChat";
import SettingBar from "../SettingBar/SettingBar";
import { useDispatch, useSelector } from "react-redux";
import {
  CamStatus,
  ManageSettingBox,
  MangeStart,
  MicStatus,
  StopCameraMic,
} from "../../store/theme";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import UnderStage from "../UnderStage/UnderStage";
import Viwers from "../Viwers/Viwers";
import UploadVideos from "../UploadVideos/UploadVideos";
import Graphics from "../Graphics/Graphics";

function MobileBox() {
  let [activeBox, setActiveBox] = useState("Banners");

  let { cam, mic, settingBox, showGest, status } = useSelector(
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

  let [check, setCheck] = useState("one");

  return (
    <div className="mobile-box d-block d-sm-none">
      <div className="list-actions">
        {status === "Moderator" && (
          <Fragment>
            <div
              onClick={(e) => {
                setActiveBox("Banners");
              }}
              className={`box-item ${activeBox === "Banners" && "active"}`}
            >
              <span>Banners</span>
            </div>
            <div
              onClick={(e) => {
                setActiveBox("Brand");
              }}
              className={`box-item ${activeBox === "Brand" && "active"}`}
            >
              <span>Brand</span>
            </div>

            <div
              onClick={(e) => {
                setActiveBox("Videos");
              }}
              className={`box-item ${activeBox === "Videos" && "active"}`}
            >
              <span>Videos</span>
            </div>

            <div
              onClick={(e) => {
                setActiveBox("Graphics");
              }}
              className={`box-item ${activeBox === "Graphics" && "active"}`}
            >
              <span>Graphics</span>
            </div>
          </Fragment>
        )}

        <div
          onClick={(e) => {
            setActiveBox("Chat");
          }}
          className={`box-item ${activeBox === "Chat" && "active"}`}
        >
          <span>Chat</span>
        </div>

        <div
          onClick={(e) => {
            setActiveBox("Viewer");
          }}
          className={`box-item ${activeBox === "Viewer" && "active"}`}
        >
          <span>Viewers</span>
        </div>

        {status === "Moderator" && (
          <div
            onClick={(e) => {
              setActiveBox("Guests");
            }}
            className={`box-item ${activeBox === "Guests" && "active"}`}
          >
            <span>Guests</span>
          </div>
        )}
      </div>
      <Fragment>
        <div className="box-result">
          <div className="wrapper-result">
            <div className="box-content">
              {activeBox === "Banners" ? (
                <Banners />
              ) : activeBox === "Brand" ? (
                <Brand />
              ) : activeBox === "Videos" ? (
                <UploadVideos />
              ) : activeBox === "Graphics" ? (
                <Graphics />
              ) : activeBox === "Chat" ? (
                <PrivateChat />
              ) : activeBox === "Viewer" ? (
                <Viwers />
              ) : activeBox === "Guests" ? (
                <div className="mobil-understage">
                  <div className="layout-mobile">
                    <div className="actionsss">
                      <BoxTooltipTitle
                        placement="top"
                        backgroundColor="rgb(27, 31, 41)"
                        title={
                          <span className="titleWithButtons">
                            Solo layout. Press <text>SHIFT</text> +{" "}
                            <text>1</text>{" "}
                          </span>
                        }
                      >
                        <div
                          className="box-icon"
                          onClick={(e) => {
                            setCheck("one");
                          }}
                        >
                          <div
                            className={`wraper-icon ${
                              check === "one" ? "active" : ""
                            }`}
                          >
                            <i className="fa-solid fa-user"></i>
                          </div>
                        </div>
                      </BoxTooltipTitle>

                      <BoxTooltipTitle
                        placement="top"
                        backgroundColor="rgb(27, 31, 41)"
                        title={
                          <span className="titleWithButtons">
                            Cropped layout. Press <text>SHIFT</text> +{" "}
                            <text>2</text>
                          </span>
                        }
                      >
                        <div
                          className="box-icon"
                          onClick={(e) => {
                            setCheck("two");
                          }}
                        >
                          <div
                            className={`wraper-icon ${
                              check === "two" ? "active" : ""
                            }`}
                          >
                            <div className="conta-icon">
                              <i className="fa-solid fa-user"></i>
                            </div>
                            <div className="hr"></div>
                            <div className="conta-icon">
                              <i className="fa-solid fa-user"></i>
                            </div>
                          </div>
                        </div>
                      </BoxTooltipTitle>

                      <BoxTooltipTitle
                        placement="top"
                        backgroundColor="rgb(27, 31, 41)"
                        title={
                          <span className="titleWithButtons">
                            Group layout. Press <text>SHIFT</text> +{" "}
                            <text>3</text>
                          </span>
                        }
                      >
                        <div
                          className="box-icon"
                          onClick={(e) => {
                            setCheck("three");
                          }}
                        >
                          <div
                            className={`wraper-icon gap-2 ${
                              check === "three" ? "active" : ""
                            }`}
                            style={{ padding: "1px" }}
                          >
                            <div className="conta-icon2">
                              <i
                                className="fa-solid fa-user"
                                style={{ fontSize: "12px" }}
                              ></i>
                            </div>
                            <div className="conta-icon2">
                              <i
                                className="fa-solid fa-user"
                                style={{ fontSize: "12px" }}
                              ></i>
                            </div>
                          </div>
                        </div>
                      </BoxTooltipTitle>

                      <BoxTooltipTitle
                        placement="top"
                        backgroundColor="rgb(27, 31, 41)"
                        title={
                          <span className="titleWithButtons">
                            Screen layout. Press <text>SHIFT</text> +{" "}
                            <text>6</text>
                          </span>
                        }
                      >
                        <div
                          className="box-icon"
                          onClick={(e) => {
                            setCheck("six");
                          }}
                        >
                          <div
                            className={`wraper-icon gap-2 ${
                              check === "six" ? "active" : ""
                            }`}
                          >
                            <div className="small-icon">
                              <i className="fa-solid fa-user"></i>
                            </div>
                            <i
                              className="fa-solid fa-square"
                              style={{ fontSize: "30px" }}
                            />
                          </div>
                        </div>
                      </BoxTooltipTitle>

                      <BoxTooltipTitle
                        placement="top"
                        backgroundColor="rgb(27, 31, 41)"
                        title={
                          <span className="titleWithButtons">
                            Picture-in-Picture layout. Press <text>SHIFT</text>{" "}
                            + <text>7</text>
                          </span>
                        }
                      >
                        <div
                          className="box-icon"
                          onClick={(e) => {
                            setCheck("seven");
                          }}
                        >
                          <div
                            className={`wraper-icon  gap-2 ${
                              check === "seven" ? "active" : ""
                            }`}
                          >
                            <i className="fa-solid fa-user inside"></i>
                            <i
                              className="fa-solid fa-square"
                              style={{ fontSize: "37px" }}
                            />
                          </div>
                        </div>
                      </BoxTooltipTitle>

                      <BoxTooltipTitle
                        placement="top"
                        backgroundColor="rgb(27, 31, 41)"
                        title={
                          <span className="titleWithButtons">
                            Cinema layout. Press <text>SHIFT</text> +{" "}
                            <text>8</text>
                          </span>
                        }
                      >
                        <div
                          className="box-icon"
                          onClick={(e) => {
                            setCheck("eaght");
                          }}
                        >
                          <div
                            className={`wraper-icon  gap-2 ${
                              check === "eaght" ? "active" : ""
                            }`}
                          >
                            <i
                              className="fa-solid fa-square"
                              style={{ fontSize: "37px" }}
                            />
                          </div>
                        </div>
                      </BoxTooltipTitle>
                    </div>
                  </div>
                  <div className="understage">
                    <UnderStage />
                  </div>
                </div>
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
           
            <div
              className="box-icon"
              onClick={() => {
                setActiveBox("");
              }}
            >
              <i className="fa-solid fa-users" />
              <span>Guests</span>
            </div> */}

            <div
              className="box-icon"
              onClick={() => dispatch(ManageSettingBox(true))}
            >
              <i className="fa-solid fa-gear" />
              <span>Settings</span>
            </div>

            <TooltipBoxAction
              title={
                <ul className="box-action-toltip list-unstyled">
                  {/***   <li
                    className=""
                    onClick={() => dispatch(ManageSettingBox(true))}
                  >
                    <i className="fa-solid fa-gear" /> <span>Settings</span>
                  </li>
                  <li
                    className=""
                    onClick={() => {
                      setActiveBox("Viewer");
                    }}
                  >
                    <i className="fa-solid fa-users" /> <span>Viewer</span>
                  </li> */}
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
                <label>1</label>
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
