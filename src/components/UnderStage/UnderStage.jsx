import React, { Fragment, useEffect, useState } from "react";
import "./UnderStage.scss";
import img1 from "../../assits/about-1.jpg";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import { Dialog } from "@mui/material";
import EditName from "./Modal/EditName";
import EditAvatar from "./Modal/EditAvatar";
import { useDispatch, useSelector } from "react-redux";
import { CamStatus, MicStatus, StopCameraMic } from "../../store/theme";
import KickFromStudion from "./Modal/KickFromStudion";
import BanFromStudion from "./Modal/BanFromStudion";

function UnderStage() {
  let data = [
    { name: "Test", img: img1, main: true },
    { name: "Test Two", img: "", main: false },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [manage, setManage] = useState("");
  let [stage, setStage] = useState("");

  let { cam, mic, stopMicCam } = useSelector((state) => state.themeslice);

  let ManageModal = (e) => {
    setManage(e);
    if (e) {
      handleOpen();
    }
  };

  //function for mange stop cam and mic from toolTip
  let MangeStopMicCam = (e) => {
    dispatch(StopCameraMic(true));
    dispatch(CamStatus(false));
    dispatch(MicStatus(false));
  };

  //function for add to stage or remove
  let handleStateLogic = (e) => {
    let index = stage.indexOf(e);
    if (index !== -1) {
      const updatedStage = [...stage];
      updatedStage.splice(index, 1);
      setStage(updatedStage);
    } else {
      setStage((prev) => [...prev, e]);
    }
  };

  let dispatch = useDispatch();

  let [statusMic, setStatusMic] = useState([]);

  //function for Toggle Mic for mute or unmute
  let ToggleMic = (e, main) => {
    let index = statusMic.indexOf(e);
    if (index !== -1) {
      const updatedMic = [...statusMic];
      updatedMic.splice(index, 1);
      setStatusMic(updatedMic);
    } else {
      setStatusMic((prev) => [...prev, e]);
    }
    console.log("main", main);
    if (main) {
      console.log("Hello World");
      dispatch(MicStatus(!mic));
    }
  };

  return (
    <div className="understage d-none d-sm-flex">
      <div className="wrpaer-understage">
        <div className="box-conatiner-2">
          {/*Box Fro user details and image */}
          {data &&
            data.map((e, index) => {
              return (
                <div className="box-user" key={index}>
                  <div className="box-img">
                    {e.img && <img src={e.img} alt="..." />}
                  </div>

                  <div
                    className={`title ${
                      stage && stage.some((e) => e === index) && "Remove"
                    }`}
                  >
                    <i className="fa-solid fa-user" />
                    <span>{e.name}</span>
                  </div>

                  {/*BigBox For Actions Like Edit name and avatar Before Ban*/}
                  {stopMicCam && e.main ? (
                    <div className="big-control">
                      <div></div>
                      <div className="control">
                        {/*Box For Actions Like Edit name and avatar */}
                        <TooltipBoxAction
                          status={open}
                          placement={"top"}
                          title={
                            <ul className="box-action-toltip list-unstyled">
                              <li
                                className=""
                                onClick={(e) => {
                                  ManageModal("Editname");
                                }}
                              >
                                <i className="fa-solid fa-pen" />
                                <span>Edit name </span>
                              </li>
                            </ul>
                          }
                        >
                          <i className="fa-solid fa-ellipsis-vertical" />
                        </TooltipBoxAction>
                      </div>
                    </div>
                  ) : (
                    <div className="big-control">
                      <div className="box-user-avatar">
                        <div className="avatar-icon">
                          <div className={`wrapper`}>
                            <svg
                              focusable="false"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              preserveAspectRatio="xMidYMid meet"
                              fill="#4F5461"
                              className="styled__Cam-sc-1adbbxc-4 gYFkOy"
                            >
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                              <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="control">
                        <BoxTooltipTitle
                          placement="top"
                          backgroundColor="rgb(27, 31, 41)"
                          title={
                            <span className="titleWithButtons">Mute mic</span>
                          }
                        >
                          {e.main ? (
                            mic ? (
                              <i
                                className="fa-solid fa-microphone"
                                onClick={(tt) => {
                                  ToggleMic(index, e.main);
                                }}
                              />
                            ) : (
                              <i
                                className="fa-solid fa-microphone-slash"
                                onClick={(tt) => {
                                  ToggleMic(index, e.main);
                                }}
                              />
                            )
                          ) : statusMic &&
                            statusMic.some((e) => e === index) ? (
                            <i
                              className="fa-solid fa-microphone-slash"
                              onClick={(tt) => {
                                ToggleMic(index, e.main);
                              }}
                            />
                          ) : (
                            <i
                              className="fa-solid fa-microphone"
                              onClick={(tt) => {
                                ToggleMic(index, e.main);
                              }}
                            />
                          )}
                        </BoxTooltipTitle>

                        {/*Box For Actions Like Edit name and avatar */}
                        <TooltipBoxAction
                          status={open}
                          placement={"top"}
                          title={
                            <ul className="box-action-toltip list-unstyled">
                              <li
                                className=""
                                onClick={(e) => {
                                  ManageModal("Editname");
                                }}
                              >
                                <i className="fa-solid fa-pen" />
                                <span>Edit name </span>
                              </li>

                              {e.main ? (
                                <Fragment>
                                  <li
                                    className=""
                                    onClick={(e) => {
                                      ManageModal("EditAvatar");
                                    }}
                                  >
                                    <i className="fa-solid fa-circle-user" />
                                    <span>Edit audio avatar</span>
                                  </li>

                                  <li
                                    className=""
                                    onClick={(e) => {
                                      MangeStopMicCam(e);
                                    }}
                                  >
                                    <i className="fa-solid fa-trash" />
                                    <span>Stop mic/cam</span>
                                  </li>
                                </Fragment>
                              ) : (
                                <Fragment>
                                  <li className="">
                                    <i className="fa-solid fa-gear" />
                                    <span>Edit mic settings</span>
                                  </li>

                                  <li
                                    className=""
                                    onClick={(e) => {
                                      ManageModal("Kick");
                                    }}
                                  >
                                    <i className="fa-solid fa-circle-xmark" />
                                    <span>Kick from studio</span>
                                  </li>

                                  <li
                                    className=""
                                    style={{ color: "rgb(191, 31, 2)" }}
                                    onClick={(e) => {
                                      ManageModal("Ban");
                                    }}
                                  >
                                    <i
                                      style={{ color: "rgb(191, 31, 2)" }}
                                      className="fa-solid fa-ban"
                                    />
                                    <span style={{ color: "rgb(191, 31, 2)" }}>
                                      Ban from studio
                                    </span>
                                  </li>
                                </Fragment>
                              )}
                            </ul>
                          }
                        >
                          <i className="fa-solid fa-ellipsis-vertical" />
                        </TooltipBoxAction>
                      </div>
                    </div>
                  )}

                  {/*Add To Stage Button */}
                  {stage && stage.some((e) => e === index) ? (
                    <div
                      className="AddBtn Remove"
                      onClick={(e) => handleStateLogic(index)}
                    >
                      <text>Remove</text>
                    </div>
                  ) : (
                    <div
                      className="AddBtn"
                      onClick={(e) => handleStateLogic(index)}
                    >
                      <text>Add to stage</text>
                    </div>
                  )}
                </div>
              );
            })}

          <Dialog maxWidth="xs" fullWidth open={open} onClose={handleClose}>
            <div className="modal-box">
              {manage === "Editname" ? (
                <EditName />
              ) : manage === "Kick" ? (
                <KickFromStudion />
              ) : manage === "Ban" ? (
                <BanFromStudion />
              ) : (
                <EditAvatar />
              )}
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default UnderStage;
