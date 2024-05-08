import React, { Fragment, useEffect, useState } from "react";
import "./SettingBar.scss";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import { useDispatch, useSelector } from "react-redux";
import { ManageSettingBox, togggleStatusChatViwer } from "../../store/theme";
import { handleToggleCam, handleToggleMic } from "../../store/usersSlice.js";
import { Dialog } from "@mui/material";
import SettingModal from "./SettingModal/SettingModal";
import SettingBigBox from "./SettingModal/SettingBigBox";
import InvitePeople from "./SettingModal/InvitePeople";
import { handleToggleCamMY, handleToggleMicMY } from "../../store/mySlice.js";

function SettingBar() {
  let { settingBox, status, statusTapViewer } = useSelector(
    (state) => state.themeslice
  );

  let { myData } = useSelector((state) => state.persistData.myData);

  let { mic, stopMicCam, cam } = useSelector((state) => state.users);

  let dispatch = useDispatch();

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

  let openTapViwer = (e) => {
    let data = {
      ...statusTapViewer,
      value: e,
      status: e === statusTapViewer.value ? !statusTapViewer.status : false,
    };
    dispatch(togggleStatusChatViwer(data));
  };

  const HandleMicClick = (id, state) => {
    dispatch(handleToggleMicMY({ id, state }));
    dispatch(handleToggleMic({ id, state }));
  };

  const HandleCamClick = (id, state) => {
    dispatch(handleToggleCamMY({ id, state }));
    dispatch(handleToggleCam({ id, state }));
  };
  let [openInvite, setOpenInvite] = useState(false);
  return (
    <Fragment>
      <div
        className={`${
          status === "Viewer" && "flowBox"
        } SettingBar d-none d-sm-block m-1`}
      >
        <div className="wrapper-one">
          <div className="wrapper-two">
            <div className="conatiner-box">
              <div className="box-action">
                {/*Box For Mic */}
                {status !== "Viewer" && (
                  <Fragment>
                    {myData && myData.activeMic ? (
                      <BoxTooltipTitle
                        backgroundColor={"rgba(27, 31, 41)"}
                        title="Mute Microphone"
                        placement="top"
                      >
                        <div
                          className="box-icon"
                          onClick={(e) => {
                            // ToggleMic(false);
                            HandleMicClick(myData.id, false);
                          }}
                        >
                          <i className="fa-solid fa-microphone" />
                        </div>
                      </BoxTooltipTitle>
                    ) : (
                      <BoxTooltipTitle
                        backgroundColor={"rgba(27, 31, 41)"}
                        title="Unmute Microphone"
                        placement="top"
                      >
                        <div
                          className="box-icon active"
                          onClick={(e) => {
                            // ToggleMic(true);
                            HandleMicClick(myData.id, true);
                          }}
                        >
                          <i className="fa-solid fa-microphone-slash" />
                        </div>
                      </BoxTooltipTitle>
                    )}
                  </Fragment>
                )}

                {/*Box For cam */}

                {status !== "Viewer" && (
                  <Fragment>
                    {myData && myData.activeCam ? (
                      <BoxTooltipTitle
                        backgroundColor={"rgba(27, 31, 41)"}
                        title="Turn off Camera"
                        placement="top"
                      >
                        <div
                          className="box-icon"
                          onClick={(e) => {
                            // ToggleCam(false);
                            HandleCamClick(myData.id, false);
                          }}
                        >
                          <i className="fa-solid fa-video" />
                        </div>
                      </BoxTooltipTitle>
                    ) : (
                      <BoxTooltipTitle
                        backgroundColor={"rgba(27, 31, 41)"}
                        title="Turn on Camera"
                        placement="top"
                      >
                        <div
                          className="box-icon active"
                          onClick={(e) => {
                            // ToggleCam(true);
                            HandleCamClick(myData.id, true);
                          }}
                        >
                          <i className="fa-solid fa-video-slash" />
                        </div>
                      </BoxTooltipTitle>
                    )}
                  </Fragment>
                )}

                {/*start Box For Viewer Only  */}
                {status === "Viewer" && (
                  <div className="box-icon">
                    <i className="fa-solid fa-heart" />
                  </div>
                )}
                {status === "Viewer" && (
                  <Fragment>
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
                      </TooltipBoxAction>
                    </div>
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
                      </TooltipBoxAction>
                    </div>
                    <div
                      className="box-icon"
                      onClick={() => openTapViwer("Viewer")}
                    >
                      <i className="fa-solid fa-users" />
                    </div>
                    <div
                      className="box-icon"
                      onClick={() => openTapViwer("Private")}
                    >
                      <i className="fa-regular fa-comment-dots" />
                    </div>
                  </Fragment>
                )}
                {/*start Box For Viewer Only  */}

                {/*Box For Present */}
                {status !== "Viewer" && (
                  <Fragment>
                    <BoxTooltipTitle
                      backgroundColor={"rgba(27, 31, 41)"}
                      title="Share Screen"
                      placement="top"
                    >
                      <div className="box-icon">
                        <i className="fa-solid fa-desktop" />
                      </div>
                    </BoxTooltipTitle>

                    <BoxTooltipTitle
                      backgroundColor={"rgba(27, 31, 41)"}
                      title="Invite guests/viewers"
                      placement="top"
                    >
                      <div
                        className="box-icon"
                        onClick={() => setOpenInvite(true)}
                      >
                        <i class="fa-solid fa-share"></i>
                      </div>
                    </BoxTooltipTitle>
                  </Fragment>
                )}

                {status !== "Viewer" && (
                  <BoxTooltipTitle
                    backgroundColor={"rgba(27, 31, 41)"}
                    title="Settings"
                    placement="top"
                  >
                    <div
                      className="box-icon"
                      onClick={(e) => handleOpenSetting("open")}
                    >
                      <i className="fa-solid fa-gear"></i>
                    </div>
                  </BoxTooltipTitle>
                )}

                {/*Box For Invite */}
                {status !== "Viewer" && (
                  <Fragment>
                    <BoxTooltipTitle
                      backgroundColor={"rgba(27, 31, 41)"}
                      title="Leave the studio"
                      placement="top"
                    >
                      <div className="box-icon">
                        <i
                          class="fa-solid fa-right-from-bracket"
                          style={{ color: "#cb4545" }}
                        ></i>
                      </div>
                    </BoxTooltipTitle>
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
      <Dialog
        maxWidth="sm"
        fullWidth
        open={openInvite}
        onClose={() => setOpenInvite(false)}
      >
        <InvitePeople setOpenInvite={setOpenInvite} />
      </Dialog>
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
