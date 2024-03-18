import React, { Fragment, useState, useEffect, useRef } from "react";
import "./BoxVideo.scss";
import vi1 from "../../assits/videoBack.mp4";
// import img1 from "../../assits/about-1.jpg";
import img1 from "../../assits/img-mobile.jpg";
import { useSelector } from "react-redux";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
import Marquee from "react-fast-marquee";
import Layout from "../Layout/Layout";

function BoxVideo() {
  const [height, setHeight] = useState(0); // Default height
  const [width, setWidth] = useState(0); // Default width
  const [sacle, setSacle] = useState(0); // Default width
  const [heightFromStart, setHeightFromStart] = useState(window.innerHeight);
  const [widtFromStart, setWidtFromStart] = useState(window.innerWidth);
  const divRef = useRef(null);
  const childRef = useRef(null);
  const [prevHeight, setPrevHeight] = useState(0); // Store the previous height

  let { theme, title, color, ticker, sideBarStatus, status, cover } =
    useSelector((state) => state.themeslice);

  let generateSacle = (currentHight) => {
    let scale = (0.1395348051948052 * currentHight) / 100;
    return scale;
  };

  const handleResize = () => {
    if (divRef.current) {
      const newHeight = divRef.current.clientHeight; // Get the new height
      const newWidth = divRef.current.clientWidth; // Get the new height
      // console.log("sideBarStatus==>", sideBarStatus);
      const newHeightChild = childRef.current?.clientHeight; // Get the new height
      const newWidthChild = childRef.current?.clientWidth; // Get the new height
      const screenWidthLive = window.innerWidth;
      const screenHightLive = window.innerHeight;

      const condition1 = newWidthChild >= newWidth;
      const condition2 = screenWidthLive > widtFromStart;

      const condition3 = screenWidthLive > 575 && status !== "Viewer";
      const checkHeightChange =
        condition3 && Math.abs(heightFromStart - screenHightLive) > 10;

      if (screenWidthLive < 575 && status === "Viewer") {
        // console.log("tes");
      } else {
        if (condition1 || condition2 || checkHeightChange) {
          setHeight(screenWidthLive <= 1199 ? 100 : 112.5);
          setWidth(screenWidthLive <= 1199 ? 100 : 200);
        }
      }

      setTimeout(() => {
        const newHeight = divRef.current.clientHeight; // Adjust based on your needs
        // console.log("newHeightnewHeight", newHeight);
        let scaleValue = generateSacle(newHeight);
        setSacle(scaleValue);
        setHeight(newHeight);
        setWidth((newHeight * 16) / 9);
      }, 500); // Short delay to allow measurement
    }
  };

  const ResizeBySideBar = () => {
    if (divRef.current) {
      setHeight(100);
      setWidth(100);
      setTimeout(() => {
        const newHeight = divRef.current.clientHeight; // Adjust based on your needs
        let scaleValue = generateSacle(newHeight);
        setSacle(scaleValue);
        setHeight(newHeight);
        setWidth((newHeight * 16) / 9);
      }, 500); // Short delay to allow measurement
    }
  };

  useEffect(() => {
    // Call handleResize initially
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [status]);

  const screenWidth = window.innerWidth;
  useEffect(() => {
    // Call handleResize when sideBarStatus changes
    if (screenWidth <= 1199) {
      ResizeBySideBar();
    }
  }, [sideBarStatus]); // Only called when sideBarStatus changes

  useEffect(() => {
    // Call handleResize when sideBarStatus changes
    ResizeBySideBar();
  }, [status]); // Only called when sideBarStatus changes

  console.log("cover=1212/1*2*1/2*/>", cover);

  return (
    <Fragment>
      <div
        className="bibibig"
        ref={divRef}
        style={{
          flex: "25 auto",
          height:
            status === "Viewer"
              ? "100%"
              : screenWidth <= 576
              ? (screenWidth / 16) * 9
              : "TEST",
        }}
      >
        {/**Box Of Video   status === "Viewer"
                ? "100%"
                :*/}
        <div
          className="box-conatiner"
          ref={childRef}
          style={{
            height:
              screenWidth <= 576
                ? status === "Viewer"
                  ? "100%"
                  : `${
                      width > divRef.current?.clientWidth
                        ? (divRef.current?.clientWidth * 9) / 16
                        : height
                    }px`
                : `${
                    width > divRef.current?.clientWidth
                      ? (divRef.current?.clientWidth * 9) / 16
                      : height
                  }px`,
            width: `${
              width > divRef.current?.clientWidth
                ? divRef.current?.clientWidth
                : width
            }px`,
          }}
        >
          <div className="box-conatiner1">
            <div className="box-conatiner2">
              {cover.type === "Video" ? (
                <video
                  src={cover.src}
                  loop={cover.loop}
                  autoPlay
                  playsInline
                  preload="metadata"
                ></video>
              ) : (
                <img src={cover.src ? cover.src : img1} alt="..." />
              )}
            </div>
            {theme === "Bubble" && title.title ? (
              <div className="them-box">
                <div
                  className={`wraper-them-${theme}  ${ticker && "haveTikcer"}`}
                  style={{ transform: `scale(${sacle})` }}
                >
                  {title && !title.ticker && (
                    <div className={`${theme} `} style={{ background: color }}>
                      {title && !title.ticker && <text>{title.title}</text>}
                    </div>
                  )}
                </div>
              </div>
            ) : theme === "Classic" ? (
              <div className="them-box">
                <div
                  className={`wraper-them-${theme}  ${ticker && "haveTikcer"}`}
                  style={{ transform: `scale(${sacle})` }}
                >
                  <div className="layer" style={{ background: color }}></div>
                  {title && !title.ticker && (
                    <div className={`${theme} `}>
                      {title && !title.ticker && <text>{title.title}</text>}
                    </div>
                  )}
                </div>
              </div>
            ) : theme === "Minimal" ? (
              <div className="them-box">
                <div
                  className={`wraper-them-${theme} ${ticker && "haveTikcer"}`}
                  style={{ transform: `scale(${sacle})` }}
                >
                  {title && !title.ticker && (
                    <div className="box-Minimal-content">
                      <div className="layer"></div>
                      <div className={`${theme} `}>
                        {title && !title.ticker && <text>{title.title}</text>}
                      </div>
                    </div>
                  )}
                  <div
                    className="border-Minimal"
                    style={{ background: color }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="them-box">
                <div
                  className={`wraper-them-${theme} ${ticker && "haveTikcer"}`}
                  style={{ transform: `scale(${sacle})` }}
                >
                  {title && !title.ticker && (
                    <div className={`${theme} `} style={{ background: color }}>
                      {title && <text>{title.title}</text>}
                    </div>
                  )}
                </div>
              </div>
            )}
            {ticker && ticker.ticker && (
              <div
                className="ticker-box"
                style={{ background: color, transform: `scale(${sacle})` }}
              >
                <Marquee direction="left">
                  <span>{ticker.title}</span>
                </Marquee>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*Button actions foe edit on video box */}
      {status !== "Viewer" && (
        <div className="box-btns d-none d-sm-flex">
          <Layout />
        </div>
      )}
    </Fragment>
  );
}

export default BoxVideo;
