import React, { Fragment, useEffect, useState } from "react";
import "./SettingBar.scss";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import { useDispatch, useSelector } from "react-redux";
import {
  CamStatus,
  ManageSettingBox,
  MicStatus,
  StopCameraMic,
} from "../../store/theme";
import { Dialog } from "@mui/material";
import SettingModal from "./SettingModal/SettingModal";
import SettingBigBox from "./SettingModal/SettingBigBox";

function SettingBar() {
  let { cam, mic, settingBox, status } = useSelector(
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

  let handleOpenSetting = (e) => {
    if (e === "open") {
      dispatch(ManageSettingBox(true));
    } else {
      dispatch(ManageSettingBox(false));
    }
  };

  const [shouldShowModal, setShouldShowModal] = useState(
    window.innerWidth > 770
  );

  useEffect(() => {
    const handleResize = () => {
      setShouldShowModal(window.innerWidth > 770);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Fragment>
      <div className="SettingBar d-none d-sm-block m-1">
        <div className="wrapper-one">
          <div className="wrapper-two">
            <div className="conatiner-box">
              <div className="box-action">
                {/*Box For Mic */}
                {status !== "Viewer" && (
                  <Fragment>
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
                  </Fragment>
                )}

                {/*Box For cam */}

                {status !== "Viewer" && (
                  <Fragment>
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
                  </Fragment>
                )}

                {/*start Box For Viewer Only  */}
                {status === "Viewer" && (
                  <div className="box-icon">
                    <i className="fa-solid fa-heart" />
                    <span>Love</span>
                  </div>
                )}
                {status === "Viewer" && (
                  <div className="box-icon">
                    <TooltipBoxAction
                      classNeed={"HandelTool"}
                      title={
                        <ul className="box-action-toltip list-unstyled">
                          <li>
                            <i
                              className="fa-solid fa-microphone"
                              style={{ fontSize: "15px" }}
                            />
                            <span>Request mic</span>
                          </li>
                          <li>
                            <i
                              className="fa-solid fa-video"
                              style={{ fontSize: "15px" }}
                            />
                            <span>Request cam</span>
                          </li>
                        </ul>
                      }
                    >
                      <i className="fa-solid fa-hand" />
                      <span>Raise Hand</span>
                    </TooltipBoxAction>
                  </div>
                )}
                {/*start Box For Viewer Only  */}

                {/*Box For setting */}
                {status !== "Viewer" && (
                  <div
                    className="box-icon"
                    onClick={(e) => handleOpenSetting("open")}
                  >
                    <i className="fa-solid fa-gear"></i>
                    <span>Settings</span>
                  </div>
                )}

                {status === "Viewer" && (
                  <div className="box-icon">
                    <TooltipBoxAction
                      classNeed={"HandelTool"}
                      title={
                        <ul className="box-action-toltip list-unstyled">
                          <li>
                            <i
                              className="fa-regular fa-user"
                              style={{ fontSize: "15px" }}
                            />
                            <span>User login</span>
                          </li>
                          <li>
                            <i
                              className="fa-solid fa-video-slash"
                              style={{ fontSize: "15px" }}
                            />
                            <span>Enable audio only</span>
                          </li>
                          <li>
                            <i
                              className="fa-solid fa-share"
                              style={{ fontSize: "15px" }}
                            />
                            <span>Share room</span>
                          </li>
                        </ul>
                      }
                    >
                      <i className="fa-solid fa-gear"></i>
                      <span>Settings</span>
                    </TooltipBoxAction>
                  </div>
                )}

                {/*Box For Present */}
                {status !== "Viewer" && (
                  <div className="box-icon">
                    <i className="fa-solid fa-desktop" />
                    <span>Present</span>
                  </div>
                )}

                {/*Box For Invite */}
                {status !== "Viewer" && (
                  <Fragment>
                    <div className="box-icon">
                      <i className="fa-solid fa-user-plus" />
                      <span>Invite</span>
                    </div>

                    <div className="box-icon">
                      <i
                        className="fa-solid fa-circle-xmark"
                        style={{ color: "red" }}
                      />
                      <span>Leave Studio</span>
                    </div>
                  </Fragment>
                )}
              </div>
              {/*
                      <div className="box-question">
                <span className="question">Having issues</span>
              </div>
            */}
            </div>
          </div>
        </div>
      </div>
      {shouldShowModal ? (
        <Dialog
          maxWidth="md"
          fullWidth
          fullScreen={false}
          open={settingBox}
          style={{ maxWidth: "700px", margin: "auto" }}
          onClose={(e) => {
            handleOpenSetting("close");
          }}
        >
          <div className="modal-box">{<SettingModal />}</div>
        </Dialog>
      ) : (
        settingBox && <SettingBigBox />
      )}
    </Fragment>
  );
}

export default SettingBar;
