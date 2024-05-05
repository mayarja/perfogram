import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./AllActionTap.scss";
import { ManageReOrderAllAction, CloseSide } from "../../store/theme";
import {
  ManageDeleteBanner,
  ManageEditBanner,
  getTicker,
  getTitleBanner,
} from "../../store/bannersSlice";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
import BannerSvg from "../Svgs/BannerSvg";
import VideoSvg from "../Svgs/VideoSvg";
import PollSvg from "../Svgs/PollSvg";
import Switch from "react-switch";
import { deleteAllAction, editAllAction } from "../../store/allActionsSlice";
import { ManageDeleteVideo } from "../../store/videosSlice";
import { ManageDeleteGraphic } from "../../store/graphicSlice";
import {
  DeleteQusetion,
  ManageShowSelectQuestion,
  ShowBoxEditCreateQues,
} from "../../store/questionSlice";
import {
  DeletePoll,
  ManageShowSelectPoll,
  ShowBoxEditCreatePoll,
} from "../../store/pollsSlice";
import { manageUsers } from "../../store/usersSlice";

function AllActionTap() {
  // let { Users } = useSelector((state) => state.themeslice);
  let { Users } = useSelector((state) => state.persistData.users);
  let { currentSelected: currentQuestion } = useSelector(
    (state) => state.persistData.questions
  );

  let { currentSelectedPoll } = useSelector((state) => state.persistData.polls);
  let { title, ticker } = useSelector((state) => state.persistData.banners);
  let { AllActions } = useSelector((state) => state.persistData.all);
  let [data, setData] = useState(AllActions);
  useEffect(() => {
    setData(AllActions);
  }, [AllActions]);
  let dispatch = useDispatch();

  //fucntion handle item show by select
  console.log("asdasd");
  const handleShow = (e, type, empty) => {
    if (e.type === "banner") {
      if (type.type === "ticker") {
        dispatch(getTicker(empty ? "" : e.value));
      } else {
        dispatch(
          getTitleBanner(
            empty
              ? ""
              : {
                  title: e.value.title,
                  index: e.value.id,
                  ticker: e.value.ticker,
                }
          )
        );
      }
    }
    if (e.type === "question") {
      dispatch(ManageShowSelectQuestion({ value: e.value, type: "question" }));
    }
    if (e.type === "poll") {
      dispatch(ManageShowSelectPoll({ value: e.value, type: "poll" }));
    }
    if (e.type === "graphic") {
      const graphicIndex = Users.findIndex((ele) => ele.id === e.value.id);
      if (graphicIndex !== -1) {
        let updateValue = Users.filter((ele) => ele.id !== e.value.id);
        dispatch(manageUsers(updateValue));
      } else {
        let newData = Users.filter((e) => e.type !== "ImgList");
        const updatedData = newData.map((item) => {
          return { ...item, main: false }; // Toggle inStage
        });
        dispatch(
          manageUsers([
            ...updatedData,
            {
              id: e.value.id,
              name: e.value.name,
              type: "ImgList",
              main: true,
              src: e.value.src,
              inStage: true,
              activeCam: true,
            },
          ])
        );
      }
    }
    if (e.type === "video") {
      const videoIndex = Users.findIndex((ele) => ele.id === e.value.id);
      console.log("videoIndex", videoIndex);
      if (videoIndex !== -1) {
        // Video found, toggle inStage property
        let updateValue = Users.filter((ele) => ele.id !== e.value.id);
        dispatch(manageUsers(updateValue));
      } else {
        // Video not found, add a new video object
        let newData = Users.filter((e) => e.type !== "videoList");
        const updatedData = newData.map((item) => {
          return { ...item, main: false }; // Toggle inStage
        });
        console.log("qweqweqweqwe");
        dispatch(
          manageUsers([
            ...updatedData,
            {
              id: e.value.id,
              title: e.value.name,
              type: "videoList",
              main: true,
              src: e.value.src,
              // loop: loop,
              inStage: true,
              activeCam: true,
            },
          ])
        );
      }
    }
  };

  //delete item from list all and the main list of element selected
  const DeleteFn = (e, type) => {
    dispatch(deleteAllAction(e));
    if (type === "banner") {
      dispatch(ManageDeleteBanner(e));
    } else if (type === "video") {
      const videoIndex = Users.findIndex((ele) => ele.id === e);
      if (videoIndex !== -1) {
        // Video found, toggle inStage property
        let updateValue = Users.filter((ele) => ele.id !== e);
        dispatch(manageUsers(updateValue));
      }
      dispatch(ManageDeleteVideo(e));
    } else if (type === "graphic") {
      const videoIndex = Users.findIndex((ele) => ele.id === e);
      if (videoIndex !== -1) {
        let updateValue = Users.filter((ele) => ele.id !== e);
        dispatch(manageUsers(updateValue));
      }
      dispatch(ManageDeleteGraphic(e));
    } else if (type === "question") {
      dispatch(DeleteQusetion(e));
    } else {
      dispatch(DeletePoll(e));
    }
  };

  let onDragStart = (e) => {
    setStateEdit("");
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;
    if (source.index === destination.index) {
      return; // Item dropped in the same position
    }

    const updatedList = reorder(data, source.index, destination.index);
    setData(updatedList);
    dispatch(ManageReOrderAllAction(updatedList));
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  //check if the banner active and selected or no
  let checkActiveBanner = (ee) => {
    if (ee === ticker.index || ee === title.index || ee === ticker.id) {
      return true;
    } else {
      return false;
    }
  };

  //check if the video active and selected or no
  let checkActiveVideo = (id) => {
    const videoIndex = Users.findIndex((ele) => ele.id === id);
    console.log("asdasdadasdasd", videoIndex);
    return videoIndex !== -1 ? true : false;
  };
  //check if the graphic active and selected or no
  let checkActiveGraphic = (id) => {
    const imgIndex = Users.findIndex((ele) => ele.id === id);
    console.log("asdasdadasdasd", imgIndex);
    return imgIndex !== -1 ? true : false;
  };
  //check if the question active and selected or no
  let checkActiveQuestion = (id) => {
    if (currentQuestion.type === "question") {
      return currentQuestion.value.id === id ? true : false;
    } else {
      return false;
    }
  };

  //check if the poll active and selected or no
  let checkActivePoll = (id) => {
    if (currentSelectedPoll.type === "poll") {
      return currentSelectedPoll.value.id === id ? true : false;
    } else {
      return false;
    }
  };
  //need for banner (edit and create)
  let [stateEdit, setStateEdit] = useState("");
  let [inp, setInp] = useState("");
  let [url, setURL] = useState("");
  let [tickerValue, setTicker] = useState("");
  let [interactive, setInteractive] = useState("");
  let [leftToRight, setLeftToRight] = useState(false);
  let [shoppable, setShoppable] = useState(false);

  let handleEditBannerClick = (value) => {
    setStateEdit(value.id);
    setURL(value.url);
    setTicker(value.ticker);
    setInteractive(value.interactive);
    setLeftToRight(value.leftToRight);
    setShoppable(value.shoppable);
  };

  let handleEditBanner = (
    e,
    index,
    id,
    ticker,
    title,
    interactiveVal,
    leftToRightVal,
    urlValue,
    shoppableValue
  ) => {
    setInp("");
    setTicker("");
    setStateEdit("");
    const values = {
      title: inp ? inp : title,
      ticker: tickerValue === "" ? ticker : tickerValue,
      url: url ? url : urlValue,
      interactive: interactive === "" ? interactiveVal : interactive,
      leftToRight: leftToRight === "" ? leftToRightVal : leftToRight,
      shoppable: shoppable === "" ? shoppableValue : shoppable,
    };
    dispatch(ManageEditBanner({ id, values }));
    dispatch(editAllAction({ id, values }));
  };
  //need for banner (edit and create)

  //show and edit question
  let HandleEditQuestion = (e) => {
    dispatch(
      ShowBoxEditCreateQues({ value: e, type: "edit", show: "question" })
    );
  };

  //show and edit poll
  let HandleEditPoll = (e) => {
    dispatch(ShowBoxEditCreatePoll({ value: e, type: "edit", show: "poll" }));
  };

  //in this box i handle logic to all type of element
  function Box({ value }) {
    return value.type === "banner" ? (
      <Fragment>
        <div className="box-title">
          <div className="box-icons">
            <BannerSvg
              color={checkActiveBanner(value.id) ? "#fff" : "rgb(79, 84, 97)"}
              current={checkActiveBanner(value.id) ? true : false}
            />
          </div>
          <div
            className="title"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                WebkitLineClamp: value.ticker ? "1" : "2",
              }}
            >
              {value.title}
            </span>
            {value.ticker && (
              <div className="box-tiker">
                <i className="fa-solid fa-left-long" />
                <span>ticker</span>
                <i className="fa-solid fa-right-long" />
              </div>
            )}
          </div>
        </div>

        <div className="box-action">
          {checkActiveBanner(value.id) ? (
            <div
              className="Title"
              onClick={(e) => {
                handleShow(
                  { value: value, type: value.type },
                  {
                    type: value.ticker ? "ticker" : "Title",
                  },
                  true
                );
              }}
            >
              <text>Hide</text>
            </div>
          ) : (
            <div className="Title">
              <div
                className="Title"
                onClick={(e) => {
                  handleShow(
                    { value: value, type: value.type },
                    {
                      type: value.ticker ? "ticker" : "Title",
                    }
                  );
                }}
              >
                <i className="fa-solid fa-circle-plus" />
                <text>Show</text>
              </div>

              <div className="icon-edit">
                <BoxTooltipTitle placement="top" title="Edit">
                  <div
                    className="edit"
                    style={{
                      margin: "0",
                      marginRight: "-5px",
                    }}
                    onClick={(e) => {
                      handleEditBannerClick(value);
                    }}
                  >
                    <i className="fa-solid fa-pen" />
                  </div>
                </BoxTooltipTitle>
                <BoxTooltipTitle placement="top" title="Delete">
                  <div
                    className="edit"
                    onClick={(e) => DeleteFn(value.id, "banner")}
                  >
                    <i className="fa-solid fa-trash" />
                  </div>
                </BoxTooltipTitle>
              </div>
            </div>
          )}
        </div>
      </Fragment>
    ) : value.type === "graphic" ? (
      <Fragment>
        <div className="box-title">
          <div className="box-icons">
            <i className="fa-solid fa-image" />
          </div>
          <div className="title">
            <div className="element">
              <img
                src={
                  typeof (value.element || value.src === "string")
                    ? value.src || value.element
                    : URL.createObjectURL(value.src || value.element)
                }
                alt=".."
              />
            </div>
            <span>{value.title}</span>
          </div>
        </div>

        <div
          className="box-action"
          onClick={() => {
            handleShow({ value: value, type: value.type });
          }}
        >
          <div className="Title">
            {!checkActiveGraphic(value.id) ? (
              <div className="Title">
                <i className="fa-solid fa-circle-plus" />
                <text>Show</text>
              </div>
            ) : (
              <div className="Title">
                <i className="fa-solid fa-circle-plus" />
                <text>Hide</text>
              </div>
            )}
          </div>
          <div className="icon-edit">
            <BoxTooltipTitle placement="top" title="Edit">
              <div
                className="edit"
                style={{
                  margin: "0",
                  marginRight: "-5px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <i className="fa-solid fa-pen" />
              </div>
            </BoxTooltipTitle>
            <BoxTooltipTitle placement="top" title="Delete">
              <div
                className="edit"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  DeleteFn(value.id, "graphic");
                }}
              >
                <i className="fa-solid fa-trash" />
              </div>
            </BoxTooltipTitle>
          </div>
        </div>
      </Fragment>
    ) : value.type === "video" ? (
      <Fragment>
        <div className="box-title">
          <div className="box-icons video-active">
            <VideoSvg
              color={checkActiveVideo(value.id) ? "active" : "#575d68"}
            />
          </div>
          <div className="title">
            <div className="element">
              <video src={value.src} alt=".." />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  WebkitLineClamp: "1",
                }}
              >
                {value.title}
              </span>
              <span>{value.duration || "0:30"}</span>
            </div>
          </div>
        </div>

        <div
          className="box-action"
          onClick={() => {
            handleShow({ value: value, type: value.type });
          }}
        >
          <div className="Title">
            {!checkActiveVideo(value.id) ? (
              <div className="Title">
                <i className="fa-solid fa-circle-plus" />
                <text>Show</text>
              </div>
            ) : (
              <div className="Title">
                <i className="fa-solid fa-circle-plus" />
                <text>Hide</text>
              </div>
            )}
          </div>
          <div className="icon-edit">
            <BoxTooltipTitle placement="top" title="Edit">
              <div
                className="edit"
                style={{
                  margin: "0",
                  marginRight: "-5px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <i className="fa-solid fa-pen" />
              </div>
            </BoxTooltipTitle>
            <BoxTooltipTitle placement="top" title="Delete">
              <div
                className="edit"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  DeleteFn(value.id, "video");
                }}
              >
                <i className="fa-solid fa-trash" />
              </div>
            </BoxTooltipTitle>
          </div>
        </div>
      </Fragment>
    ) : value.type === "question" ? (
      <Fragment>
        <div className="box-title">
          <div className="box-icons">
            <div className="d-flex " style={{ gap: "5.5px" }}>
              <span style={{ fontSize: "1rem" }}>290</span>{" "}
              <i
                style={{ fontSize: "1rem", width: "3px", paddingTop: "1px" }}
                className="fa-solid fa-coins"
              ></i>
            </div>
            <div className="d-flex " style={{ gap: "5.5px" }}>
              <span style={{ fontSize: "1rem" }}>40</span>{" "}
              <i
                style={{ fontSize: "1rem", width: "3px", paddingTop: "1px" }}
                className="fa-regular fa-clock"
              ></i>
            </div>
          </div>
          <div className="title">
            {value.element && (
              <div className="element">
                <img
                  src={
                    value.element instanceof File
                      ? URL.createObjectURL(value.src || value.element)
                      : value.src || value.element || value.element.path
                  }
                  alt=".."
                />
              </div>
            )}
            <span>{value.title}</span>
          </div>
        </div>

        <div
          className="box-action"
          onClick={(e) => {
            handleShow({ value: value, type: value.type });
          }}
        >
          <div className="Title">
            {!checkActiveQuestion(value.id) ? (
              <div className="Title">
                <i className="fa-solid fa-circle-plus" />
                <text>Show</text>
              </div>
            ) : (
              <div className="Title">
                <i className="fa-solid fa-circle-plus" />
                <text>Hide</text>
              </div>
            )}
          </div>
          <div className="icon-edit">
            <BoxTooltipTitle placement="top" title="Edit">
              <div
                className="edit"
                style={{
                  margin: "0",
                  marginRight: "-5px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  HandleEditQuestion(value);
                }}
              >
                <i className="fa-solid fa-pen" />
              </div>
            </BoxTooltipTitle>
            <BoxTooltipTitle placement="top" title="Delete">
              <div
                className="edit"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  DeleteFn(value.id, "question");
                }}
              >
                <i className="fa-solid fa-trash" />
              </div>
            </BoxTooltipTitle>
          </div>
        </div>
      </Fragment>
    ) : (
      <Fragment>
        <div className="box-title">
          <div className="box-icons">
            <PollSvg />
          </div>
          <div className="title">
            {value.element && (
              <div className="element">
                <img
                  src={
                    value.element instanceof File
                      ? URL.createObjectURL(value.src || value.element)
                      : value.src || value.element || value.element.path
                  }
                  alt=".."
                />
              </div>
            )}
            <span>{value.title}</span>
          </div>
        </div>

        <div
          className="box-action"
          onClick={(e) => {
            handleShow({ value: value, type: value.type });
          }}
        >
          <div className="Title">
            {!checkActivePoll(value.id) ? (
              <div className="Title">
                <i className="fa-solid fa-circle-plus" />
                <text>Show</text>
              </div>
            ) : (
              <div className="Title">
                <i className="fa-solid fa-circle-plus" />
                <text>Hide</text>
              </div>
            )}
          </div>
          <div className="icon-edit">
            <BoxTooltipTitle placement="top" title="Edit">
              <div
                className="edit"
                style={{
                  margin: "0",
                  marginRight: "-5px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  HandleEditPoll(value);
                }}
              >
                <i className="fa-solid fa-pen" />
              </div>
            </BoxTooltipTitle>
            <BoxTooltipTitle placement="top" title="Delete">
              <div
                className="edit"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  DeleteFn(value.id);
                }}
              >
                <i className="fa-solid fa-trash" />
              </div>
            </BoxTooltipTitle>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className="wrapper-side all-action">
        <div className="p-2  wrapper-side Details" style={{ border: "none" }}>
          <div className="header ">
            <text className="text-acco">All Assets</text>
            <BoxTooltipTitle
              // bigWidth={true}
              title={
                <div className="" style={{ color: "#fff" }}>
                  All
                </div>
              }
              placement="top"
            >
              <i className="fa-regular fa-circle-question ms-2 question" />
            </BoxTooltipTitle>
            <div className="close" onClick={() => dispatch(CloseSide(false))}>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <Droppable droppableId="draggable">
            {(provided, snapshot) => (
              <ul
                className="list-unstyled"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data &&
                  data.map((value, index) => (
                    <Draggable
                      key={value.id}
                      draggableId={value.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) =>
                        stateEdit === value.id ? (
                          //Edit Banner
                          <div className="box-create  mb-2 mt-2">
                            <div className="box-add">
                              <input
                                type="text"
                                className="form-control input"
                                autoFocus
                                placeholder="Enter a banner..."
                                defaultValue={value.title}
                                maxLength={200}
                                onChange={(e) => setInp(e.target.value)}
                              />
                              <p className="count">
                                {inp.length ? inp.length : value.title.length}
                                /200
                              </p>
                              <div className="ticker">
                                <div className="box-tiker">
                                  <Switch
                                    onColor="#080"
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    height={13.2}
                                    width={26}
                                    handleDiameter={15}
                                    checked={tickerValue}
                                    onChange={(e) => setTicker(e)}
                                  />
                                  <span className="label">Ticker (crawl)</span>
                                </div>
                                {tickerValue && (
                                  <div className="box-tiker">
                                    <Switch
                                      onColor="#080"
                                      checkedIcon={false}
                                      uncheckedIcon={false}
                                      height={13.2}
                                      width={26}
                                      handleDiameter={15}
                                      checked={leftToRight}
                                      onChange={(e) => setLeftToRight(e)}
                                    />
                                    <span className="label">Left to right</span>
                                  </div>
                                )}
                              </div>

                              <div
                                className="ticker"
                                // style={{ paddingTop: "0", paddingBottom: "0" }}
                              >
                                <div className="box-tiker">
                                  <Switch
                                    onColor="#080"
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    height={13.2}
                                    width={26}
                                    handleDiameter={15}
                                    checked={interactive}
                                    onChange={(e) => setInteractive(e)}
                                  />
                                  <span className="label">Interactive</span>
                                </div>

                                {interactive && (
                                  <div className="box-tiker">
                                    <input
                                      name="inter"
                                      className="form-control"
                                      placeholder="Insert the destination URL here...
"
                                      value={url}
                                      onChange={(e) => setURL(e.target.value)}
                                    />
                                  </div>
                                )}
                              </div>

                              <div className="ticker">
                                <div className="box-tiker">
                                  <Switch
                                    onColor="#080"
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    height={13.2}
                                    width={26}
                                    handleDiameter={15}
                                    checked={shoppable}
                                    onChange={(e) => setShoppable(e)}
                                  />
                                  <span className="label">Shoppable</span>
                                </div>
                              </div>

                              <div className="box-btn">
                                <button
                                  className="btn add"
                                  onClick={(e) =>
                                    handleEditBanner(
                                      "edit",
                                      index,
                                      value.id,
                                      value.ticker,
                                      value.title,
                                      value.interactive,
                                      value.leftToRight,
                                      value.url,
                                      value.shoppable
                                    )
                                  }
                                >
                                  <text>Save</text>
                                </button>
                                <button
                                  className="btn cancle"
                                  onClick={(e) => {
                                    setStateEdit("");
                                    setInp("");
                                    setTicker("");
                                    setInteractive("");
                                    setLeftToRight("");
                                    setShoppable("");
                                  }}
                                >
                                  <text>Cancle</text>
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <li
                            className={`notAdded draggable-item ${
                              snapshot.isDragging ? "dragging" : ""
                            } 
                            ${
                              value.type === "banner"
                                ? checkActiveBanner(value.id) && "active"
                                : value.type === "video"
                                ? checkActiveVideo(value.id) && "active"
                                : value.type === "graphic"
                                ? checkActiveGraphic(value.id) && "active"
                                : value.type === "question"
                                ? checkActiveQuestion(value.id) && "active"
                                : value.type === "poll"
                                ? checkActivePoll(value.id) && "active"
                                : ""
                            }
                          
                          `}
                            // style={AddTitleStage === value.id ? style2 : style1}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Box value={value} />
                          </li>
                        )
                      }
                    </Draggable>
                  ))}
              </ul>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}

export default AllActionTap;
