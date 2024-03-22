import React, { useRef, useState } from "react";
import "./Banners.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTicker, getTitle } from "../../store/theme";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import { Dialog } from "@mui/material";
import RenameBanner from "./Modal/RenameBanner";
import DeleteBanner from "./Modal/DeleteBanner";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { SecurityUpdateWarningSharp } from "@mui/icons-material";

function Banners() {
  let { title, ticker } = useSelector((state) => state.themeslice);
  let [showFolder, setShowFolder] = useState(false);
  let [boxCreate, setBoxCreate] = useState(true);
  let [AddTitleStage, setAddTitleStage] = useState(title ? title.index : "");
  let [AddTickerStage, setAddTickerStage] = useState(
    ticker ? title.ticker : ""
  );
  let [stateEdit, setStateEdit] = useState("");
  let [inp, setInp] = useState("");
  let [tickerValue, setTicker] = useState("");
  let [data, setData] = useState([
    { id: 1, title: "First Banner", ticker: false },
  ]);
  let dispatch = useDispatch();

  let handleAdd = (e, index, ticker, title) => {
    if (e === "edit") {
      setInp("");
      setTicker("");
      let Alldata = data;
      Alldata[index] = {
        ...Alldata[index],
        title: inp ? inp : title,
        ticker: tickerValue === "" ? ticker : tickerValue,
      };
      setStateEdit("");
      setData(Alldata);
    } else {
      setInp("");
      setTicker("");
      if (inp) {
        setData((prev) => [
          ...prev,
          { title: inp, ticker: tickerValue, id: data.length + 1 },
        ]);
      }
    }
  };

  let AddToStage = (e, type) => {
    if (type.type === "ticker") {
      dispatch(getTicker(e));
    } else {
      dispatch(getTitle(e));
    }
  };

  let DeleteFn = (ee) => {
    let DataAfterDetlet = data.filter((e, index) => index !== ee);
    setData(DataAfterDetlet);
  };

  let style1 = {
    background: "rgb(241, 242, 245)",
    color: "rgb(27, 31, 41)",
  };
  let style2 = {
    background: "rgba(20, 97, 225, 0.9)",
    color: "rgb(255, 255, 255)",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [manage, setManage] = useState("");

  let ManageModal = (e) => {
    setManage(e);
    if (e) {
      handleOpen();
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

    const updatedList = reorder(data, source.index, destination.index);
    setData(updatedList);
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
                      {(provided, snapshot) =>
                        stateEdit === value.id ? (
                          //Edit Banner
                          <div className="box-create  mb-2 mt-2">
                            <div className="box-add">
                              <input
                                type="text"
                                className="form-control"
                                autoFocus
                                placeholder="Enter a banner..."
                                defaultValue={value.title}
                                maxLength={200}
                                onChange={(e) => setInp(e.target.value)}
                              />
                              <p className="count">{inp.length}/200</p>
                              <div className="ticker">
                                <input
                                  id="ticker"
                                  type="checkbox"
                                  className="check-form"
                                  defaultChecked={value.ticker}
                                  onChange={(e) => setTicker(e.target.checked)}
                                />
                                <label htmlFor="ticker">
                                  Scroll across bottom (ticker)
                                </label>
                              </div>

                              <div className="box-btn">
                                <button
                                  className="btn add"
                                  onClick={(e) =>
                                    handleAdd(
                                      "edit",
                                      value.id,
                                      value.ticker,
                                      value.title
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
                                    setBoxCreate(true);
                                  }}
                                >
                                  <text>Cancle</text>
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <li
                            className={`${
                              AddTitleStage === value.id ||
                              AddTickerStage === value.id
                                ? "AddToStage"
                                : "notAdded"
                            } draggable-item ${
                              snapshot.isDragging ? "dragging" : ""
                            }`}
                            style={
                              AddTitleStage === value.id ||
                              AddTickerStage === value.id
                                ? style2
                                : style1
                            }
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
                                {value.ticker && (
                                  <div className="box-tiker">
                                    <i className="fa-solid fa-left-long" />
                                    <span>ticker</span>
                                    <i className="fa-solid fa-right-long" />
                                  </div>
                                )}
                              </div>
                            </div>

                            {AddTitleStage === value.id ||
                            AddTickerStage === value.id ? (
                              <div className="box-action-Hide">
                                <div
                                  className="title"
                                  onClick={(e) => {
                                    value.ticker
                                      ? setAddTickerStage("")
                                      : setAddTitleStage("");
                                    AddToStage("", {
                                      type: value.ticker ? "ticker" : "Title",
                                    });
                                  }}
                                >
                                  <text>Hide</text>
                                </div>
                              </div>
                            ) : (
                              <div className="box-action">
                                <div
                                  className="Title"
                                  onClick={(e) => {
                                    value.ticker
                                      ? setAddTickerStage(value.id)
                                      : setAddTitleStage(value.id);
                                    AddToStage(
                                      {
                                        title: value.title,
                                        index: value.id,
                                        ticker: value.ticker,
                                      },
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
                                        setStateEdit(value.id);
                                        setBoxCreate(true);
                                      }}
                                    >
                                      <i className="fa-solid fa-pen" />
                                    </div>
                                  </BoxTooltipTitle>
                                  <BoxTooltipTitle
                                    placement="top"
                                    title="Delete"
                                  >
                                    <div
                                      className="edit"
                                      onClick={(e) => DeleteFn(value.id)}
                                    >
                                      <i className="fa-solid fa-trash" />
                                    </div>
                                  </BoxTooltipTitle>
                                </div>
                              </div>
                            )}
                          </li>
                        )
                      }
                    </Draggable>
                  ))}
                {/*Box Create Banner */}
                {showCreate && (
                  <div className="box-create  mb-2">
                    {boxCreate ? (
                      <div
                        className="title-create"
                        onClick={(e) => {
                          setBoxCreate(false);
                        }}
                      >
                        <span className="plus">+</span>
                        <span>Create a banner</span>
                      </div>
                    ) : (
                      <div className="box-add">
                        <input
                          type="text"
                          className="form-control"
                          autoFocus
                          placeholder="Enter a banner..."
                          value={inp}
                          maxLength={200}
                          onChange={(e) => setInp(e.target.value)}
                        />
                        <p className="count">{inp.length}/200</p>
                        <div className="ticker">
                          <input
                            id="ticker"
                            type="checkbox"
                            checked={tickerValue}
                            className="check-form "
                            onChange={(e) => setTicker(e.target.checked)}
                          />
                          <label htmlFor="ticker">
                            Scroll across bottom (ticker)
                          </label>
                        </div>

                        <div className="box-btn">
                          <button
                            className="btn add"
                            onClick={(e) => handleAdd(e)}
                          >
                            <text> Add banner</text>
                          </button>
                          <button
                            className="btn cancle"
                            onClick={(e) => {
                              setBoxCreate(true);
                              setInp("");
                            }}
                          >
                            <text>Cancle</text>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </ul>
            )}
          </Droppable>
        </div>
      </div>
      <Dialog maxWidth="xs" fullWidth open={open} onClose={handleClose}>
        <div className="modal-box">
          {manage === "Rename" ? <RenameBanner /> : <DeleteBanner />}
        </div>
      </Dialog>
    </DragDropContext>
  );
}

export default Banners;
