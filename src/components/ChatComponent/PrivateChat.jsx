import React, { useState } from "react";
import "./PrivateChat.scss";
import { TooltipBoxAction } from "../ToolTipsFolder/ToolTips";

function PrivateChat() {
  let [data, setDate] = useState([
    {
      title: "test From Main",
      main: true,
      username: "mayar",
      time: "07:16 PM",
    },
    {
      title: "test From guest",
      main: false,
      username: "guest",
      time: "07:16 PM",
    },
    {
      title: "test From guest two",
      main: false,
      username: "guest",
      time: "07:16 PM",
    },
    {
      title: "test From Main two",
      main: true,
      username: "mayar",
      time: "07:16 PM",
    },
  ]);
  let [inp, setInp] = useState("");

  let AddDate = (e) => {
    if (inp) {
      setDate((prev) => {
        return [...prev, { title: inp, main: true }];
      });
      setInp("");
    }
  };

  return (
    <div className="privateChat">
      <ul className="list-unstyled">
        {data &&
          data.map((e) => {
            return e.main ? (
              <li className="main" style={{ alignItems: "flex-end" }}>
                <p>
                  {e.username}
                  <span style={{ marginLeft: "5px" }}>{e.time}</span>
                </p>
                <div className="box-title">
                  <div className="title">
                    <p>{e.title}</p>
                  </div>
                  <TooltipBoxAction
                    status={false}
                    title={
                      <ul className="box-action-toltip list-unstyled">
                        <li className="">
                          <i
                            className="fa-solid fa-minus"
                            style={{
                              marginRight: "-3px",
                              marginTop: "10px",
                              fontSize: "14px",
                            }}
                          />
                          <span>Create banner</span>
                        </li>
                        <li className="">
                          <i
                            className="fa-solid fa-minus"
                            style={{
                              marginRight: "-3px",
                              marginTop: "10px",
                              fontSize: "14px",
                            }}
                          />
                          <span>Create & Run banner</span>
                        </li>
                        <hr />
                        <li className="">
                          <i
                            className="fa-solid fa-comment-slash"
                            style={{ marginRight: "1px", fontSize: "14px" }}
                          />
                          <span>Send a private messsage</span>
                        </li>
                        <li className="">
                          <i
                            className="fa-solid fa-comment-slash"
                            style={{ marginRight: "1px", fontSize: "14px" }}
                          />
                          <span>Delete messsage</span>
                        </li>
                      </ul>
                    }
                  >
                    <i className="fa-solid fa-ellipsis-vertical edit" />
                  </TooltipBoxAction>
                </div>
              </li>
            ) : (
              <li className="notmian" style={{ alignItems: "flex-start" }}>
                <p>
                  {e.username}
                  <span style={{ marginLeft: "5px" }}>{e.time}</span>
                </p>
                <div className="box-title">
                  <div className="title">
                    <p>{e.title}</p>
                  </div>
                  <TooltipBoxAction
                    status={false}
                    title={
                      <ul className="box-action-toltip list-unstyled">
                        <li className="">
                          <i
                            className="fa-solid fa-minus"
                            style={{
                              marginRight: "-3px",
                              marginTop: "10px",
                              fontSize: "14px",
                            }}
                          />
                          <span>Create banner</span>
                        </li>
                        <li className="">
                          <i
                            className="fa-solid fa-minus"
                            style={{
                              marginRight: "-3px",
                              marginTop: "10px",
                              fontSize: "14px",
                            }}
                          />
                          <span>Create & Run banner</span>
                        </li>
                        <hr />
                        <li className="">
                          <i
                            className="fa-solid fa-comment-slash"
                            style={{ marginRight: "1px", fontSize: "14px" }}
                          />
                          <span>Send a private messsage</span>
                        </li>
                        <li className="">
                          <i
                            className="fa-solid fa-comment-slash"
                            style={{ marginRight: "1px", fontSize: "14px" }}
                          />
                          <span>Delete messsage</span>
                        </li>
                      </ul>
                    }
                  >
                    <i className="fa-solid fa-ellipsis-vertical edit" />
                  </TooltipBoxAction>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="BoxSend">
        <div className="send">
          <div className="left-form">
            <div>
              <input
                type="textarea"
                value={inp}
                maxLength={500}
                onChange={(e) => setInp(e.target.value)}
                className="form-control"
                placeholder="Chat with everyone in the studio"
              ></input>
            </div>
          </div>
          <div className="icon-send">
            <div
              className={`box-icon  ${inp && "box-iconACtive"}`}
              onClick={(e) => AddDate(e)}
            >
              <i className={`fa-solid fa-play ${inp && "active"}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateChat;
