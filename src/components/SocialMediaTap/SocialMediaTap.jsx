import React, { useState } from "react";
import "./SocialMediaTap.scss";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
import imgfacebook from "../../assits/facebook.png";
import imginsta from "../../assits//instagram.png";
import { CloseSide } from "../../store/theme";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleSocialStatus } from "../../store/socialSlice";

function SocialMediaTap() {
  let { listOfSocial } = useSelector((state) => state.persistData.socials);

  const handleToggleStatus = (item) => {
    dispatch(toggleSocialStatus(item)); // Dispatch action to update Redux store
  };

  let dispatch = useDispatch();

  return (
    <div className="wrapper-side social-top">
      <div className="Details  p-2">
        <div className="header ">
          <text className="text-acco">Social</text>
          <BoxTooltipTitle
            backgroundColor={"rgba(27, 31, 41)"}
            title="Stream to multiple social media channels/pages simultaneously
Configure hear your social media destinations"
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
          <div className="close" onClick={() => dispatch(CloseSide(false))}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div className="BoxViewer">
          <div className="header">
            <div className="btn-top">
              <button>Add new destination</button>
            </div>
          </div>
          <div className="btn-two">
            <button>Play all</button>
            <button>Stop all</button>
          </div>
          <div className="newBoxViwer socialBoxViwer">
            <ul className="list-unstyled mb-2 mt-4">
              {listOfSocial &&
                listOfSocial.map((e, index) => (
                  <li key={index} style={{ borderBottom: "none" }}>
                    <div className="box-social">
                      <div className="box-title">
                        <div className="img-icons">
                          <img src={e.icon} alt="..." />
                        </div>
                        <span>{e.title}</span>
                      </div>
                      <div className="box-action">
                        <div
                          className="wraper-icon"
                          onClick={() => handleToggleStatus(e)}
                        >
                          <i
                            className={`fa-solid fa-${
                              e.status ? "play" : "stop"
                            }`}
                          ></i>
                        </div>
                        <div className="icon-edit">
                          <BoxTooltipTitle placement="top" title="Edit">
                            <div
                              className="edit"
                              style={{
                                margin: "0",
                                marginRight: "-5px",
                              }}
                              // onClick={(e) => {
                              //   setStateEdit(value.id);
                              //   setBoxCreate(true);
                              // }}
                            >
                              <i className="fa-solid fa-pen" />
                            </div>
                          </BoxTooltipTitle>
                          <BoxTooltipTitle placement="top" title="Delete">
                            <div
                              className="edit"
                              // onClick={(e) => DeleteFn(value.id)}
                            >
                              <i className="fa-solid fa-trash" />
                            </div>
                          </BoxTooltipTitle>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaTap;
