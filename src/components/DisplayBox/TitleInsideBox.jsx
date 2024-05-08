import React, { Fragment } from "react";
import Marquee from "react-fast-marquee";

function TitleInsideBox({
  title,
  theme,
  ticker,
  color,
  fontColor,
  sacle,
  screenMode,
  userName,
  status,
  widthBox,
}) {
  // transform: scale(0.28349);
  // width: 1245px;
  const screenWidth = window.innerWidth;
  const handleUrlPath = (e) => {
    if (e) {
      window.open(e, "_blank"); // Open in new tab
    } else {
      return "";
    }
  };
  return (
    <div className="b6e5mbsmr">
      {theme === "Bubble" && title ? (
        <div className="them-box">
          <div
            className={`wraper-them-${theme}  ${ticker && "haveTikcer"}`}
            onClick={(e) => {
              handleUrlPath(title?.interactive && title?.url ? title?.url : "");
            }}
            style={{
              transform: `scale(${sacle})`,
              width: screenMode === "portrait" ? "1248px" : "1248px",
              bottom:
                screenMode === "portrait"
                  ? ticker
                    ? "6%"
                    : "7%"
                  : status !== "Viewer" && screenWidth < 575
                  ? ticker
                    ? "16%"
                    : "6%"
                  : ticker
                  ? "10%"
                  : "7%",
              // screenMode === "portrait" ||
              // (status !== "Viewer" && screenWidth < 575)
              //   ? screenMode === "portrait" && status !== "Viewer"
              //     ? "6%"
              //     : "16%"
              //   : "10%",
            }}
          >
            {title && !title.ticker && (
              <div className={`${theme} `} style={{ background: color }}>
                {title && !title.ticker && (
                  <text
                    style={{
                      fontSize: userName
                        ? screenMode === "portrait"
                          ? "46px"
                          : "22px"
                        : screenMode === "portrait" || screenWidth < 575
                        ? "56.5px"
                        : "31.2px",
                      color: fontColor,
                    }}
                  >
                    {title.title}
                  </text>
                )}
              </div>
            )}
          </div>
        </div>
      ) : theme === "Classic" ? (
        <div className="them-box">
          <div
            className={`wraper-them-${theme}  ${ticker && "haveTikcer"}`}
            onClick={(e) => {
              handleUrlPath(title?.interactive && title?.url ? title?.url : "");
            }}
            style={{
              transform: `scale(${sacle})`,
              minWidth: userName
                ? screenMode === "portrait"
                  ? "350px"
                  : "200px"
                : "200px",
              width:
                screenMode === "portrait"
                  ? userName
                    ? "200px"
                    : "1060px"
                  : userName
                  ? "200px"
                  : "1164.8px",

              bottom:
                screenMode === "portrait"
                  ? ticker
                    ? "6%"
                    : "7%"
                  : status !== "Viewer" && screenWidth < 575
                  ? ticker
                    ? "16%"
                    : "6%"
                  : ticker
                  ? "10%"
                  : "7%",
            }}
          >
            <div className="layer" style={{ background: color }}></div>
            <div className="layer2" style={{ background: color }}></div>
            {title && !title.ticker && (
              <div
                className={`${theme} `}
                style={{
                  minHeight: userName ? "50px" : "106px",
                  padding: userName ? "14px" : "6px 60px 6px 50px",
                  width:
                    screenMode === "portrait"
                      ? userName
                        ? "120%"
                        : "100%"
                      : "100%",
                }}
              >
                {title && !title.ticker && (
                  <text
                    style={{
                      fontSize: userName
                        ? screenMode === "portrait"
                          ? "46px"
                          : "22px"
                        : screenMode === "portrait" || screenWidth < 575
                        ? "57px"
                        : "31.2px",
                      color: fontColor,
                    }}
                  >
                    {title.title}
                  </text>
                )}
              </div>
            )}
          </div>
        </div>
      ) : theme === "Minimal" ? (
        <div className="them-box">
          <div
            className={`wraper-them-${theme} ${ticker && "haveTikcer"}`}
            onClick={(e) => {
              handleUrlPath(title?.interactive && title?.url ? title?.url : "");
            }}
            style={{
              transform: `scale(${sacle})`,
              width: screenMode === "portrait" ? "1248px" : "1248px",
              bottom:
                screenMode === "portrait"
                  ? ticker
                    ? "6%"
                    : "7%"
                  : status !== "Viewer" && screenWidth < 575
                  ? ticker
                    ? "16%"
                    : "6%"
                  : ticker
                  ? "10%"
                  : "7%",
            }}
          >
            {title && !title.ticker && (
              <div className="box-Minimal-content">
                <div className="layer"></div>
                <div className={`${theme} `}>
                  {title && !title.ticker && (
                    <text
                      style={{
                        fontSize: userName
                          ? screenMode === "portrait"
                            ? "46px"
                            : "22px"
                          : screenMode === "portrait" || screenWidth < 575
                          ? "57px"
                          : "31.2px",
                        color: fontColor,
                      }}
                    >
                      {title.title}
                    </text>
                  )}
                </div>
              </div>
            )}
            <div className="border-Minimal" style={{ background: color }}></div>
          </div>
        </div>
      ) : theme === "Central" ? (
        <div className="them-box">
          <div
            className={`wraper-them-${theme}  ${ticker && "haveTikcer"}`}
            onClick={(e) => {
              handleUrlPath(title?.interactive && title?.url ? title?.url : "");
            }}
            style={{
              transform: `scale(${sacle})`,
              transformOrigin: userName
                ? screenMode === "portrait"
                  ? "bottom"
                  : "center"
                : "left bottom",
              left: userName ? "0" : "0%",
              bottom:
                screenMode === "portrait"
                  ? ticker
                    ? "6%"
                    : "7%"
                  : status !== "Viewer" && screenWidth < 575
                  ? ticker
                    ? "16%"
                    : "6%"
                  : ticker
                  ? "10%"
                  : "7%",
              width:
                screenMode === "portrait"
                  ? userName
                    ? "100%"
                    : widthBox / sacle
                  : userName
                  ? "100%"
                  : widthBox / sacle,
            }}
          >
            {title && !title.ticker && (
              <div
                className={`${theme} `}
                style={{
                  background: color,
                  padding: userName ? "12px 14px" : "18px 24px",
                  maxWidth:
                    screenMode === "portrait"
                      ? userName
                        ? "fit-content"
                        : "100%"
                      : screenMode === "portrait"
                      ? userName
                        ? "fit-content"
                        : "100%"
                      : "100%",
                }}
              >
                {title && !title.ticker && (
                  <text
                    style={{
                      fontSize: userName
                        ? screenMode === "portrait"
                          ? "50px"
                          : "22px"
                        : screenMode === "portrait" || screenWidth < 575
                        ? "57px"
                        : "31.2px",
                      color: fontColor,
                      minWidth: screenMode === "portrait" ? "550px" : "auto",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    {title.title}
                  </text>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="them-box">
          <div
            className={`wraper-them-${theme} ${ticker && "haveTikcer"}`}
            onClick={(e) => {
              handleUrlPath(title?.interactive && title?.url ? title?.url : "");
            }}
            style={{
              transform: `scale(${sacle})`,
              width:
                screenMode === "portrait"
                  ? userName
                    ? "1248px "
                    : "1248px"
                  : "1248px",
              bottom:
                screenMode === "portrait"
                  ? ticker
                    ? "6%"
                    : "7%"
                  : status !== "Viewer" && screenWidth < 575
                  ? ticker
                    ? "16%"
                    : "6%"
                  : ticker
                  ? "10%"
                  : "7%",
            }}
          >
            {title && !title.ticker && (
              <div className={`${theme} `} style={{ background: color }}>
                {title && (
                  <text
                    style={{
                      fontSize: userName
                        ? screenMode === "portrait"
                          ? "46px"
                          : "22px"
                        : screenMode === "portrait" || screenWidth < 575
                        ? "57px"
                        : "31.2px",
                      color: fontColor,
                    }}
                  >
                    {title.title}
                  </text>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {ticker && ticker.ticker && (
        <div
          className="ticker-box"
          onClick={(e) => {
            handleUrlPath(
              ticker?.interactive && ticker?.url ? ticker?.url : ""
            );
          }}
          style={{
            background: color,
            transform: `scale(${sacle})`,
            width: "fit-content",
            minWidth: "1500px",
            height:
              screenWidth < 575 || screenMode === "portrait" ? "100px" : "50px",
            zIndex: 99,
          }}
        >
          <Marquee direction={ticker.leftToRight ? "right" : "left"}>
            <span
              style={{
                color: fontColor,
                fontSize:
                  screenWidth < 575 || screenMode === "portrait"
                    ? "70px"
                    : "30px",
              }}
            >
              {ticker.title}
            </span>
          </Marquee>
        </div>
      )}
    </div>
  );
}

export default TitleInsideBox;
