import React, { Fragment, useEffect, useState } from "react";
import "./Sidebar.scss";
import Commints from "../Commints/Commints";
import Banners from "../Banners/Banners";
import Brand from "../Brand/Brand";
import PrivateChat from "../PrivateChat/PrivateChat";
import { ManageSideBarSize } from "../../store/theme";
import { useDispatch, useSelector } from "react-redux";
import Viwers from "../Viwers/Viwers";

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
    setTap(status === "Moderator" ? "Commints" : "Viewer");
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
                    Check === "Commints" ? "active" : ""
                  }`}
                  onClick={(e) => setCheck("Commints")}
                >
                  <i className="fa-solid fa-message"></i>
                  <span>Comments</span>
                </div>

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
            {Check === "Commints" ? (
              <Commints />
            ) : Check === "Banners" ? (
              <Banners />
            ) : Check === "Brand" ? (
              <Brand />
            ) : Check === "Viewer" ? (
              <Viwers />
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
