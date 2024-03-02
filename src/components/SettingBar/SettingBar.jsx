import React from "react";
import "./SettingBar.scss";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
import { useDispatch, useSelector } from "react-redux";
import { CamStatus, MicStatus, StopCameraMic } from "../../store/theme";

function SettingBar() {
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
    <div className="SettingBar d-none d-sm-block">
      <div className="wrapper-one">
        <div className="wrapper-two">
          <div className="conatiner-box">
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
              <div className="box-icon">
                <i className="fa-solid fa-gear"></i>
                <span>Settings</span>
              </div>
              <div className="box-icon">
                <i className="fa-solid fa-desktop" />
                <span>Present</span>
              </div>
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
            </div>
            <div className="box-question">
              <span className="question">Having issues</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingBar;
