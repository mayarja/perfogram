import React from "react";
import "./Mainpage.scss";
import Navbar from "../../components/Navbar/Navbar";
import BoxVideo from "../../components/BoxVideo/BoxVideo";
import Sidebar from "../../components/Sidebar/Sidebar";
import UnderStage from "../../components/UnderStage/UnderStage";
import SettingBar from "../../components/SettingBar/SettingBar";
import MobileBox from "../../components/MobileBox/MobileBox";

function MainPage() {
  return (
    <div className="Box-Project">
      <Navbar />
      <div className="main-box">
        <div className="box-show row">
          <div className="col-sm-12 box-wraperrr">
            <BoxVideo />
            <UnderStage />
            <SettingBar />
            <MobileBox />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default MainPage;
