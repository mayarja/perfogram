import React, { useState } from "react";
import "./PrivateChat.scss";
import { TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import { useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import useClickOutside from "../../useClickOutside";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/chatSlice";
import { formatTime } from "../../formatTime";

function PrivateChat() {
  let { data } = useSelector((state) => state.persistData.chatMeesages);

  // let [data, setDate] = useState([
  //   {
  //     title: "test From Main",
  //     main: true,
  //     username: "mayar",
  //     time: "07:16 PM",
  //   },
  //   {
  //     title: "test From guest",
  //     main: false,
  //     username: "guest",
  //     time: "07:16 PM",
  //   },
  //   {
  //     title: "test From guest two",
  //     main: false,
  //     username: "guest",
  //     time: "07:16 PM",
  //   },
  //   {
  //     title: "test From Main two",
  //     main: true,
  //     username: "mayar",
  //     time: "07:16 PM",
  //   },
  // ]);
  let [inp, setInp] = useState("");

  let dispatch = useDispatch();
  let AddDate = (e) => {
    if (inp) {
      const currentTimestamp = new Date().getTime(); // Get current timestamp in milliseconds
      const formattedTime = formatTime(currentTimestamp);
      dispatch(
        addMessage({
          title: inp,
          main: true,
          username: "mayar",
          time: formattedTime,
        })
      );
      setInp("");
    }
  };

  let { status } = useSelector((state) => state.themeslice);

  let [toggleEmo, setToggleEmo] = useState(false);
  let domNode = useClickOutside(() => {
    setToggleEmo(false);
  });

  const handleEmojiClick = (emoji) => {
    setInp((prev) => prev + emoji.emoji); // Update input value with selected emoji
    // setToggleEmo(false); // Hide emoji picker after selection
  };

  return (
    <div className="privateChat">
      <ul className="list-unstyled">
        {data &&
          data.map((e, index) => {
            return e.main ? (
              <li
                key={index}
                className="main"
                style={{ alignItems: "flex-end" }}
              >
                <p>
                  {e.username}
                  <span style={{ marginLeft: "5px" }}>{e.time}</span>
                </p>
                <div className="box-title">
                  <div className="title">
                    <p>{e.title}</p>
                  </div>
                  {status === "Moderator" && (
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
                  )}
                </div>
              </li>
            ) : (
              <li
                key={index}
                className="notmian"
                style={{ alignItems: "flex-start" }}
              >
                <div> </div>
                <p>
                  {e.username}
                  <span style={{ marginLeft: "5px" }}>{e.time}</span>
                </p>
                <div className="box-title">
                  <div className="title">
                    <p>{e.title}</p>
                  </div>
                  {status === "Moderator" && (
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
                  )}
                </div>
              </li>
            );
          })}
      </ul>
      <div className="BoxSend" ref={domNode}>
        {toggleEmo && (
          <div style={{ position: "absolute", bottom: "66px" }}>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
        <div className="send">
          <div className="left-form">
            <div className=" emoji" onClick={() => setToggleEmo(!toggleEmo)}>
              <i class="fa-regular fa-face-smile"></i>
            </div>
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
          <div className="icon-send" onClick={() => setToggleEmo(false)}>
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
