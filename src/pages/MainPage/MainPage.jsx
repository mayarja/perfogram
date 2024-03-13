import React from "react";
import "./Mainpage.scss";
import Navbar from "../../components/Navbar/Navbar";
import BoxVideo from "../../components/BoxVideo/BoxVideo";
import Sidebar from "../../components/Sidebar/Sidebar";
import UnderStage from "../../components/UnderStage/UnderStage";
import SettingBar from "../../components/SettingBar/SettingBar";
import MobileBox from "../../components/MobileBox/MobileBox";
import { useSelector } from "react-redux";
import ViwerMobileCover from "../../components/ViwerMobileCover/ViwerMobileCover";

function MainPage() {
  let { status } = useSelector((state) => state.themeslice);
  return (
    <div className="Box-Project">
      {status !== "Viewer" && <Navbar />}
      <div className="main-box">
        <div className="box-show row">
          <div
            className={`col-sm-12 box-wraperrr ${
              status === "Viewer" && "viwer-box"
            }`}
          >
            <BoxVideo />
            {status !== "Viewer" && (
              <div className="understage d-none d-sm-flex">
                <UnderStage />
              </div>
            )}
            <SettingBar />
            {status !== "Viewer" && <MobileBox />}
          </div>
          <div className="d-block d-sm-none">
            {status === "Viewer" && <ViwerMobileCover />}
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default MainPage;
