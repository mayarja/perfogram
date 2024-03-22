import React, { Fragment, useEffect, useState } from "react";
import "./Sidebar.scss";
import Banners from "../Banners/Banners";
import Brand from "../Brand/Brand";
import PrivateChat from "../ChatComponent/PrivateChat";
import { ManageSideBarSize } from "../../store/theme";
import { useDispatch, useSelector } from "react-redux";
import Viwers from "../Viwers/Viwers";
import UploadVideos from "../UploadVideos/UploadVideos";
import Graphics from "../Graphics/Graphics";

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

  let { status } = useSelector((state) => state.themeslice);

  // console.log("status=>", status);
  useEffect(() => {
    setTap(status === "Moderator" ? "Banners" : "Viewer");
  }, [status]);
  return (
    <div
      className={`box-setting d-none d-sm-block ${close ? "close" : "open"}`}
    >
      <div className="wrapper">
        <div className="box-icon">
          <div className="icons-wrap">
            {status === "Moderator" && (
              <Fragment>
                <div
                  className={`container-icon ${
                    Check === "Banners" ? "active" : ""
                  }`}
                  onClick={(e) => setCheck("Banners")}
                >
                  <i className="fa-regular fa-window-maximize" />
                  <span>Banners</span>
                </div>

                <div
                  className={`container-icon ${
                    Check === "Brand" ? "active" : ""
                  }`}
                  onClick={(e) => setCheck("Brand")}
                >
                  <i className="fa-solid fa-palette"></i>
                  <span>Brand</span>
                </div>

                <div
                  className={`container-icon ${
                    Check === "Videos" ? "active" : ""
                  }`}
                  onClick={(e) => setCheck("Videos")}
                >
                  <i className="fa-solid fa-file-video" />
                  <span>Videos</span>
                </div>

                <div
                  className={`container-icon ${
                    Check === "Graphics" ? "active" : ""
                  }`}
                  onClick={(e) => setCheck("Graphics")}
                >
                  <i className="fa-solid fa-image" />
                  <span>Graphics</span>
                </div>
              </Fragment>
            )}

            <div
              className={`container-icon ${
                Check === "Private" ? "active" : ""
              }`}
              onClick={(e) => setCheck("Private")}
            >
              <i className="fa-regular fa-comment-dots" />
              <span>Chat</span>
            </div>

            <div
              className={`container-icon ${Check === "Viewer" ? "active" : ""}`}
              onClick={(e) => setCheck("Viewer")}
            >
              <i className="fa-solid fa-users" />
              <span>Viewers</span>
            </div>
          </div>
        </div>

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
