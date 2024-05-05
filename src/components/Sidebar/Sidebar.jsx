import React, { Fragment, useEffect, useState } from "react";
import "./Sidebar.scss";
import PrivateChat from "../ChatComponent/PrivateChat";
import { ManageSideBarSize } from "../../store/theme";
import { useDispatch, useSelector } from "react-redux";
import Viwers from "../ViewerTap/Viwers";
import Banners from "../BannersTap/Banners";
import Brand from "../BrandTap/Brand";
import UploadVideos from "../VideosTap/UploadVideos";
import Graphics from "../GraphicsTap/Graphics";
import Test from "../ViewerTap/Test";
import RequestsTap from "../RequestsTap/RequestsTap";
import QuestionTap from "../QuestionTap/QuestionTap";
import PollsTap from "../PollsTap/PollsTap";
import AllActionTap from "../AllActionTap/AllActionTap";
import SocialMediaTap from "../SocialMediaTap/SocialMediaTap";
import iconVideo from "../../assits/banner_icon_02.svg";
import VideoSvg from "../Svgs/VideoSvg";
import BannerSvg from "../Svgs/BannerSvg";
import PollSvg from "../Svgs/PollSvg";

function Sidebar() {
  let [close, setClose] = useState(false);
  let [Check, setTap] = useState("");

  let dispatch = useDispatch();
  let setCheck = (e) => {
    if (Check === e) {
      setClose(!close);
      dispatch(ManageSideBarSize(!close));
    } else {
      setClose(false);
      dispatch(ManageSideBarSize(false));
    }
    setTap(e);
  };

  let { status, statusTapViewer, stateSide } = useSelector(
    (state) => state.themeslice
  );

  // console.log("status=>", status);
  useEffect(() => {
    setTap(status === "Moderator" ? "Banners" : "Viewer");
    // setClose(status === "Viewer" && !close);
    if (status === "Viewer") {
      setClose(statusTapViewer.status);
      setTap(statusTapViewer.value);
    }
  }, [status, statusTapViewer]);

  useEffect(() => {
    if (stateSide) {
      setClose(true);
    }
  }, [stateSide]);
  return (
    <div
      className={`box-setting d-none d-sm-block ${
        close ? "close" : "open"
      } ${status}`}
      style={{ background: "#f0f4fa" }}
    >
      <div className="wrapper">
        {(status === "Moderator" || status === "Host") && (
          <div className="box-icon">
            <div className="icons-wrap">
              <Fragment>
                <div className="box-wrapper">
                  <Fragment>
                    <div
                      className={`container-icon ${
                        Check === "Banners" ? "active" : ""
                      }`}
                      onClick={(e) => setCheck("Banners")}
                    >
                      <BannerSvg
                        color={
                          Check === "Banners"
                            ? "rgba(20, 97, 225, 0.93)"
                            : "#575d68"
                        }
                      />
                    </div>

                    <div
                      className={`container-icon ${
                        Check === "Videos" ? "active" : ""
                      }`}
                      onClick={(e) => setCheck("Videos")}
                    >
                      <VideoSvg
                        color={Check === "Videos" ? "active" : "#575d68"}
                      />
                    </div>

                    <div
                      className={`container-icon ${
                        Check === "Graphics" ? "active" : ""
                      }`}
                      onClick={(e) => setCheck("Graphics")}
                    >
                      <i className="fa-solid fa-image" />
                    </div>

                    <div
                      className={`container-icon ${
                        Check === "Questions" ? "active" : ""
                      }`}
                      onClick={(e) => setCheck("Questions")}
                    >
                      <i className="fa-solid fa-question" />
                    </div>

                    <div
                      className={`container-icon ${
                        Check === "Polls" ? "active" : ""
                      }`}
                      onClick={(e) => setCheck("Polls")}
                    >
                      <PollSvg />
                    </div>

                    <hr
                      style={{
                        margin: "0",
                        background: "#333",
                        height: "2px",
                        border: "1px solid #333",
                        width: "100%",
                      }}
                    />

                    <div
                      className={`container-icon ${
                        Check === "AllAction" ? "active" : ""
                      }`}
                      onClick={(e) => setCheck("AllAction")}
                    >
                      <i className="fa-solid fa-border-all"></i>
                    </div>
                  </Fragment>
                </div>
                <div className="box-wrapper">
                  {(status === "Moderator" || status === "Host") && (
                    <Fragment>
                      <div
                        className={`container-icon ${
                          Check === "Viewer" ? "active" : ""
                        }`}
                        onClick={(e) => setCheck("Viewer")}
                      >
                        <i className="fa-solid fa-users" />
                      </div>

                      <div
                        className={`container-icon ${
                          Check === "Private" ? "active" : ""
                        }`}
                        onClick={(e) => setCheck("Private")}
                      >
                        <i className="fa-regular fa-comment-dots" />
                      </div>

                      <div
                        className={`container-icon ${
                          Check === "Requests" ? "active" : ""
                        }`}
                        onClick={(e) => setCheck("Requests")}
                      >
                        <i className="fa-solid fa-hand" />
                      </div>
                    </Fragment>
                  )}
                </div>
                <div className="box-wrapper">
                  <div
                    className={`container-icon ${
                      Check === "Brand" ? "active" : ""
                    }`}
                    onClick={(e) => setCheck("Brand")}
                  >
                    <i className="fa-solid fa-palette"></i>
                  </div>

                  <div
                    className={`container-icon ${
                      Check === "SocialMedia" ? "active" : ""
                    }`}
                    onClick={(e) => setCheck("SocialMedia")}
                  >
                    <i class="fa-solid fa-share-nodes"></i>
                  </div>
                  <div
                    className={`container-icon ${
                      Check === "Test" ? "active" : ""
                    }`}
                    onClick={(e) => setCheck("Test")}
                  >
                    <i className="fa-solid fa-pen-nib" />
                  </div>
                </div>
              </Fragment>
            </div>
          </div>
        )}

        <div className="box-result">
          <div className="wrapper-result">
            {Check === "Banners" ? (
              <Banners />
            ) : Check === "Brand" ? (
              <Brand />
            ) : Check === "Viewer" ? (
              <Viwers />
            ) : Check === "Videos" ? (
              <UploadVideos />
            ) : Check === "Graphics" ? (
              <Graphics />
            ) : Check === "Test" ? (
              <Test />
            ) : Check === "Questions" ? (
              <QuestionTap />
            ) : Check === "Polls" ? (
              <PollsTap />
            ) : Check === "AllAction" ? (
              <AllActionTap />
            ) : Check === "SocialMedia" ? (
              <SocialMediaTap />
            ) : Check === "Requests" ? (
              <RequestsTap />
            ) : (
              <PrivateChat />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
