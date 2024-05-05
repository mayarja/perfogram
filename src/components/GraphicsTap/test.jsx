import React, { useEffect, useRef, useState } from "react";
import "./PollsTap.scss";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
import {
  DeletePoll,
  ManageShowBoxCreatePoll,
  ManageShowSelect,
  ShowBoxEditCreateQP,
} from "../../store/theme";

function PollsTap() {
  let { polls } = useSelector((state) => state.themeslice);

  let [data, setData] = useState(polls);
  useEffect(() => {
    setData(polls);
  }, [polls]);
  let dispatch = useDispatch();

  let DeleteFn = (ee) => {
    dispatch(DeletePoll(ee));
  };

  const handleShowPall = (e) => {
    dispatch(ManageShowSelect({ value: e, type: "poll" }));
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

  let HandleAddPall = () => {
    dispatch(ShowBoxEditCreateQP({ true: true, show: "poll" }));
  };

  let HandleEditPoll = (e) => {
    dispatch(ShowBoxEditCreateQP({ value: e, type: "edit", show: "poll" }));
  };

  console.log("Hello World pollspollspolls ", polls);

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className="wrapper-side">
        <div className="wrapper-side Details">
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
                          }`}
                          // style={AddTitleStage === value.id ? style2 : style1}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="edit">
                            <i className="fa-solid fa-grip-vertical" />
                          </div>
                          <div className="box-title">
                            <div className="title">
                              <span>{value.title}</span>
                            </div>
                          </div>

                          <div className="box-action">
                            <div
                              className="Title"
                              onClick={(e) => {
                                handleShowPall(value);
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
                                    HandleEditPoll(value);
                                  }}
                                >
                                  <i className="fa-solid fa-pen" />
                                </div>
                              </BoxTooltipTitle>
                              <BoxTooltipTitle placement="top" title="Delete">
                                <div
                                  className="edit"
                                  onClick={(e) => DeleteFn(value.id)}
                                >
                                  <i className="fa-solid fa-trash" />
                                </div>
                              </BoxTooltipTitle>
                            </div>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))}

                <div className="box-create  mb-2">
                  <div
                    className="title-create"
                    onClick={(e) => {
                      HandleAddPall();
                    }}
                  >
                    <span className="plus">+</span>
                    <span>Create a poll</span>
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

export default PollsTap;
