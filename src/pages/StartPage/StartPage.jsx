import React, { Fragment, useEffect, useState } from "react";
import "./StartPage.scss";
import cam from "../../assits/camera-placeholder.jpg";
import img1 from "../../assits/Perfogram_Logo_TransparentBG.png";
import img2 from "../../assits/3-min.jpg";
import { useDispatch } from "react-redux";
import { ManageControlStatus, MangeStart } from "../../store/theme";
import { Dialog } from "@mui/material";
import SettingModal from "../../components/SettingBar/SettingModal/SettingModal";
import { randomPassword } from "../../RandomID";
import { HandleUpdateData } from "../../store/mySlice";
import { HandleAddNewUser } from "../../store/usersSlice";
function StartPage() {
  let dispatch = useDispatch();
  let [inp, setInput] = useState("");
  let [showInput, setShowInput] = useState(true);
  let [toggleMic, setToggleMic] = useState(true);
  let [toggleCam, setToggleCam] = useState(true);
  let GoToVideoCall = (e) => {
    e.preventDefault();
    // Attempt to close the keyboard using a combination of methods
    const inputElement = document.getElementById("name"); // Assuming the input field ID is "name"
    if (inputElement) {
      inputElement.blur(); // Try to remove focus (works in most browsers)
    }
    document.activeElement.blur(); // Fallback for elements without specific IDs

    setShowInput(false);
    dispatch(ManageControlStatus("Moderator"));
    let value = {
      id: randomPassword(2),
      name: inp,
      main: false,
      inStage: false,
      activeCam: toggleCam,
      activeMic: toggleMic,
      type: "img",
      src: img2,
    };
    dispatch(HandleAddNewUser(value));
    dispatch(HandleUpdateData(value));
    setTimeout(() => {
      dispatch(MangeStart(false));
    }, 50);
  };

  let [openBox, setOpenBox] = useState(false);

  return (
    <Fragment>
      <div className="page-start">
        <div className="wraper">
          <div className="header-box">
            <div className="header-wraper">
              <div className="box-logo">
                <div className="container-img">
                  <a href="/">
                    <img src={img1} alt="..." />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box-start">
            <div className="wraper-start">
              {/* <h1>Let's check your camera and mic</h1>
            box to show the camera and mic  */}
              <div className="box-show">
                <div className="box-img">
                  {toggleCam ? (
                    <div className="wrpaer-img">
                      <img src={cam} alt="..."></img>
                    </div>
                  ) : (
                    <div className="box-avatar">
                      <div className="wraper-avatar">
                        <svg
                          focusable={false}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#4F5461"
                          className="styled__StyledAccountCircle-sc-a7234v-4 dBFZjM"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="box-action">
                    <div className="box-micStatus">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width={"20px"}
                        height={"20px"}
                        viewBox="0 0 122.88 95.13"
                        space="preserve"
                      >
                        <g>
                          <path
                            fill="#56db4e"
                            d="M100.95,23.32c0-2.09,1.69-3.78,3.78-3.78c2.09,0,3.78,1.69,3.78,3.78v48.5c0,2.09-1.69,3.78-3.78,3.78 c-2.09,0-3.78-1.69-3.78-3.78V23.32L100.95,23.32z M0,31.82c0-2.09,1.69-3.78,3.78-3.78c2.09,0,3.78,1.69,3.78,3.78v31.49 c0,2.09-1.69,3.78-3.78,3.78C1.69,67.09,0,65.4,0,63.31V31.82L0,31.82z M14.42,23.32c0-2.09,1.69-3.78,3.78-3.78 c2.09,0,3.78,1.69,3.78,3.78v48.5c0,2.09-1.69,3.78-3.78,3.78c-2.09,0-3.78-1.69-3.78-3.78V23.32L14.42,23.32z M28.9,13.9 c0-2.08,1.67-3.76,3.72-3.76c2.06,0,3.72,1.68,3.72,3.76v67.34c0,2.08-1.67,3.76-3.72,3.76c-2.06,0-3.72-1.68-3.72-3.76V13.9 L28.9,13.9z M43.26,3.78c0-2.09,1.69-3.78,3.78-3.78c2.09,0,3.78,1.69,3.78,3.78v87.57c0,2.09-1.69,3.78-3.78,3.78 c-2.09,0-3.78-1.69-3.78-3.78V3.78L43.26,3.78z M86.53,31.82c0-2.09,1.69-3.78,3.78-3.78c2.09,0,3.78,1.69,3.78,3.78v31.49 c0,2.09-1.69,3.78-3.78,3.78c-2.09,0-3.78-1.69-3.78-3.78V31.82L86.53,31.82z M72.11,23.32c0-2.09,1.69-3.78,3.78-3.78 c2.09,0,3.78,1.69,3.78,3.78v48.5c0,2.09-1.69,3.78-3.78,3.78c-2.09,0-3.78-1.69-3.78-3.78V23.32L72.11,23.32z M57.74,13.9 c0-2.08,1.67-3.76,3.72-3.76c2.06,0,3.72,1.68,3.72,3.76v67.34c0,2.08-1.67,3.76-3.72,3.76c-2.06,0-3.72-1.68-3.72-3.76V13.9 L57.74,13.9z M115.43,13.9c0-2.08,1.67-3.76,3.72-3.76c2.06,0,3.72,1.68,3.72,3.76v67.34c0,2.08-1.67,3.76-3.72,3.76 c-2.06,0-3.72-1.68-3.72-3.76V13.9L115.43,13.9z"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="box-micCam">
                      <div
                        className="box-mic"
                        onClick={() => setToggleMic(!toggleMic)}
                      >
                        {toggleMic ? (
                          <i className="fa-solid fa-microphone" />
                        ) : (
                          <i className="fa-solid fa-microphone-slash" />
                        )}
                      </div>
                      <div
                        className="box-cam"
                        onClick={() => setToggleCam(!toggleCam)}
                      >
                        {toggleCam ? (
                          <i className="fa-solid fa-video" />
                        ) : (
                          <i className="fa-solid fa-video-slash"></i>
                        )}
                      </div>
                    </div>
                    <div className="box-gear" onClick={() => setOpenBox(true)}>
                      <i className="fa-solid fa-gear" />
                    </div>
                  </div>
                </div>
              </div>

              {/*Action to control */}
              {/*
            <div className="box-action">
              <div className="wraper-action">
                <div className="box-icon">
                  <div className="wraper-icon">
                    <i className="fa-solid fa-microphone" />
                  </div>
                  <span>Mute</span>
                </div>

                <div className="box-icon">
                  <div className="wraper-icon">
                    <i className="fa-solid fa-video" />
                  </div>
                  <span>Stop cam</span>
                </div>

                <div className="box-icon">
                  <div className="wraper-icon">
                    <i className="fa-solid fa-gear" />
                  </div>
                  <span>Settings</span>
                </div>
              </div>
            </div>}
            {/*Form tO go to video call */}

              <form
                onSubmit={(e) => {
                  GoToVideoCall(e);
                }}
              >
                <input
                  style={{ display: "none" }}
                  autocomplete="cc-exp-month"
                />
                <input style={{ display: "none" }} autocomplete="cc-exp-year" />
                {showInput && (
                  <div className="content">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e) => setInput(e.target.value)}
                      autoFocus
                      className="form-control"
                      placeholder="Your Name"
                      required
                      autocomplete="off"
                    />
                  </div>
                )}
                <button>
                  <span>Enter studio</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        maxWidth="md"
        fullWidth
        fullScreen={false}
        open={openBox}
        style={{ maxWidth: "700px", margin: "auto" }}
        onClose={(e) => {
          setOpenBox(false);
        }}
      >
        <div className="modal-box">
          {<SettingModal setOpenBox={setOpenBox} />}
        </div>
      </Dialog>
    </Fragment>
  );
}

export default StartPage;
