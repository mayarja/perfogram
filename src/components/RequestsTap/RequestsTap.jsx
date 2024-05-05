import React, { Fragment, useState } from "react";
import "./RequestsTap.scss";
import { useDispatch } from "react-redux";
import { CloseSide, ManageControlStatus } from "../../store/theme";
import { useSelector } from "react-redux";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";

function RequestsTap() {
  let dispatch = useDispatch();
  let ToggleStatus = (e) => {
    dispatch(ManageControlStatus(e));
  };

  let { requests: data } = useSelector((state) => state.persistData.requests);

  return (
    <div className="wrapper-side ">
      <div className="Details  p-2">
        <div className="header ">
          <text className="text-acco">Join Requests</text>
          <BoxTooltipTitle
            backgroundColor={"rgba(27, 31, 41)"}
            title="A list of viewers who want to join the show"
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
            <button className="btn btn-primary">
              <text>Choose Random</text>
            </button>
          </div>
          <div className="newBoxViwer">
            <ul className="list-unstyled box-wrapper">
              {data &&
                data.map((e) => {
                  return (
                    <li>
                      <div className="content">
                        <div className="flag-box">
                          <div className="wraper-img">
                            <img src={e.flag} alt="flag" />
                          </div>
                        </div>
                        <div className="box-title">
                          <span>{e.name}</span>
                        </div>

                        <div className="details-reuqest">
                          <div className="box-mic">
                            {e.mic ? (
                              <i className="fa-solid fa-microphone" />
                            ) : (
                              <i className="fa-solid fa-video" />
                            )}
                          </div>
                          <div className="box-true">
                            <i className="fa-solid fa-check" />
                          </div>
                          <div className="box-close">
                            <span>x</span>
                          </div>
                          <div className="action">
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestsTap;
