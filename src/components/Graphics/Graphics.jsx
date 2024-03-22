import React, { useRef, useState } from "react";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import img1 from "../../assits/img-mobile.jpg";
import "./Graphic.scss";
import { ManageCover } from "../../store/theme";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Graphics() {
  const [open, setOpen] = React.useState(false);

  let { cover } = useSelector((state) => state.themeslice);

  const [uploadedVideo, setUploadedVideo] = useState([
    {
      name: "test",
      src: img1,
      id: 1,
    },
  ]);

  const dragVideo = useRef(0);
  const dragOverVideo = useRef(0);

  function handleSort() {
    const bannerVideo = [...uploadedVideo];
    const temp = bannerVideo[dragVideo.current];
    bannerVideo[dragVideo.current] = bannerVideo[dragOverVideo.current];
    bannerVideo[dragOverVideo.current] = temp;
    setUploadedVideo(bannerVideo);
  }

  let [active, setActive] = useState(null);
  let [File, setFile] = useState("");
  let dispatch = useDispatch();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    if (file && file.type.startsWith("image/")) {
      setFile(event.target.files[0]);
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedVideo((prev) => {
          return [
            ...prev,
            {
              id: uploadedVideo.length + 1,
              name: file.name,
              src: e.target.result, // Store image data URL
              // No need for duration as it's an image
            },
          ];
        });
      };
      reader.readAsDataURL(file);
      setFile("");
    } else {
      // Handle invalid file type
      alert("Please select a valid image file (JPEG, PNG, etc.)");
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
    const updatedList = reorder(uploadedVideo, source.index, destination.index);
    setUploadedVideo(updatedList);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className="wrapper-side">
        <div className="BoxVideo ">
          <div className="header">
            <text className="text-acco">Graphics</text>
            <BoxTooltipTitle
              bigWidth={true}
              backgroundColor={"rgba(27, 31, 41)"}
              title={
                <div className="toltip-title-line">
                  <span>
                    Upload short video clips (perfect for intros/outros).
                  </span>{" "}
                  <br /> <span>Recommended size: 1280 x 720.</span> <br />{" "}
                  <span>Max video length: 10 minutes.</span> <br />{" "}
                  <span>File type: mp4.</span> <br />
                </div>
              }
              placement="top"
            >
              <i className="fa-regular fa-circle-question ms-2 question" />
            </BoxTooltipTitle>
          </div>

          <Droppable droppableId="draggable">
            {(provided, snapshot) => (
              <ul
                className="list-unstyled mb-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {uploadedVideo &&
                  uploadedVideo.map((img, index) => (
                    <Draggable
                      key={img.id}
                      draggableId={img.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <li
                          key={index}
                          className="mb-2"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="wraper-box-video">
                            <div
                              className={`layer-video ${
                                active === img.id && "active"
                              }`}
                              onClick={() => {
                                setActive(active === img.id ? "" : img.id);
                                dispatch(
                                  ManageCover(
                                    active === img.id
                                      ? ""
                                      : { type: "img", src: img.src }
                                  )
                                );
                              }}
                            >
                              <div className={`box-video `}>
                                <div className={`add-toBox `}>
                                  {active !== img.id ? (
                                    <div className="showplus">
                                      <i className="fa-solid fa-circle-plus" />
                                      <span>Show</span>
                                    </div>
                                  ) : (
                                    <div className="showplus">
                                      <i className="fa-solid fa-circle-plus" />
                                      <span>Hide</span>
                                    </div>
                                  )}
                                </div>
                                <div className="liner"></div>
                                <img src={img.src} alt={img.name} />{" "}
                                {/* Display uploaded video */}
                                <div className="box-title">
                                  <p>{img.name}</p>
                                </div>
                                {/**  <i className="fa-solid fa-clapperboard viv" /> */}
                              </div>
                              <div className="edit">
                                <div
                                  className="box-icon-edit"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <TooltipBoxAction
                                    status={open}
                                    title={
                                      <ul className="box-action-toltip list-unstyled">
                                        <li className="">
                                          <i className="fa-solid fa-pen" />
                                          <span>Rename Graphic</span>
                                        </li>
                                        <li className="">
                                          <i className="fa-solid fa-trash" />
                                          <span>Delete Graphic</span>
                                        </li>
                                      </ul>
                                    }
                                  >
                                    <i className="fa-solid fa-ellipsis-vertical " />
                                  </TooltipBoxAction>
                                </div>
                              </div>
                            </div>
                          </div>
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
                          onChange={handleImageUpload}
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

export default Graphics;
