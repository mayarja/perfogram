import React, { Fragment, useRef, useState } from "react";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import img1 from "../../assits/img-mobile.jpg";
import "./Graphic.scss";
import { CloseSide } from "../../store/theme";
import {
  ManageAddGraphic,
  ManageDeleteGraphic,
  ManageReorderGraphic,
} from "../../store/graphicSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { randomPassword } from "../../RandomID";
import { addAllAction, deleteAllAction } from "../../store/allActionsSlice.js";
import { manageUsers } from "../../store/usersSlice.js";

function Graphics() {
  let { Users } = useSelector((state) => state.users);
  let { graphics } = useSelector((state) => state.persistData.graphics);
  console.log("graphics", graphics);
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
        let value = {
          type: "graphic",
          id: `${randomPassword(2)}`,
          title: file.name,
          src: e.target.result,
        };
        dispatch(ManageAddGraphic(value));
        dispatch(addAllAction(value));
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
    const updatedList = reorder(graphics, source.index, destination.index);
    // setUploadedVideo(updatedList);
    dispatch(ManageReorderGraphic(updatedList));
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const addImgToStage = (img) => {
    const videoIndex = Users.findIndex((ele) => ele.id === img.id);
    if (videoIndex !== -1) {
      console.log("opopop");
      // Video found, toggle inStage property
      let updateValue = Users.filter((ele) => ele.id !== img.id);
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
            id: img.id,
            name: img.name,
            type: "ImgList",
            main: true,
            src: img.src,
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
    dispatch(ManageDeleteGraphic(ee));
    dispatch(deleteAllAction(ee));
  };

  let checkActive = (id) => {
    const videoIndex = Users.findIndex((ele) => ele.id === id);
    console.log("asdasdadasdasd", videoIndex);
    return videoIndex !== -1 ? true : false;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className="wrapper-side all-action">
        <div className="Details  p-2">
          <div className="header">
            <text className="text-acco">Images</text>
            <BoxTooltipTitle
              bigWidth={true}
              backgroundColor={"rgba(27, 31, 41)"}
              title={
                <div className="toltip-title-line">
                  <span>Upload images</span> <br />{" "}
                  <span>File type: JPG, PNG</span> <br />{" "}
                  <span>Recommended dimensions: 1280 x 720 pixels</span> <br />{" "}
                  <span>Max size: 2 MB</span> <br />
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
                className="list-unstyled mb-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {graphics &&
                  graphics.map((img, index) => (
                    <Draggable
                      key={img.id}
                      draggableId={img.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <li
                          key={index}
                          className={`notAdded draggable-item ${
                            snapshot.isDragging ? "dragging" : ""
                          } ${checkActive(img.id) && "active"}`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Fragment>
                            <div className="box-title">
                              <div className="box-icons">
                                <i className="fa-solid fa-image" />
                              </div>
                              <div className="title">
                                <div className="element">
                                  <img
                                    src={
                                      typeof (
                                        img.element || img.src === "string"
                                      )
                                        ? img.src || img.element
                                        : URL.createObjectURL(
                                            img.src || img.element
                                          )
                                    }
                                    alt=".."
                                  />
                                </div>
                                <span>{img.title}</span>
                              </div>
                            </div>

                            <div
                              className="box-action"
                              onClick={() => {
                                setActive(active === img.id ? "" : img.id);
                                addImgToStage(img);
                              }}
                            >
                              <div className="Title">
                                {!checkActive(img.id) ? (
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
                                      DeleteFn(img.id);
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
                          onChange={handleImageUpload}
                        />
                        <div className="box-plus">
                          <span>+</span>
                        </div>
                        <div className="title">
                          <span>Add Image</span>
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
