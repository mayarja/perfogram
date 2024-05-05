import React, { Fragment, useEffect, useRef, useState } from "react";
import "./QuestionTap.scss";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { CloseSide } from "../../store/theme";
import {
  DeleteQusetion,
  ShowBoxEditCreateQues,
  ManageShowSelectQuestion,
} from "../../store/questionSlice.js";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
import { deleteAllAction } from "../../store/allActionsSlice.js";

function QuestionTap() {
  // let { questions, currentSelected } = useSelector((state) => state.themeslice);
  let { questions, currentSelected } = useSelector(
    (state) => state.persistData.questions
  );

  console.log("questions", questions);
  let [data, setData] = useState(questions);
  useEffect(() => {
    setData(questions);
  }, [questions]);
  let dispatch = useDispatch();

  let DeleteFn = (ee) => {
    dispatch(DeleteQusetion(ee));
    dispatch(deleteAllAction(ee));
    dispatch(ShowBoxEditCreateQues(false));
  };

  const handleQuestion = (e) => {
    dispatch(ManageShowSelectQuestion({ value: e, type: "question" }));
  };

  let onDragStart = (e) => {};

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
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  let HandleAddQuestion = () => {
    dispatch(ShowBoxEditCreateQues({ true: true, show: "question" }));
  };

  let HandleEditQuestion = (e) => {
    dispatch(
      ShowBoxEditCreateQues({ value: e, type: "edit", show: "question" })
    );
  };

  console.log("Hello World", data);

  let checkActive = (id) => {
    console.log("currentSelected", currentSelected, id);
    if (currentSelected?.type === "question") {
      return currentSelected.value.id === id ? true : false;
    } else {
      return false;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className="wrapper-side all-action">
        <div className="Details p-2">
          <div className="header">
            <text className="text-acco">Questions</text>
            <BoxTooltipTitle
              backgroundColor={"rgba(27, 31, 41)"}
              title="Gamify your shows with interactive questions"
              placement="top"
            >
              <i className="fa-regular fa-circle-question ms-2 question" />
            </BoxTooltipTitle>
            <div className="close" onClick={() => dispatch(CloseSide(false))}>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>

          {/**List Of Banners  Banners */}
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
                      {(provided, snapshot) => (
                        <li
                          className={`notAdded draggable-item ${
                            snapshot.isDragging ? "dragging" : ""
                          } ${checkActive(value.id) && "active"}`}
                          // style={AddTitleStage === value.id ? style2 : style1}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Fragment>
                            <div className="box-title">
                              <div className="box-icons">
                                <div
                                  className="d-flex "
                                  style={{ gap: "5.5px" }}
                                >
                                  <span style={{ fontSize: "1rem" }}>
                                    {value.point ? value.point : "-"}
                                  </span>{" "}
                                  <i
                                    style={{
                                      fontSize: "1rem",
                                      width: "3px",
                                      paddingTop: "1px",
                                    }}
                                    className="fa-solid fa-coins"
                                  ></i>
                                </div>
                                <div
                                  className="d-flex "
                                  style={{ gap: "5.5px" }}
                                >
                                  <span style={{ fontSize: "1rem" }}>
                                    {value.duration}
                                  </span>{" "}
                                  <i
                                    style={{
                                      fontSize: "1rem",
                                      width: "3px",
                                      paddingTop: "1px",
                                    }}
                                    className="fa-regular fa-clock"
                                  ></i>
                                </div>
                              </div>
                              <div className="title">
                                {value.element && (
                                  <div className="element">
                                    <img
                                      // typeof  === "string" ||
                                      // typeof value.src === "string" ||
                                      // typeof value.element.path === "string"
                                      src={
                                        value.element instanceof File
                                          ? URL.createObjectURL(
                                              value.src || value.element
                                            )
                                          : value.src ||
                                            value.element ||
                                            value.element.path
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
                                handleQuestion(value);
                              }}
                            >
                              <div className="Title">
                                {!checkActive(value.id) ? (
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
                                      DeleteFn(value.id);
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

                <div className="box-create  mb-2">
                  <div
                    className="box-add-video"
                    onClick={(e) => {
                      HandleAddQuestion();
                    }}
                  >
                    <div className="wrapper">
                      <label htmlFor="upload">
                        <div className="box-plus">
                          <span>+</span>
                        </div>
                        <div className="title">
                          <span>Add question</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </ul>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}

export default QuestionTap;
