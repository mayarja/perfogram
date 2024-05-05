import React, { useState } from "react";
import "./ViwerMobileCover.scss";
import img1 from "../../assits/img-mobile.jpg";
import { TooltipMobileAction } from "../ToolTipsFolder/ToolTips";
import { useSelector } from "react-redux";
function ViwerMobileCover() {
  let [inp, setInp] = useState();
  let [data, setData] = useState([
    { name: "mayar", message: "good morning guys 3", img: true },
  ]);

  const handleChange = () => {
    if (inp.trim() !== "") {
      setData([
        { name: "mayar", message: inp, img: true },
        ...data, // Spread existing messages to maintain order
      ]);
      setInp(""); // Clear input after sending
    }
  };

  let SendCommint = (e) => {
    e.preventDefault();
    if (inp.trim() !== "") {
      setData([
        { name: "mayar", message: inp, img: true },
        ...data, // Spread existing messages to maintain order
      ]);
      setInp(""); // Clear input after sending
    }
  };

  // let { ticker } = useSelector((state) => state.themeslice);
  let { ticker } = useSelector((state) => state.persistData.banners);
  return (
    <div className="viwer-mobile">
      <div className="box-gear-top">
        <div className="viwer-number">
          <i className="fa-solid fa-user" />
          <span>5</span>
        </div>
        <TooltipMobileAction
          classNeed={"HandelTool"}
          title={
            <ul className="box-mobile-toltip list-unstyled">
              <li>
                <i
                  className="fa-regular fa-user"
                  style={{ fontSize: "15px" }}
                />
                <span>User login</span>
              </li>
              <li>
                <i
                  className="fa-solid fa-video-slash"
                  style={{ fontSize: "15px" }}
                />
                <span>Enable audio only</span>
              </li>
              <li>
                <i className="fa-solid fa-share" style={{ fontSize: "15px" }} />
                <span>Share room</span>
              </li>
            </ul>
          }
        >
          <i className="fa-solid fa-gear"></i>
        </TooltipMobileAction>
      </div>
      {/**<div className="fading-overlay"></div> */}

      <div className="commints" style={{ bottom: ticker ? "54px" : "44px" }}>
        {data &&
          data.map((e, index) => {
            return (
              <div className="meesage-box" key={index}>
                <div className="img-box">
                  {e.img ? <img src={img1} alt="..." /> : <span>J</span>}
                </div>
                <div className="box-title">
                  <span className="name">{e.name}</span>
                  <span className="message">{e.message}</span>
                </div>
              </div>
            );
          })}
      </div>
      <form
        className="box-write-bottom"
        style={{ bottom: ticker ? "34px" : "15px" }}
        onSubmit={(e) => SendCommint(e)}
      >
        <button className="icon-send">
          <i
            className={`fa-solid fa-play   ${inp && "active"}`}
            onClick={(e) => handleChange(e)}
          />
        </button>
        <input
          type="text"
          placeholder="Add comment"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />

        <TooltipMobileAction
          classNeed={"HandelTool"}
          title={
            <ul className="box-mobile-toltip list-unstyled">
              <li>
                <i
                  className="fa-solid fa-microphone"
                  style={{ fontSize: "15px" }}
                />
                <span>Request mic</span>
              </li>
              <li>
                <i className="fa-solid fa-video" style={{ fontSize: "14px" }} />
                <span>Request cam</span>
              </li>
            </ul>
          }
        >
          <i className="fa-solid fa-hand" />
        </TooltipMobileAction>
        <i className="fa-solid fa-heart ms-1 me-2" />
      </form>
    </div>
  );
}

export default ViwerMobileCover;
