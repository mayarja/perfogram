import React, { useState } from "react";
import "./Navbar.scss";
import imgfacebook from "../../assits/facebook.png";
import imginsta from "../../assits//instagram.png";
import imgtiktok from "../../assits/tiktok.png";
import imgyoutube from "../../assits/youtube.png";
import img2 from "../../assits/Perfogram_Logo_TransparentBG.png";
import useClickOutside from "../../useClickOutside";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
function Navbar() {
  let [toggle, setToggle] = useState(false);
  let [value, setValue] = useState({ title: "Go Live", value: "Live", id: 1 });
  let listOfValue = [
    { title: "Go Live", value: "Live", id: 1 },
    { title: "Start Recording", value: "Recording", id: 2 },
  ];

  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  let streamList = [
    { value: "FaceBookStream", img: imgfacebook },
    { value: "InstaStream", img: imginsta },
    { value: "YouTubeStream", img: imgyoutube },
    { value: "TiktokStream", img: imgtiktok },
    { value: "FaceBookStream", img: imgfacebook },
    { value: "InstaStream", img: imginsta },
    { value: "YouTubeStream", img: imgyoutube },
  ];

  return (
    <div className="mian-nav d-none d-sm-block">
      <div className="header-inner">
        <div className="img-list">
          <div className="img-box">
            <img src={img2} alt="..." />
          </div>
          <div className="list-icons">
            <div className="list-icons-two">
              {streamList &&
                streamList.map((e, index) => {
                  return (
                    <div key={index}>
                      <BoxTooltipTitle
                        backgroundColor={"rgba(27, 31, 41)"}
                        title={e.value}
                        placement="bottom"
                      >
                        <div className="img-icons">
                          <img src={e.img} alt="..." />
                        </div>
                      </BoxTooltipTitle>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="details">
          <div className="title">
            <BoxTooltipTitle
              backgroundColor={"rgba(27, 31, 41)"}
              title="Number of viewers currently watching
Show duration elapsed"
              placement="bottom"
            >
              <div className="box-details">
                <i className="fa-solid fa-users" />
                <span>1.2k</span>
              </div>
            </BoxTooltipTitle>
            <div className="box-details">
              <i class="fa-regular fa-clock"></i>

              <span>18:23:00</span>
            </div>
            <div className="box-state">
              <span>{value?.value}</span>
            </div>
          </div>
          <div className="select-box" ref={domNode}>
            <span>{value?.title}</span>
            <i
              class="fa-solid fa-chevron-down"
              onClick={() => setToggle(!toggle)}
            ></i>
            {toggle && (
              <div className="box-menu">
                {listOfValue &&
                  listOfValue.map((e) => (
                    <span
                      key={e.id}
                      onClick={(item) => {
                        item.preventDefault();
                        item.stopPropagation();
                        setValue(e);
                        setToggle(false);
                      }}
                    >
                      {e.title}
                    </span>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
