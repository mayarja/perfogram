import React, { Fragment, useState, useEffect, useRef } from "react";
import "./BoxVideo.scss";
import vi1 from "../../assits/videoBack.mp4";
import img1 from "../../assits/about-1.jpg";
import { useSelector } from "react-redux";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
import Marquee from "react-fast-marquee";

function BoxVideo() {
  const [height, setHeight] = useState(0); // Default height
  const [width, setWidth] = useState(0); // Default width
  const [sacle, setSacle] = useState(0); // Default width
  const [heightFromStart, setHeightFromStart] = useState(window.innerHeight);
  const divRef = useRef(null);
  const childRef = useRef(null);
  const [prevHeight, setPrevHeight] = useState(0); // Store the previous height

  let { theme, title, color, ticker, sideBarStatus } = useSelector(
    (state) => state.themeslice
  );

  console.log("heightFromStart outsid", heightFromStart);

  const handleResize = () => {
    if (divRef.current) {
      const newHeight = divRef.current.clientHeight; // Get the new height
      const newWidth = divRef.current.clientWidth; // Get the new height

      const newHeightChild = childRef.current?.clientHeight; // Get the new height
      const newWidthChild = childRef.current?.clientWidth; // Get the new height
      const screenWidthLive = window.innerWidth;
      const screenHightLive = window.innerHeight;
      console.log("heightFromStart inininin", heightFromStart);
      console.log("screenWidth > 1500", screenWidth);
      if (
        newWidthChild >= newWidth ||
        screenWidthLive > 1532 ||
        heightFromStart !== screenHightLive
      ) {
        setHeight(screenWidthLive <= 1199 ? 100 : 112.5);
        setWidth(screenWidthLive <= 1199 ? 100 : 200);
      }
      setTimeout(() => {
        const newHeight = divRef.current.clientHeight; // Adjust based on your needs
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
  }, []);

  const screenWidth = window.innerWidth;
  useEffect(() => {
    // Call handleResize when sideBarStatus changes
    if (screenWidth <= 1199) {
      ResizeBySideBar();
    }
  }, [sideBarStatus]); // Only called when sideBarStatus changes

  let [check, setCheck] = useState("one");

  return (
    <Fragment>
      <div className="bibibig" ref={divRef} style={{ flex: "25 auto" }}>
        {/**Box Of Video */}
        <div
          className="box-conatiner"
          ref={childRef}
          style={{
            height: `${
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
              {/**<video
              src={vi1}
              loop
              autoPlay
              playsInline
              preload="metadata"
            ></video> 
              <img src={img1} alt="..." />*/}
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
      <div className="box-btns">
        <div className="icnons-control">
          <div className="icnons-control2">
            <div className="icnons-control3">
              <div className="actionsss">
                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      Solo layout. Press <text>SHIFT</text> + <text>1</text>{" "}
                    </span>
                  }
                >
                  <div
                    className="box-icon"
                    onClick={(e) => {
                      setCheck("one");
                    }}
                  >
                    <div
                      className={`wraper-icon ${
                        check === "one" ? "active" : ""
                      }`}
                    >
                      <i className="fa-solid fa-user"></i>
                    </div>
                  </div>
                </BoxTooltipTitle>

                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      Cropped layout. Press <text>SHIFT</text> + <text>2</text>
                    </span>
                  }
                >
                  <div
                    className="box-icon"
                    onClick={(e) => {
                      setCheck("two");
                    }}
                  >
                    <div
                      className={`wraper-icon ${
                        check === "two" ? "active" : ""
                      }`}
                    >
                      <div className="conta-icon">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <div className="hr"></div>
                      <div className="conta-icon">
                        <i className="fa-solid fa-user"></i>
                      </div>
                    </div>
                  </div>
                </BoxTooltipTitle>

                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      Group layout. Press <text>SHIFT</text> + <text>3</text>
                    </span>
                  }
                >
                  <div
                    className="box-icon"
                    onClick={(e) => {
                      setCheck("three");
                    }}
                  >
                    <div
                      className={`wraper-icon gap-2 ${
                        check === "three" ? "active" : ""
                      }`}
                      style={{ padding: "1px" }}
                    >
                      <div className="conta-icon2">
                        <i
                          className="fa-solid fa-user"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </div>
                      <div className="conta-icon2">
                        <i
                          className="fa-solid fa-user"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </BoxTooltipTitle>

                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      Spotlight layout. Press <text>SHIFT</text> +{" "}
                      <text>4</text>
                    </span>
                  }
                >
                  <div
                    className="box-icon"
                    onClick={(e) => {
                      setCheck("four");
                    }}
                  >
                    <div
                      className={`wraper-icon  gap-2  ${
                        check === "four" ? "active" : ""
                      }`}
                    >
                      <div className="larg-icon">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <div className="small-icon">
                        <i className="fa-solid fa-user"></i>
                        <i className="fa-solid fa-user"></i>
                      </div>
                    </div>
                  </div>
                </BoxTooltipTitle>

                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      News layout. Press <text>SHIFT</text> + <text>5</text>
                    </span>
                  }
                >
                  <div
                    className="box-icon"
                    onClick={(e) => {
                      setCheck("fife");
                    }}
                  >
                    <div
                      className={`wraper-icon  gap-2 ${
                        check === "fife" ? "active" : ""
                      }`}
                    >
                      <i className="fa-solid fa-user"></i>
                      <i
                        className="fa-solid fa-square"
                        style={{ fontSize: "17px" }}
                      />
                    </div>
                  </div>
                </BoxTooltipTitle>

                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      Screen layout. Press <text>SHIFT</text> + <text>6</text>
                    </span>
                  }
                >
                  <div
                    className="box-icon"
                    onClick={(e) => {
                      setCheck("six");
                    }}
                  >
                    <div
                      className={`wraper-icon gap-2 ${
                        check === "six" ? "active" : ""
                      }`}
                    >
                      <div className="small-icon">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <i
                        className="fa-solid fa-square"
                        style={{ fontSize: "30px" }}
                      />
                    </div>
                  </div>
                </BoxTooltipTitle>

                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      Picture-in-Picture layout. Press <text>SHIFT</text> +{" "}
                      <text>7</text>
                    </span>
                  }
                >
                  <div
                    className="box-icon"
                    onClick={(e) => {
                      setCheck("seven");
                    }}
                  >
                    <div
                      className={`wraper-icon  gap-2 ${
                        check === "seven" ? "active" : ""
                      }`}
                    >
                      <i className="fa-solid fa-user inside"></i>
                      <i
                        className="fa-solid fa-square"
                        style={{ fontSize: "37px" }}
                      />
                    </div>
                  </div>
                </BoxTooltipTitle>

                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={
                    <span className="titleWithButtons">
                      Cinema layout. Press <text>SHIFT</text> + <text>8</text>
                    </span>
                  }
                >
                  <div
                    className="box-icon"
                    onClick={(e) => {
                      setCheck("eaght");
                    }}
                  >
                    <div
                      className={`wraper-icon  gap-2 ${
                        check === "eaght" ? "active" : ""
                      }`}
                    >
                      <i
                        className="fa-solid fa-square"
                        style={{ fontSize: "37px" }}
                      />
                    </div>
                  </div>
                </BoxTooltipTitle>
              </div>

              <div className="icnons-edit">
                <div className="waprer-edit-1">
                  <div className="waprer-edit-2">
                    <BoxTooltipTitle
                      placement="top"
                      backgroundColor="rgb(27, 31, 41)"
                      title={
                        <span className="titleWithButtons">Edit layout</span>
                      }
                    >
                      <div className="contai-edit">
                        <i className="fa-solid fa-pencil" />
                      </div>
                    </BoxTooltipTitle>

                    <BoxTooltipTitle
                      placement="top"
                      backgroundColor="rgb(27, 31, 41)"
                      title={
                        <span className="titleWithButtons">New layout</span>
                      }
                    >
                      <div className="contai-edit">
                        <div className="puls">+</div>
                      </div>
                    </BoxTooltipTitle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BoxVideo;
