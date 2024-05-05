import React, { useEffect, useState } from "react";
import "./Mainpage.scss";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SettingBar from "../../components/SettingBar/SettingBar";
import { useSelector } from "react-redux";
import UnderStage from "../../components/GuestsContainer/UnderStage";
import MobileBox from "../../components/MobileScreen/MobileBox";
import ViwerMobileCover from "../../components/ViewerMobileScreen/ViwerMobileCover";
import BoxVideo from "../../components/DisplayBox/BoxVideo";
import Layout from "../../components/Layout/Layout";

function MainPage() {
  let { status } = useSelector((state) => state.themeslice);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateHeight = () => {
      setInnerHeight(window.innerHeight);
      setInnerWidth(window.innerWidth);
    };

    updateHeight(); // Call initially on component mount

    window.addEventListener("resize", updateHeight); // Listen for resize

    return () => {
      window.removeEventListener("resize", updateHeight); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      className="Box-Project"
      style={{
        height: innerHeight - 1,
        maxWidth: innerWidth - 1,
        // width: innerWidth - 1,
      }}
    >
      {status !== "Viewer" && <Navbar />}
      <div className="main-box">
        {status !== "Viewer" && (
          <div className="box-new-layout d-none d-sm-flex open ">
            <div className="box-btns">
              <Layout />
            </div>
          </div>
        )}
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
            {status !== "Viewer" && <MobileBox />}
          </div>
        </div>

        <Sidebar />
      </div>
      <SettingBar />
    </div>
  );
}

export default MainPage;
