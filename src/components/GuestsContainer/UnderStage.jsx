import React, { Fragment, useEffect, useState } from "react";
import "./UnderStage.scss";
import vi1 from "../../assits/presenter.jpg";
// import vi1 from "../../assits/videoBack.mp4";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import { Dialog } from "@mui/material";
import EditName from "./Modal/EditName";
import EditAvatar from "./Modal/EditAvatar";
import { useDispatch, useSelector } from "react-redux";
import { getLayout } from "../../store/theme";

import { handleToggleCamMic, handleToggleMic } from "../../store/usersSlice.js";
import KickFromStudion from "./Modal/KickFromStudion";
import BanFromStudion from "./Modal/BanFromStudion";
import { manageUsers } from "../../store/usersSlice";
import {
  handleToggleCamMicMY,
  handleToggleMicMY,
} from "../../store/mySlice.js";

function UnderStage() {
  let { Users, mic, stopMicCam, cam } = useSelector((state) => state.users);
  let { myData } = useSelector((state) => state.persistData.myData);

  console.log("myData", myData);

  // console.log("UsersUsers", Users);
  // let [data, setData] = useState(Users);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [manage, setManage] = useState("");
  let ManageModal = (e) => {
    setManage(e);
    if (e) {
      handleOpen();
    }
  };

  //function for mange stop cam and mic from toolTip
  let MangeStopMicCam = (id, state) => {
    dispatch(handleToggleCamMic({ id, state }));
    dispatch(handleToggleCamMicMY({ id, state }));
  };

  //function for add to stage or remove
  const handleStateLogic = (id, type, state) => {
    let updatedData;
    let potentialMainUser;

    let usersInStage = Users.filter((e) => e.inStage === true);
    if (type) {
      updatedData = Users.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            inStage: type,
            main: usersInStage.length === 0 ? true : false,
          }; // Toggle inStage
        }
        return item; // Return unchanged for other objects
      });
    } else {
      if (state) {
        updatedData = Users.map((item) => {
          if (item.id === id) {
            // Update clicked element: inStage and main to false
            return { ...item, inStage: type, main: false };
          } else if (item.inStage === true && item.id !== id) {
            // Store a potential main user (only for the first eligible user)
            if (!potentialMainUser) {
              potentialMainUser = item;
            }
            // Return unchanged for now
            return item;
          } else {
            // No change needed for other users
            return item;
          }
        });

        // Update main to true for the potential main user (if found)
        if (potentialMainUser) {
          updatedData = updatedData.map((item) =>
            item.id === potentialMainUser.id ? { ...item, main: true } : item
          );
        }
      } else {
        updatedData = Users.map((item) => {
          if (item.id === id) {
            return { ...item, inStage: false };
          } else {
            return item;
          }
        });
      }
    }
    potentialMainUser = false;
    dispatch(manageUsers(updatedData));
  };

  //function for set user main  or not
  const handleActiveLogic = (id, state) => {
    const updatedData = Users.map((item) => {
      return {
        ...item,
        main: item.id === id ? state : false,
        inStage: item.id === id ? state : item.inStage,
      }; // Toggle inStage
    });
    // setData(updatedData);
    dispatch(getLayout("Single"));
    dispatch(manageUsers(updatedData));
  };

  let dispatch = useDispatch();

  const HandleMicClick = (id, state) => {
    if (id === myData.id) {
      dispatch(handleToggleMicMY({ id, state }));
    }
    dispatch(handleToggleMic({ id, state }));
  };

  return (
    <div className="wrpaer-understage">
      <div className="box-conatiner-2">
        {/*Box Fro user details and image */}
        {Users &&
          Users.map((e, index) => {
            return (
              <div className="box-user" key={index}>
                {e.activeCam ? (
                  <div className="box-img">
                    <img src={e.src ? e.src : vi1} alt="..." />
                  </div>
                ) : (
                  <div className="box-avatar">
                    <div className="wraper-avatar">
                      <svg
                        focusable={false}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#4F5461"
                        className="styled__StyledAccountCircle-sc-a7234v-4 dBFZjM"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </div>
                  </div>
                )}

                <div className={`title ${e.inStage && "Remove"}`}>
                  {/* <i className="fa-solid fa-user" /> */}
                  <span>{e.name}</span>
                </div>

                {/*BigBox For Actions Like Edit name and avatar Before Ban*/}
                {/**
                   {stopMicCam && e.main ? (
                  <div className="big-control">
                    <div></div>
                    <div className="control">
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
                ) : (  )}
              */}
                <div className="big-control">
                  <div
                    className={`box-user-avatar ${e.main && "mainActive"}`}
                    onClick={() => handleActiveLogic(e.id, true)}
                  >
                    <div className="avatar-icon">
                      <div className={`wrapper`}>
                        <i class="fa-solid fa-thumbtack"></i>
                      </div>
                    </div>
                  </div>

                  <div className="control">
                    <BoxTooltipTitle
                      placement="top"
                      backgroundColor="rgb(27, 31, 41)"
                      title={<span className="titleWithButtons">Mute mic</span>}
                    >
                      {/* <i className="fa-solid fa-microphone-slash" /> */}
                      {e.activeMic ? (
                        <i
                          className="fa-solid fa-microphone"
                          onClick={() => HandleMicClick(e.id, false)}
                        />
                      ) : (
                        <i
                          className="fa-solid fa-microphone-slash"
                          onClick={() => HandleMicClick(e.id, true)}
                        />
                      )}
                      {/*
                        e.main ? (
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
                      ) : statusMic && statusMic.some((e) => e === index) ? (
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
                      )
                      */}
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

                          {myData && myData.id === e.id ? (
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
                                onClick={(z) => {
                                  MangeStopMicCam(e.id, false);
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
                                <span>Edit settings</span>
                              </li>

                              <li
                                className=""
                                onClick={(e) => {
                                  ManageModal("Kick");
                                }}
                              >
                                <i className="fa-solid fa-circle-xmark" />
                                <span>Remove from studio</span>
                              </li>

                              {/* <li
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
                                </li> */}
                            </Fragment>
                          )}
                        </ul>
                      }
                    >
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </TooltipBoxAction>
                  </div>
                </div>

                {/*Add To Stage Button */}
                {e.inStage ? (
                  <div
                    className="AddBtn Remove"
                    onClick={(z) => handleStateLogic(e.id, false, e.main)}
                  >
                    <text>Remove</text>
                  </div>
                ) : (
                  <div
                    className="AddBtn"
                    onClick={(z) => handleStateLogic(e.id, true, e.main)}
                  >
                    <text>Add to stage</text>
                  </div>
                )}
              </div>
            );
          })}

        <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClose}>
          <div className="modal-box">
            {manage === "Editname" ? (
              <EditName Close={handleClose} />
            ) : manage === "Kick" ? (
              <KickFromStudion Close={handleClose} />
            ) : manage === "Ban" ? (
              <BanFromStudion Close={handleClose} />
            ) : (
              <EditAvatar Close={handleClose} />
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default UnderStage;
