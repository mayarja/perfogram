import React, { Fragment, useEffect, useState } from "react";
import "./SettingBar.scss";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
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
  let { cam, mic, settingBox } = useSelector((state) => state.themeslice);
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
                <div
                  className="box-icon"
                  onClick={(e) => handleOpenSetting("open")}
                >
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
