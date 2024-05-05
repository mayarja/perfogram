import React, { Fragment, useRef, useState } from "react";
import "./UploadVideo.scss";

import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import { useDispatch, useSelector } from "react-redux";
import { CloseSide } from "../../store/theme";
import {
  ManageAddVideo,
  ManageDeleteVideo,
  ManageReorderVideo,
} from "../../store/videosSlice.js";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { randomPassword } from "../../RandomID";
import VideoSvg from "../Svgs/VideoSvg";
import { addAllAction, deleteAllAction } from "../../store/allActionsSlice.js";
import { manageUsers } from "../../store/usersSlice.js";
function UploadVideos() {
  let { Users } = useSelector((state) => state.persistData.users);
  let { videos } = useSelector((state) => state.persistData.videos);

  let [File, setFile] = useState("");
  let dispatch = useDispatch();

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "video/mp4") {
      setFile(event.target.files[0]);

      const reader = new FileReader();
      reader.onload = (e) => {
        let value = {
          id: `${randomPassword(2)}${videos.length + 1}}`,
          title: file.name,
          duration: "0:30", // You can update this with the actual video length
          src: e.target.result,
          type: "video",
        };
        dispatch(ManageAddVideo(value));
        dispatch(addAllAction(value));
      };
      reader.readAsDataURL(file);
      setFile("");
    }
  };

  let [showCreate, setShowCreate] = useState(true);

  let onDragStart = (e) => {
    setShowCreate(false);
  };

  const onDragEnd = (result) => {
    setShowCreate(true);
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;
    if (source.index === destination.index) {
      return; // Item dropped in the same position
    }
    const updatedList = reorder(videos, source.index, destination.index);
    dispatch(ManageReorderVideo(updatedList));
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const addVideoToStage = (loop, video) => {
    const videoIndex = Users.findIndex((ele) => ele.id === video.id);
    if (videoIndex !== -1) {
      // Video found, toggle inStage property
      let updateValue = Users.filter((ele) => ele.id !== video.id);
      dispatch(manageUsers(updateValue));
    } else {
      // Video not found, add a new video object
      let newData = Users.filter((e) => e.type !== "videoList");
      const updatedData = newData.map((item) => {
        return { ...item, main: false }; // Toggle inStage
      });
      dispatch(
        manageUsers([
          ...updatedData,
          {
            id: video.id,
            title: video.name,
            type: "videoList",
            main: true,
            src: video.src,
            // loop: loop,
            inStage: true,
            activeCam: true,
          },
        ])
      );
    }
  };

  let DeleteFn = (ee) => {
    const videoIndex = Users.findIndex((ele) => ele.id === ee);
    if (videoIndex !== -1) {
      // Video found, toggle inStage property
      let updateValue = Users.filter((ele) => ele.id !== ee);
      dispatch(manageUsers(updateValue));
    }
    dispatch(ManageDeleteVideo(ee));
    dispatch(deleteAllAction(ee));
  };

  let checkActive = (id) => {
    const videoIndex = Users.findIndex((ele) => ele.id === id);
    return videoIndex !== -1 ? true : false;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className="wrapper-side all-action">
        <div className="Details p-2">
          <div className="header">
            <text className="text-acco">Videos</text>
            <BoxTooltipTitle
              bigWidth={true}
              backgroundColor={"rgba(27, 31, 41)"}
              title={
                <div className="toltip-title-line">
                  <span>Upload short video clips</span> <br />{" "}
                  <span>File type: mp4</span> <br />{" "}
                  <span>Recommended dimensions: 1280 x 720 pixels</span> <br />{" "}
                  <span>Recommended duration: from 10 secs to 15 mins</span>{" "}
                  <br />
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
          {/**
                  <div className="loop d-flex">
            <input
              id="loop"
              type="checkbox"
              className="check-form"
              value={loop}
              onChange={(e) => {
                setLoop(!loop);
                dispatch(ManageCover({ ...cover, ["loop"]: !loop }));
              }}
            />
            <label htmlFor="loop">Loop</label>
            <BoxTooltipTitle
              backgroundColor={"rgba(27, 31, 41)"}
              title={"Enable loop to repeat video clips"}
              placement="top"
            >
              <i className="fa-regular fa-circle-question ms-2 question" />
            </BoxTooltipTitle>
          </div>
    */}

          <Droppable droppableId="draggable">
            {(provided, snapshot) => (
              <ul
                className="list-unstyled mb-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {videos &&
                  videos.map((video, index) => (
                    <Draggable
                      key={video.id}
                      draggableId={video.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={index}
                          className={`notAdded draggable-item ${
                            snapshot.isDragging ? "dragging" : ""
                          } ${checkActive(video.id) && "active"}`}
                        >
                          <Fragment>
                            <div className="box-title">
                              <div className="box-icons video-active">
                                <VideoSvg
                                  color={
                                    checkActive(video.id) ? "active" : "#575d68"
                                  }
                                />
                              </div>
                              <div className="title">
                                <div className="element">
                                  <video src={video.src} alt=".." />
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
                                    {video.title}
                                  </span>
                                  <span>{video.duration || "0:30"}</span>
                                </div>
                              </div>
                            </div>

                            <div
                              className="box-action"
                              onClick={() => {
                                addVideoToStage("", video);
                              }}
                            >
                              <div className="Title">
                                {!checkActive(video.id) ? (
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
                                      DeleteFn(video.id);
                                    }}
                                  >
                                    <i className="fa-solid fa-trash" />
                                  </div>
                                </BoxTooltipTitle>
                              </div>
                            </div>
                          </Fragment>
                        </li>
                      )}
                    </Draggable>
                  ))}
                {showCreate && (
                  <div className="box-add-video">
                    <div className="wrapper">
                      <label htmlFor="upload">
                        <input
                          type="file"
                          id="upload"
                          value={File}
                          className="d-none"
                          onChange={handleVideoUpload}
                        />
                        <div className="box-plus">
                          <span>+</span>
                        </div>
                        <div className="title">
                          <span>Add Video</span>
                        </div>
                      </label>
                    </div>
                  </div>
                )}
              </ul>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}

export default UploadVideos;
