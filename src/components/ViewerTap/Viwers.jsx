import React, { Fragment, useState } from "react";
import "./Viwers.scss";
import { useDispatch } from "react-redux";
import { CloseSide, ManageControlStatus } from "../../store/theme";

import { useSelector } from "react-redux";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";

function Viwers() {
  let dispatch = useDispatch();

  let { viewers: data } = useSelector((state) => state.persistData.viewers);

  const [searchTerm, setSearchTerm] = useState("");

  function filterData(data, searchTerm) {
    if (!searchTerm) {
      return data; // Return all data if search term is empty
    }
    return data.filter((viewer) =>
      viewer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  const filteredData = filterData(data, searchTerm);

  let { ViewerTapMode } = useSelector((state) => state.themeslice);
  //quiz
  return (
    <div className="wrapper-side">
      <div className="Details  p-2">
        <div className="header">
          <text className="text-acco">Viewers</text>
          <BoxTooltipTitle
            backgroundColor={"rgba(27, 31, 41)"}
            title="a live list of your viewers"
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
          <div className="close" onClick={() => dispatch(CloseSide(false))}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div className="BoxViewer">
          {ViewerTapMode === "quiz" && (
            <div className="header-quiz">
              <div className="box-quiz-details">
                <p>
                  Correct: 100%. <span>Ponits:250</span>
                </p>
                <p>Last Question:</p>
                <p>
                  Participants: 2000,<span>Correct: 10000 = 50%</span>
                </p>
              </div>
            </div>
          )}
          <div className="header">
            <div className="box-inp">
              <input
                type="text"
                placeholder="Search Name"
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              />
            </div>
          </div>
          <div className="newBoxViwer">
            <ul className="list-unstyled box-wrapper">
              {filteredData &&
                filteredData.map((e) => {
                  return (
                    <li>
                      <div className="content">
                        <div className="flag-box">
                          {ViewerTapMode == "quiz" && (
                            <span className="number-flag">{e.numberFlag}</span>
                          )}
                          <div className="wraper-img">
                            <img src={e.flag} alt="flag" />
                          </div>
                        </div>
                        <div className="box-title">
                          <span>{e.name}</span>
                        </div>

                        <div className="details">
                          {ViewerTapMode === "quiz" && (
                            <Fragment>
                              <div className="box-number">
                                <i className="fa-solid fa-check" />
                                <span>{e.numberIcon}</span>
                              </div>

                              <div className="box-coins">
                                <div className="backColor"></div>
                                <span>{e.Coins}</span>
                              </div>

                              <div className="box-heart">
                                <i
                                  className="fa-solid fa-heart"
                                  style={{
                                    color: e.hertNumber == 0 && "gray ",
                                  }}
                                >
                                  <span>{e.hertNumber}</span>
                                </i>
                              </div>
                            </Fragment>
                          )}
                        </div>
                      </div>
                      <div className="action">
                        <i className="fa-solid fa-ellipsis-vertical" />
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

export default Viwers;
