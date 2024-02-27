import React, { Fragment, useState, useEffect } from "react";
import "./BoxVideo.scss";
import vi1 from "../../assits/videoBack.mp4";
import img1 from "../../assits/about-1.jpg";
import { useSelector } from "react-redux";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
import Marquee from "react-fast-marquee";

function BoxVideo() {
  const [height, setHeight] = useState("0"); // Default height
  const [width, setWidth] = useState("0"); // Default width
  const [sacle, setSacle] = useState(0); // Default width

  useEffect(() => {
    // const containerWidthPercentage = 44.76848958333333; //1536 screen width
    // const containerWidthPercentage = 48.42168815943728; //1706 screen width
    // const containerWidthPercentage = 52.03703125; //1920 screen width
    // const containerWidthPercentage = 54.01224289911851; //2042 screen width
    // const containerWidthPercentage = 56.88671875; //2304 screen width
    // const containerWidthPercentage = 62.93977864583333; //3072 screen width
    // const containerWidthPercentage = 69.00021701388889; //4608 screen width
    // const containerWidthPercentage = 72.025390625; //6144 screen width

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log("screenWidth", screenWidth);
      //get sacle

      const currentSacle = generateSacle(screenWidth);
      console.log("currentSacle=>", currentSacle);
      const calculatedScale = (screenWidth * currentSacle) / 100;
      console.log("calculatedScale=>", calculatedScale);
      setSacle(calculatedScale);

      const containerWidthPercentage = getContainerWidthPercentage(screenWidth);
      const calculatedWidth = (screenWidth * containerWidthPercentage) / 100;
      const calculatedHeight = (calculatedWidth / 16) * 9;
      setWidth(calculatedWidth);
      setHeight(calculatedHeight);
    };

    const getContainerWidthPercentage = (screenWidth) => {
      if (screenWidth <= 1536) {
        return 44.76848958333333;
      } else if (screenWidth <= 1705) {
        return 44.76848958333333;
      } else if (screenWidth <= 1919) {
        return 48.42168815943728;
      } else if (screenWidth <= 2042) {
        return 52.03703125;
      } else if (screenWidth <= 2301) {
        return 54.01224289911851;
      } else if (screenWidth <= 3071) {
        return 56.88671875;
      } else if (screenWidth <= 4607.0) {
        return 62.93977864583333;
      } else if (screenWidth <= 6143) {
        return 69.00021701388889;
      } else {
        return 72.025390625;
      }
    };

    let generateSacle = (screenWidth) => {
      if (screenWidth <= 1536) {
        return 0.034975390625;
      } else if (screenWidth <= 1705) {
        return 0.034975390625;
      } else if (screenWidth <= 1919) {
        return 0.0378294255568581;
      } else if (screenWidth <= 2042) {
        return 0.0406539583333333;
      } else if (screenWidth <= 2301) {
        return 0.042073583984375;
      } else if (screenWidth <= 3071) {
        return 0.0444427083333333;
      } else if (screenWidth <= 4607.0) {
        return 0.049171875;
      } else if (screenWidth <= 6143) {
        return 0.0539064670138889;
      } else {
        return 0.0562698567708333;
      }
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let { theme, title, color, ticker } = useSelector(
    (state) => state.themeslice
  );
  let [check, setCheck] = useState("one");
  // console.log("title==>", title);

  return (
    <div className="bibibig">
      {/**Box Of Video */}
      <div
        className="box-conatiner"
        style={{ height: `${height}px`, width: `${width}px` }}
      >
        <div className="box-conatiner1">
          <div className="box-conatiner2">
            {/**<video
              src={vi1}
              loop
              autoPlay
              playsInline
              preload="metadata"
            ></video> */}
            <img src={img1} alt="..." />
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
          {ticker && ticker?.ticker && (
            <div
              className="ticker-box"
              style={{ background: color, transform: `scale(${sacle})` }}
            >
              <Marquee direction="left">
                <span>{ticker?.title}</span>
              </Marquee>
            </div>
          )}
        </div>
      </div>
      <div className="box-btns">
        <div className="icnons-control">
          <div className="icnons-control2">
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
                  className={`wraper-icon ${check === "one" ? "active" : ""}`}
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
                  className={`wraper-icon ${check === "two" ? "active" : ""}`}
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
                  Spotlight layout. Press <text>SHIFT</text> + <text>4</text>
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
            <div className="box-icon">
              <BoxTooltipTitle
                placement="top"
                backgroundColor="rgb(27, 31, 41)"
                title={<span className="titleWithButtons">Edit layout</span>}
              >
                <div className="contai-edit">
                  <i className="fa-solid fa-pencil" />
                </div>
              </BoxTooltipTitle>
            </div>
            <BoxTooltipTitle
              placement="top"
              backgroundColor="rgb(27, 31, 41)"
              title={<span className="titleWithButtons">New layout</span>}
            >
              <div className="box-icon">
                <div className="contai-edit">
                  <div className="puls">+</div>
                </div>
              </div>
            </BoxTooltipTitle>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxVideo;
