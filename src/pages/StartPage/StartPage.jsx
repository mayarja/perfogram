import React, { useState } from "react";
import "./StartPage.scss";
// import img1 from "../../assits/logo-start.svg";
import img1 from "../../assits/Perfogram_Logo_TransparentBG.png";
import img2 from "../../assits/videoBack.mp4";
import { useDispatch } from "react-redux";
import { ManageControlStatus, MangeStart } from "../../store/theme";
function StartPage() {
  let dispatch = useDispatch();
  let [showInput, setShowInput] = useState(true);

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
    setTimeout(() => {
      dispatch(MangeStart(false));
    }, 50);
  };

  return (
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
            <h1>Let's check your camera and mic</h1>
            {/*box to show the camera and mic  */}
            <div className="box-show">
              <div className="box-img">
                <div className="wrpaer-img">
                  <video src={img2}></video>
                </div>
              </div>
              <div className="box-mic">
                <i className="fa-solid fa-microphone" />
                <div className="mic-sensitivity"></div>
                <label>Mic is working</label>
                <p>Default - Microphone (Realtek High Definition Audio)</p>
              </div>
            </div>

            {/*Action to control */}

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
            </div>
            {/*Form tO go to video call */}

            <form
              onSubmit={(e) => {
                GoToVideoCall(e);
              }}
            >
              {showInput && (
                <div className="content">
                  <div className="label-box">
                    <label htmlFor="name">Display name</label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoFocus
                    className="form-control"
                    required
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
  );
}

export default StartPage;
