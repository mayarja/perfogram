import React, { useRef, useState } from "react";
import "./Banners.scss";
import { useDispatch, useSelector } from "react-redux";
import { CloseSide } from "../../store/theme";
import {
  ManageAddBanner,
  ManageDeleteBanner,
  ManageEditBanner,
  ManageReorderBanner,
  getTicker,
  getTitleBanner,
} from "../../store/bannersSlice";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
import { Dialog } from "@mui/material";
import RenameBanner from "./Modal/RenameBanner";
import DeleteBanner from "./Modal/DeleteBanner";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { randomPassword } from "../../RandomID";
import BannerSvg from "../Svgs/BannerSvg";
import Switch from "react-switch";
import {
  addAllAction,
  deleteAllAction,
  editAllAction,
} from "../../store/allActionsSlice";

function Banners() {
  // let { title, ticker, banners } = useSelector((state) => state.themeslice);
  let { title, ticker, banners } = useSelector(
    (state) => state.persistData.banners
  );

  let [boxCreate, setBoxCreate] = useState(true);
  let [AddTitleStage, setAddTitleStage] = useState(title ? title.index : "");
  let [AddTickerStage, setAddTickerStage] = useState(
    ticker ? title.ticker : ""
  );
  let [stateEdit, setStateEdit] = useState("");
  let [inp, setInp] = useState("");
  let [url, setURL] = useState("");
  let [tickerValue, setTicker] = useState("");
  let [interactive, setInteractive] = useState("");
  let [leftToRight, setLeftToRight] = useState(false);
  let [shoppable, setShoppable] = useState(false);
  let dispatch = useDispatch();
  let CreateOrEditBanner = (
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
    if (e === "edit") {
      setInp("");
      setTicker("");
      setInteractive("");
      setLeftToRight("");
      setShoppable("");
      setStateEdit("");
      const values = {
        title: inp ? inp : title,
        ticker: tickerValue === "" ? ticker : tickerValue,
        url: url ? url : urlValue,
        interactive: interactive === "" ? interactiveVal : interactive,
        leftToRight: leftToRight === "" ? leftToRightVal : leftToRight,
        shoppable: shoppable === "" ? shoppableValue : shoppable,
      }; // Create values object
      dispatch(ManageEditBanner({ id, values })); // Dispatch action with id and values
      dispatch(editAllAction({ id, values })); // Dispatch action with id and values
    } else {
      setInp("");
      setTicker("");
      setInteractive("");
      setLeftToRight("");
      setShoppable("");
      if (inp) {
        let value = {
          id: randomPassword(2),
          title: inp,
          ticker: tickerValue,
          url: url,
          interactive: interactive,
          leftToRight: leftToRight,
          shoppable: shoppable,
          type: "banner",
        };
        dispatch(ManageAddBanner(value));
        dispatch(addAllAction(value));
      }
    }
  };

  let AddToStage = (e, type) => {
    if (type.type === "ticker") {
      dispatch(getTicker(e));
    } else {
      dispatch(getTitleBanner(e));
    }
  };

  let DeleteFn = (ee) => {
    dispatch(ManageDeleteBanner(ee));
    dispatch(deleteAllAction(ee));
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

    const updatedList = reorder(banners, source.index, destination.index);
    // setData(updatedList);
    dispatch(ManageReorderBanner(updatedList));
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  let checkActive = (ee) => {
    if (ee === ticker.index || ee === title.index || ee === ticker.id) {
      return true;
    } else {
      return false;
    }
  };

  let handleEditClick = (value) => {
    setStateEdit(value.id);
    setTicker(value.ticker);
    setURL(value.url);
    setInteractive(value.interactive);
    setLeftToRight(value.leftToRight);
    setShoppable(value.shoppable);
    setBoxCreate(true);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className="wrapper-side all-action">
        <div className=" Details p-2">
          <div className="header">
            <text className="text-acco">Banners</text>
            <BoxTooltipTitle
              backgroundColor={"rgba(27, 31, 41)"}
              title="Add banners and tickers for a professional outlook"
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
                {banners &&
                  banners.map((value, index) => (
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
                                    CreateOrEditBanner(
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
                              checkActive(value.id) ? "AddToStage" : "notAdded"
                            } draggable-item ${
                              snapshot.isDragging ? "dragging" : ""
                            } ${checkActive(value.id) && "active"}`}
                            style={`${checkActive(value.id) && "active"}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="main-icon">
                              <BannerSvg
                                color={
                                  checkActive(value.id)
                                    ? "#fff"
                                    : "rgb(79, 84, 97)"
                                }
                                current={checkActive(value.id) ? true : false}
                              />
                            </div>
                            <div className="box-title">
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
                              {checkActive(value.id) ? (
                                <div className="Title">
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
                                <div className="Title">
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
                                          url: value.url,
                                          interactive: value.interactive,
                                          leftToRight: value.leftToRight,
                                          shoppable: value.shoppable,
                                        },
                                        {
                                          type: value.ticker
                                            ? "ticker"
                                            : "Title",
                                        }
                                      );
                                    }}
                                  >
                                    <i className="fa-solid fa-circle-plus" />
                                    <text>Show</text>
                                  </div>

                                  <div className="icon-edit">
                                    <BoxTooltipTitle
                                      placement="top"
                                      title="Edit"
                                    >
                                      <div
                                        className="edit"
                                        style={{
                                          margin: "0",
                                          marginRight: "-5px",
                                        }}
                                        onClick={(e) => {
                                          handleEditClick(value);
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
                            </div>
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
                        className="box-add-video"
                        onClick={(e) => {
                          setBoxCreate(false);
                          setStateEdit("");
                          setTicker("");
                          setInteractive("");
                          setLeftToRight("");
                          setShoppable("");
                          setURL("");
                        }}
                      >
                        <div className="wrapper">
                          <label htmlFor="upload">
                            <div className="box-plus">
                              <span>+</span>
                            </div>
                            <div className="title">
                              <span>Add banner</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    ) : (
                      <div className="box-add">
                        <input
                          type="text"
                          className="form-control input"
                          autoFocus
                          placeholder="Enter a banner..."
                          value={inp}
                          maxLength={200}
                          onChange={(e) => setInp(e.target.value)}
                        />
                        <p className="count">{inp.length}/200</p>
                        {/* <input
                            id="ticker"
                            type="checkbox"
                            checked={tickerValue}
                            className="check-form "
                            onChange={(e) => setTicker(e.target.checked)}
                          />
                          <label htmlFor="ticker">
                            Scroll across bottom (ticker)
                          </label> */}
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
                                autoFocus
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
                            onClick={(e) => {
                              setBoxCreate(true);
                              CreateOrEditBanner(e);
                            }}
                          >
                            <text> Add banner</text>
                          </button>
                          <button
                            className="btn cancle"
                            onClick={(e) => {
                              setBoxCreate(true);
                              setInp("");
                              // setTicker("");
                              // setInteractive("");
                              // setLeftToRight("");
                              // setShoppable("");
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
