import React, { Fragment, useState, useEffect, useRef } from "react";
import "./BoxVideo.scss";
// import vi1 from "../../assits/videoBack.mp4";
// import img1 from "../../assits/about-1.jpg";
// import img1 from "../../assits/img-mobile.jpg";
import vi1 from "../../assits/presenter.jpg";
import { useSelector } from "react-redux";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
import Marquee from "react-fast-marquee";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { ChangeScrennMode } from "../../store/theme";
import TitleInsideBox from "./TitleInsideBox";
import BoxQuestion from "../QuestionTap/BoxQuestion";
import ViwerMobileCover from "../ViewerMobileScreen/ViwerMobileCover";
import BoxCreateQuestion from "../QuestionTap/BoxCreateQuestion";
import BoxPall from "../PollsTap/BoxPall";
import BoxCreatePolls from "../PollsTap/BoxCreatePolls";

function BoxVideo() {
  const [height, setHeight] = useState(0); // Default height
  const [width, setWidth] = useState(0); // Default width
  const [sacle, setSacle] = useState(0); // Default width
  const [heightFromStart, setHeightFromStart] = useState(window.innerHeight);
  const [widtFromStart, setWidtFromStart] = useState(window.innerWidth);
  const divRef = useRef(null);
  const childRef = useRef(null);
  const [videoDimensions, setVideoDimensions] = useState({});
  const screenWidth = window.innerWidth;

  const dispatch = useDispatch();
  let {
    theme,
    color,
    fontColor,
    sideBarStatus,
    status,
    cover,
    ShowNameUser,
    screenMode,
    layout,
    statusTapViewer,
  } = useSelector((state) => state.themeslice);

  let { Users } = useSelector((state) => state.persistData.users);

  let { currentSelected, stateCreateQues } = useSelector(
    (state) => state.persistData.questions
  );

  let { currentSelectedPoll, stateCreatePoll } = useSelector(
    (state) => state.persistData.polls
  );

  let { title, ticker } = useSelector((state) => state.persistData.banners);
  let { currentBackground: background } = useSelector(
    (state) => state.persistData.backgrounds
  );

  let generateSacle = (currentHight, currentWidth) => {
    // console.log("currentHight", currentHight);
    // console.log("currentWidthcurrentWidth", currentHight);
    // 0.0781249911844937
    // 0.0784882557356767
    let numberSacel = 0.0784882557356767;
    // screenMode === "portrait" || status === "Viewer"
    //   ? 0.077245308310992
    //   : 0.1395348051948052;
    let scale = (numberSacel * currentWidth) / 100;
    return scale;
  };

  const handleResize = () => {
    if (divRef.current) {
      const newWidth = divRef.current.clientWidth; // Get the new height
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
      } else {
        if (screenMode === "portrait") {
          setHeight(367);
          setWidth(206);
        } else {
          if (condition1 || condition2 || checkHeightChange) {
            if (screenHightLive < 480) {
              setHeight(50);
              setWidth(50);
            } else {
              setHeight(newHeightChild < 200 ? 200 : newHeightChild - 50);
              setWidth(newWidthChild < 200 ? 200 : newWidthChild - 100);
            }
          } else {
            setHeight(newHeightChild);
            setWidth(newWidthChild);
          }
        }
      }

      setTimeout(() => {
        const newHeight = divRef.current.clientHeight; // Adjust based on your needs
        const newWidth = divRef.current.clientWidth; // Adjust based on your needs

        setHeight(newHeight);
        setWidth(
          screenMode === "portrait"
            ? (newHeight * 9) / 16
            : (newHeight * 16) / 9
        );
      }, 500); // Short delay to allow measurement

      setTimeout(() => {
        const newHeightChild = childRef.current.clientHeight; // Adjust based on your needs
        const newWidthChild = childRef.current.clientWidth; // Adjust based on your need
        let scaleValue = generateSacle(newHeightChild, newWidthChild);
        setSacle(scaleValue);
      }, 700);
    }
  };

  const ResizeBySideBar = () => {
    const newHeightChild = childRef.current?.clientHeight; // Get the new height
    const newWidthChild = childRef.current?.clientWidth; // Get the new height

    const screenWidthLive = window.innerWidth;
    const screenHightLive = window.innerHeight;
    if (screenMode === "portrait" && status !== "Viewer") {
      setHeight(367);
      setWidth(206);
    } else {
      if (divRef.current) {
        if (status === "Viewer") {
          setHeight(
            screenWidthLive <= 1199
              ? sideBarStatus
                ? newHeightChild
                : newHeightChild
              : newHeightChild
          );
          setWidth(screenWidthLive <= 1199 ? newWidthChild : newWidthChild);
        } else {
          setHeight(
            screenWidthLive <= 1199
              ? sideBarStatus
                ? newHeightChild
                : newHeightChild - 100
              : newHeightChild - 100
          );
          setWidth(
            screenWidthLive <= 1199 ? newWidthChild - 100 : newWidthChild - 100
          );
        }

        setTimeout(() => {
          const newHeight = divRef.current.clientHeight; // Adjust based on your needs
          const newWidth = divRef.current.clientWidth; // Adjust based on your needs
          setHeight(newHeight);
          setWidth(
            screenMode === "portrait"
              ? (newHeight * 9) / 16
              : (newHeight * 16) / 9
          );
        }, 500); // Short delay to allow measurement
        setTimeout(() => {
          const newHeightChild = childRef.current.clientHeight; // Adjust based on your needs
          const newWidthChild = childRef.current.clientWidth; // Adjust based on your need
          let scaleValue = generateSacle(newHeightChild, newWidthChild);
          setSacle(scaleValue);
        }, 700);
      }
    }
  };

  let usersInStage = Users.filter((e) => e.inStage === true);

  useEffect(() => {
    ResizeBySideBar();
  }, [sideBarStatus, screenMode, statusTapViewer]); // Only called when sideBarStatus changes

  useEffect(() => {
    const newHeightChild = childRef.current?.clientHeight; // Get the new height
    const newWidthChild = childRef.current?.clientWidth; // Get the new height

    const screenWidthLive = window.innerWidth;
    const screenHightLive = window.innerHeight;

    if (status === "Moderator" || status === "Host") {
      setHeight(
        screenWidthLive <= 1199 ? (sideBarStatus ? newHeightChild : 367) : 367
      );
      setWidth(screenWidthLive <= 1199 ? "100%" : 652.4444444444444);
    }

    // Call handleResize initially
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [status, screenMode]);

  useEffect(() => {
    const calculateVideoDimensions = () => {
      const screenWidth = childRef.current?.clientWidth;
      const screenHeight = childRef.current?.clientHeight;

      // Calculate number of rows and columns based on video count
      let rows = 1;
      let columns = 1;
      const streamsCount = usersInStage.length;

      if (streamsCount === 1) {
        // Single layout

        columns = 1;
        rows = 1;
      } else if (layout === "Grid" && usersInStage.length > 1) {
        // Group layout (same as existing logic)
        if (
          (streamsCount > 2 && screenWidth > screenHeight) ||
          (streamsCount < 3 && screenWidth > screenHeight + 25)
        ) {
          // Landscape
          switch (streamsCount) {
            case 2:
              columns = 2;
              rows = 1;
              break;
            case 3:
              columns = 3;
              rows = 1;
              break;
            case 4:
              columns = 2;
              rows = 2;
              break;
            case 5:
              columns = 3;
              rows = 2;
              break;
            case 6:
              columns = 3;
              rows = 2;
              break;
            case 7:
              columns = 4;
              rows = 2;
              break;
            case 8:
              columns = 4;
              rows = 2;
              break;
            case 9:
              columns = 4;
              rows = 3;
              break;
            case 10:
              columns = 4;
              rows = 3;
              break;
            case 11:
              columns = 4;
              rows = 3;
              break;
            case 12:
              columns = 4;
              rows = 3;
              break;
            case 13:
              columns = 5;
              rows = 3;
              break;
            case 14:
              columns = 5;
              rows = 3;
              break;
            case 15:
              columns = 5;
              rows = 3;
              break;
            // ... (remaining cases for landscape layout)
            default:
              columns = 4;
              rows = 4;
          }
        } else {
          // Portrait
          switch (streamsCount) {
            case 2:
              columns = 1;
              rows = 2;
              break;
            case 3:
            case 4:
              columns = 2;
              rows = 2;
              break;
            case 5:
            case 6:
              columns = 2;
              rows = 3;
              break;
            case 7:
            case 8:
              columns = 2;
              rows = 4;
              break;
            case 9:
              columns = 3;
              rows = 3;
              break;
            case 10:
            case 11:
            case 12:
              columns = 3;
              rows = 4;
              break;
            default:
              columns = 3;
              rows = 5;
          }
        }
      } else if (layout === "Fill" && usersInStage.length > 1) {
        // Group layout (same as existing logic)
        if (
          (streamsCount > 2 && screenWidth > screenHeight) ||
          (streamsCount < 3 && screenWidth > screenHeight + 25)
        ) {
          // Landscape
          switch (streamsCount) {
            case 2:
              columns = 2;
              rows = 1;
              break;
            case 3:
              columns = 3;
              rows = 1;
              break;
            case 4:
              columns = 2;
              rows = 2;
              break;
            case 5:
              columns = 3;
              rows = 2;
              break;
            case 6:
              columns = 3;
              rows = 2;
              break;
            case 7:
              columns = 4;
              rows = 2;
              break;
            case 8:
              columns = 4;
              rows = 2;
              break;
            case 9:
              columns = 4;
              rows = 3;
              break;
            case 10:
              columns = 4;
              rows = 3;
              break;
            case 11:
              columns = 4;
              rows = 3;
              break;
            case 12:
              columns = 4;
              rows = 3;
              break;
            case 13:
              columns = 5;
              rows = 3;
              break;
            case 14:
              columns = 5;
              rows = 3;
              break;
            case 15:
              columns = 5;
              rows = 3;
              break;
            // ... (remaining cases for landscape layout)
            default:
              columns = 4;
              rows = 4;
          }
        } else {
          // Portrait
          switch (streamsCount) {
            case 2:
              columns = 1;
              rows = 2;
              break;
            case 3:
              columns = 1;
              rows = 3;
              break;
            case 4:
              columns = 2;
              rows = 4;
              break;
            case 5:
              columns = 2;
              rows = 3;
              break;
            case 6:
              columns = 2;
              rows = 3;
              break;
            case 7:
              columns = 2;
              rows = 4;
              break;
            case 8:
              columns = 2;
              rows = 4;
              break;
            case 9:
              columns = 3;
              rows = 3;
              break;
            case 10:
              columns = 3;
              rows = 4;
              break;
            case 11:
              columns = 3;
              rows = 4;
              break;
            case 12:
              columns = 3;
              rows = 4;
              break;
            case 13:
              columns = 3;
              rows = 5;
              break;
            case 14:
              columns = 3;
              rows = 5;
              break;
            case 15:
              columns = 3;
              rows = 5;
              break;
            // ... (remaining cases for portrait layout)
            default:
              columns = 3;
              rows = 8;
          }
        }
      } else {
        // Default layout (same as existing logic)
        // ... (your existing logic for calculating rows and columns)
      }

      // Calculate width and height of each video element with margins
      const marginX =
        layout === "Single" || usersInStage.length === 1
          ? 0
          : layout === "Fill"
          ? 5
          : 30;
      const marginY =
        layout === "Single" || usersInStage.length === 1
          ? 0
          : layout === "Fill"
          ? 0
          : 15;
      const availableWidth = screenWidth / columns - marginX;
      const availableHeight = screenHeight / rows - marginY;
      let newWidth, newHeight;
      if (screenHeight > screenWidth && streamsCount > 2) {
        // Multiple streams on mobile, square containers
        newWidth =
          availableWidth > availableHeight ? availableHeight : availableWidth;
        newHeight = newWidth;
      } else {
        // 16:9 aspect ratio
        if (availableWidth / availableHeight > 16 / 9) {
          newWidth = (availableHeight * 16) / 9;
          newHeight = availableHeight;
        } else {
          newWidth = availableWidth;
          newHeight =
            layout === "Fill" ? availableHeight : (availableWidth * 9) / 16;
        }
      }
      const timeoutId = setTimeout(() => {
        setVideoDimensions({ newWidth, newHeight, rows, columns });
        dispatch(ChangeScrennMode(screenMode));
      }, 10);
      return () => clearTimeout(timeoutId);
    };
    calculateVideoDimensions();
  }, [
    height,
    width,
    layout,
    sideBarStatus,
    usersInStage.length,
    status,
    Users,
    screenMode,
    childRef.current?.clientWidth,
    childRef.current?.clientHeight,
  ]);

  const renderVideos = (videoList) => {
    const { newWidth, newHeight } = videoDimensions;
    return videoList.map((ele, index) => {
      const CamStyle = {
        width: `${newWidth}px`,
        height: `${newHeight}px`,
        // transition: `all 0.3s ease ${"0.1s"}`,
        // transition: `all 0.05s ease-in-out 0s`,
        position: "relative",
      };

      return (
        <div key={index} className="video-container" style={CamStyle}>
          {/**
          <video
            src={video.cam}
            style={{ objectFit: layout === "Fill" ? "fill" : "contain" }}
          ></video>
        */}
          {ele.activeCam ? (
            ele.type === "img" || ele.type === "ImgList" ? (
              <img
                src={ele.src ? ele.src : vi1}
                alt="..."
                style={{
                  width: `${newWidth}px`,
                  height: `${newHeight}px`,
                  objectFit:
                    layout === "Fill"
                      ? "cover"
                      : usersInStage.length > 1
                      ? "cover"
                      : "contain",
                }}
              />
            ) : (
              <Fragment>
                <video
                  src={ele.src}
                  autoPlay
                  controls
                  controlsList
                  style={{
                    objectFit:
                      layout === "Fill"
                        ? "cover"
                        : usersInStage.length > 1
                        ? "cover"
                        : "contain",
                  }}
                ></video>
              </Fragment>
            )
          ) : (
            <div className="box-avatar">
              <div className="wraper-avatar">
                <svg
                  focusable={false}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#4F5461"
                  className="styled__StyledAccountCircle-sc-a7234v-4 dBFZjM"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </div>
          )}
          {!title.title && !ticker && (
            <TitleInsideBox
              title={ShowNameUser ? { title: ele.name } : ""}
              theme={theme}
              ticker={ticker}
              color={color}
              fontColor={fontColor}
              sacle={sacle}
              screenMode={screenMode}
              userName
            />
          )}
        </div>
      );
    });
  };

  //layout = "Single" || "Fill" || "Grid" || "mainSup"
  return (
    <Fragment>
      <div
        className="bibibig"
        ref={divRef}
        style={{
          background: status === "Viewer" ? "rgb(19, 19, 21)" : "",
          flex: "25 auto",
          height:
            status === "Viewer"
              ? "100%"
              : screenWidth <= 576
              ? (screenWidth / 16) * 9
              : "TEST",
        }}
      >
        <div
          className="box-conatiner"
          ref={childRef}
          style={{
            height:
              screenWidth <= 576
                ? status === "Viewer"
                  ? "100%"
                  : `${
                      width > divRef.current && divRef.current.clientWidth
                        ? (divRef.current && divRef.current.clientWidth * 9) /
                          16
                        : height
                    }px`
                : `${
                    width > divRef.current?.clientWidth
                      ? (divRef.current && divRef.current.clientWidth * 9) / 16
                      : height
                  }px`,
            width: `${
              width > divRef.current?.clientWidth
                ? divRef.current?.clientWidth
                : screenMode === "portrait"
                ? (height * 9) / 16
                : width
            }px`,
          }}
        >
          <div
            className="box-conatiner1"
            style={{
              backgroundImage: `url(${
                screenMode === "portrait" || status === "Viewer"
                  ? background.portrait
                    ? background.portrait && background.portrait.src
                    : background.landscape && background.landscape.src
                  : background.landscape
                  ? background.landscape && background.landscape.src
                  : background.portrait && background.portrait.src
              }) `,
              backgroundSize: screenMode === "portrait" ? "cover" : "contain",
            }}
          >
            <div className="box-conatiner2">
              <div
                className="wrapper-camera"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: `${
                    layout === "Grid"
                      ? usersInStage.length > 1
                        ? "10px"
                        : "0"
                      : "0"
                  }`,
                  // gap: `${layout === "Fill" ? "5px" : "20px"}`,
                  justifyContent: "space-around",
                  alignItems: "center",
                  transition: "all 0.3s ease 0s",
                }}
              >
                {layout === "Single" || usersInStage.length === 1
                  ? renderVideos(usersInStage.filter((video) => video.main)) // Filter for main video in Single layout
                  : renderVideos(usersInStage)}
              </div>
            </div>
            <TitleInsideBox
              title={title}
              theme={theme}
              ticker={ticker}
              fontColor={fontColor}
              color={color}
              sacle={sacle}
              screenMode={screenMode}
              status={status}
            />
            <div className="d-none d-sm-flex">
              {currentSelected &&
                (currentSelected.type === "question" ? (
                  <BoxQuestion value={currentSelected.value} />
                ) : (
                  ""
                ))}
              {currentSelectedPoll && (
                <BoxPall value={currentSelectedPoll.value} />
              )}

              {stateCreateQues && stateCreateQues.show === "question" && (
                <BoxCreateQuestion
                  valueData={stateCreateQues.value}
                  type={stateCreateQues.type}
                />
              )}

              {stateCreatePoll && (
                <BoxCreatePolls
                  valueData={stateCreatePoll.value}
                  type={stateCreatePoll.type}
                />
              )}
            </div>
            <div className="d-block d-sm-none mobile-pop-box">
              {status === "Viewer" && <ViwerMobileCover />}
            </div>
          </div>
        </div>
      </div>

      <div className="d-block d-sm-none ">
        {currentSelected &&
          (currentSelected.type === "question" ? (
            <BoxQuestion value={currentSelected.value} />
          ) : (
            ""
          ))}
        {currentSelectedPoll && <BoxPall value={currentSelectedPoll.value} />}
        {stateCreateQues && stateCreateQues.show === "question" && (
          <BoxCreateQuestion
            valueData={stateCreateQues.value}
            type={stateCreateQues.type}
          />
        )}

        {stateCreatePoll && (
          <BoxCreatePolls
            valueData={stateCreatePoll.value}
            type={stateCreatePoll.type}
          />
        )}
      </div>
      {/*Button actions foe edit on video box */}
      {/**  {status !== "Viewer" && (
        <div className="box-btns d-none d-sm-flex">
       <Layout />
        </div>
      )} */}
    </Fragment>
  );
}

export default BoxVideo;
