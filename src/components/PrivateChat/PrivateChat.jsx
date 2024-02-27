import React, { useState } from "react";
import "./PrivateChat.scss";

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
                <div>
                  <p>{e.title}</p>
                </div>
              </li>
            ) : (
              <li className="notmian" style={{ alignItems: "flex-start" }}>
                <p>
                  {e.username}
                  <span className="point">.</span>
                  <span>{e.time}</span>
                </p>
                <div>
                  <p>{e.title}</p>
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
