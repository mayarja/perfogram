import React, { Fragment, useState } from "react";
import "./MobileBox.scss";
import PrivateChat from "../ChatComponent/PrivateChat";
import SettingBar from "../SettingBar/SettingBar";
import { useDispatch, useSelector } from "react-redux";
import { ManageSettingBox, MangeStart } from "../../store/theme";
import {
  CamStatus,
  MicStatus,
  StopCameraMic,
  handleToggleCam,
  handleToggleMic,
} from "../../store/usersSlice.js";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import Banners from "../BannersTap/Banners";
import Brand from "../BrandTap/Brand";
import UploadVideos from "../VideosTap/UploadVideos";
import Graphics from "../GraphicsTap/Graphics";
import Viwers from "../ViewerTap/Viwers";
import UnderStage from "../GuestsContainer/UnderStage";
import Layout from "../Layout/Layout";
import RequestsTap from "../RequestsTap/RequestsTap";
import Test from "../ViewerTap/Test";
import QuestionTap from "../QuestionTap/QuestionTap";
import PollsTap from "../PollsTap/PollsTap";
import AllActionTap from "../AllActionTap/AllActionTap";
import SocialMediaTap from "../SocialMediaTap/SocialMediaTap";
import { handleToggleCamMY, handleToggleMicMY } from "../../store/mySlice.js";

function MobileBox() {
  let [activeBox, setActiveBox] = useState("Guests");

  let { settingBox, status } = useSelector((state) => state.themeslice);
  let { myData } = useSelector((state) => state.persistData.myData);

  let { mic, stopMicCam, cam } = useSelector(
    (state) => state.persistData.users
  );

  let dispatch = useDispatch();

  const HandleMicClick = (id, state) => {
    dispatch(handleToggleMicMY({ id, state }));
    dispatch(handleToggleMic({ id, state }));
  };

  const HandleCamClick = (id, state) => {
    dispatch(handleToggleCamMY({ id, state }));
    dispatch(handleToggleCam({ id, state }));
  };

  return (
    <div className="mobile-box d-block d-sm-none">
      <div className="list-actions">
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
              setActiveBox("Requests");
            }}
            className={`box-item ${activeBox === "Requests" && "active"}`}
          >
            <span>Requests</span>
          </div>
        )}

        {status === "Moderator" && (
          <div
            onClick={(e) => {
              setActiveBox("Questions");
            }}
            className={`box-item ${activeBox === "Questions" && "active"}`}
          >
            <span>Questions</span>
          </div>
        )}

        {status === "Moderator" && (
          <div
            onClick={(e) => {
              setActiveBox("Polls");
            }}
            className={`box-item ${activeBox === "Polls" && "active"}`}
          >
            <span>Polls</span>
          </div>
        )}
        {status === "Moderator" && (
          <div
            onClick={(e) => {
              setActiveBox("AllAction");
            }}
            className={`box-item ${activeBox === "AllAction" && "active"}`}
          >
            <span>All Assets</span>
          </div>
        )}

        <div
          onClick={(e) => {
            setActiveBox("Test");
          }}
          className={`box-item ${activeBox === "Test" && "active"}`}
        >
          <span>Test</span>
        </div>
        <div
          onClick={(e) => {
            setActiveBox("SocialMedia");
          }}
          className={`box-item ${activeBox === "Social" && "active"}`}
        >
          <span>Social</span>
        </div>
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
              ) : activeBox === "Requests" ? (
                <RequestsTap />
              ) : activeBox === "Questions" ? (
                <QuestionTap />
              ) : activeBox === "Polls" ? (
                <PollsTap />
              ) : activeBox === "AllAction" ? (
                <AllActionTap />
              ) : activeBox === "SocialMedia" ? (
                <SocialMediaTap />
              ) : activeBox === "Test" ? (
                <Test />
              ) : activeBox === "Guests" ? (
                <div className="mobil-understage">
                  <div className="box-btns ">
                    <Layout />
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
            {myData && myData.activeMic ? (
              <div
                className="box-icon"
                onClick={(e) => {
                  HandleMicClick(myData.id, false);
                }}
              >
                <BoxTooltipTitle
                  backgroundColor={"rgba(27, 31, 41)"}
                  title="Mute Microphone"
                  placement="top"
                >
                  <i className="fa-solid fa-microphone" />
                </BoxTooltipTitle>
                <span>Mute</span>
              </div>
            ) : (
              <div
                className="box-icon active"
                onClick={(e) => {
                  HandleMicClick(myData.id, true);
                }}
              >
                <BoxTooltipTitle
                  backgroundColor={"rgba(27, 31, 41)"}
                  title="Unmute Microphone"
                  placement="top"
                >
                  <i className="fa-solid fa-microphone-slash" />
                </BoxTooltipTitle>
                <span>Unmute</span>
              </div>
            )}

            {/*Box For cam */}

            {myData && myData.activeCam ? (
              <div
                className="box-icon"
                onClick={(e) => {
                  HandleCamClick(myData.id, false);
                }}
              >
                <BoxTooltipTitle
                  backgroundColor={"rgba(27, 31, 41)"}
                  title="Turn off Camera"
                  placement="top"
                >
                  <i className="fa-solid fa-video" />
                </BoxTooltipTitle>
                <span>Stop Cam</span>
              </div>
            ) : (
              <div
                className="box-icon active"
                onClick={(e) => {
                  HandleCamClick(myData.id, true);
                }}
              >
                <BoxTooltipTitle
                  backgroundColor={"rgba(27, 31, 41)"}
                  title="Turn on Camera"
                  placement="top"
                >
                  <i className="fa-solid fa-video-slash" />
                </BoxTooltipTitle>
                <span>Start Cam</span>
              </div>
            )}

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
