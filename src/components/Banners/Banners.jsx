import React, { useState } from "react";
import "./Banners.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTicker, getTitle } from "../../store/theme";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import ManageModal from "../ModalsFolder/ManageModal";
import { Dialog } from "@mui/material";
import RenameBanner from "./Modal/RenameBanner";
import DeleteBanner from "./Modal/DeleteBanner";

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
  let [data, setDate] = useState([{ title: "First Banner", ticker: false }]);
  let dispatch = useDispatch();

  let handleAdd = (e, index, ticker, title) => {
    if (e === "edit") {
      setInp("");
      setTicker("");
      let Alldata = data;
      Alldata[index] = {
        title: inp ? inp : title,
        ticker: tickerValue === "" ? ticker : tickerValue,
      };
      setStateEdit("");
      setDate(Alldata);
    } else {
      setInp("");
      setTicker("");
      if (inp) {
        setDate((prev) => [...prev, { title: inp, ticker: tickerValue }]);
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
    console.log("DataAfterDetlet=>", DataAfterDetlet);
    setDate(DataAfterDetlet);
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

  console.log("AddTickerStage==>", AddTickerStage);
  console.log("ticker==>", ticker);
  return (
    <div className="wrapper-side">
      {showFolder ? (
        //folder Before Create A Banner
        <div className="wrapper-side">
          <div className="header-Banner">
            <span>Folders</span>
            <BoxTooltipTitle placement="top" title="Create folder">
              <i className="fa-solid fa-folder-plus" />
            </BoxTooltipTitle>
          </div>
          <ul className="list-unstyled">
            <li>
              <div
                className="box-tofix"
                style={{ border: "none" }}
                onClick={(e) => setShowFolder(false)}
              >
                <div className="edit">
                  <i className="fa-solid fa-grip-vertical" />
                </div>
                <i className="fa-solid fa-folder folder" />
                <div className="box-title">
                  <div className="title">
                    <h6>Example Banners</h6>
                    <p>0 Banners</p>
                  </div>
                </div>
              </div>

              {/*Action For Folder*/}
              <TooltipBoxAction
                title={
                  <ul className="box-action-toltip list-unstyled">
                    <li
                      className=""
                      onClick={(e) => {
                        ManageModal("Rename");
                      }}
                    >
                      <i className="fa-solid fa-pen" />
                      <span>Rename folder</span>
                    </li>
                    <li className="">
                      <i className="fa-solid fa-copy" />
                      <span>Duplicate folder</span>
                    </li>
                    <li
                      className=""
                      onClick={(e) => {
                        ManageModal("Delete");
                      }}
                    >
                      <i className="fa-solid fa-trash" />
                      <span>Delete folder</span>
                    </li>
                  </ul>
                }
                status={open}
              >
                <i className="fa-solid fa-ellipsis-vertical pints" />
              </TooltipBoxAction>
            </li>
          </ul>
        </div>
      ) : (
        //All  Banners
        <div className="wrapper-side Details">
          <div className="header-Details">
            <div className="box-back" onClick={(e) => setShowFolder(true)}>
              <i className="fa-solid fa-angle-left" />
              <span>Example Banners</span>
            </div>
            <TooltipBoxAction
              status={open}
              title={
                <ul className="box-action-toltip list-unstyled">
                  <li
                    className=""
                    onClick={(e) => {
                      ManageModal("Rename");
                    }}
                  >
                    <i className="fa-solid fa-pen" />
                    <span>Rename folder</span>
                  </li>
                  <li
                    className=""
                    onClick={(e) => {
                      ManageModal("Delete");
                    }}
                  >
                    <i className="fa-solid fa-trash" />
                    <span>Delete folder</span>
                  </li>
                </ul>
              }
            >
              <i className="fa-solid fa-ellipsis-vertical edit" />
            </TooltipBoxAction>
          </div>
          <ul className="list-unstyled">
            {data &&
              data.map((value, index) => {
                return stateEdit === index ? (
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
                            handleAdd("edit", index, value.ticker, value.title)
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
                  // Banner Content
                  <li
                    key={index}
                    className={
                      AddTitleStage === index || AddTickerStage === index
                        ? "AddToStage"
                        : ""
                    }
                    style={
                      AddTitleStage === index || AddTickerStage === index
                        ? style2
                        : style1
                    }
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

                    {AddTitleStage === index || AddTickerStage === index ? (
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
                              ? setAddTickerStage(index)
                              : setAddTitleStage(index);
                            AddToStage(
                              {
                                title: value.title,
                                index: index,
                                ticker: value.ticker,
                              },
                              { type: value.ticker ? "ticker" : "Title" }
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
                              onClick={(e) => {
                                setStateEdit(index);
                                setBoxCreate(true);
                              }}
                            >
                              <i className="fa-solid fa-pen" />
                            </div>
                          </BoxTooltipTitle>
                          <BoxTooltipTitle placement="top" title="Delete">
                            <div
                              className="edit"
                              onClick={(e) => DeleteFn(index)}
                            >
                              <i className="fa-solid fa-trash" />
                            </div>
                          </BoxTooltipTitle>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            {/*Box Create Banner */}
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
                    <button className="btn add" onClick={(e) => handleAdd(e)}>
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
          </ul>
        </div>
      )}

      <Dialog maxWidth="xs" fullWidth open={open} onClose={handleClose}>
        <div className="modal-box">
          {manage === "Rename" ? <RenameBanner /> : <DeleteBanner />}
        </div>
      </Dialog>
    </div>
  );
}

export default Banners;
