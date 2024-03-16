import React, { useState } from "react";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";

function Layout() {
  let [check, setCheck] = useState("one");
  return (
    <div className="icnons-control">
      <div className="icnons-control2">
        <div className="icnons-control3">
          <div className="actionsss">
            <BoxTooltipTitle
              placement="top"
              backgroundColor="rgb(27, 31, 41)"
              title={
                <span className="titleWithButtons">
                  Solo layout. Press <text>SHIFT</text> + <text>1</text>{" "}
                </span>
              }
            >
              <div
                className="box-icon"
                onClick={(e) => {
                  setCheck("one");
                }}
              >
                <div
                  className={`wraper-icon ${check === "one" ? "active" : ""}`}
                >
                  <i className="fa-solid fa-user"></i>
                </div>
              </div>
            </BoxTooltipTitle>

            <BoxTooltipTitle
              placement="top"
              backgroundColor="rgb(27, 31, 41)"
              title={
                <span className="titleWithButtons">
                  Cropped layout. Press <text>SHIFT</text> + <text>2</text>
                </span>
              }
            >
              <div
                className="box-icon"
                onClick={(e) => {
                  setCheck("two");
                }}
              >
                <div
                  className={`wraper-icon ${check === "two" ? "active" : ""}`}
                >
                  <div className="conta-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="hr"></div>
                  <div className="conta-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
              </div>
            </BoxTooltipTitle>

            <BoxTooltipTitle
              placement="top"
              backgroundColor="rgb(27, 31, 41)"
              title={
                <span className="titleWithButtons">
                  Group layout. Press <text>SHIFT</text> + <text>3</text>
                </span>
              }
            >
              <div
                className="box-icon"
                onClick={(e) => {
                  setCheck("three");
                }}
              >
                <div
                  className={`wraper-icon gap-2 ${
                    check === "three" ? "active" : ""
                  }`}
                  style={{ padding: "1px" }}
                >
                  <div className="conta-icon2">
                    <i
                      className="fa-solid fa-user"
                      style={{ fontSize: "12px" }}
                    ></i>
                  </div>
                  <div className="conta-icon2">
                    <i
                      className="fa-solid fa-user"
                      style={{ fontSize: "12px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </BoxTooltipTitle>

            <BoxTooltipTitle
              placement="top"
              backgroundColor="rgb(27, 31, 41)"
              title={
                <span className="titleWithButtons">
                  Spotlight layout. Press <text>SHIFT</text> + <text>4</text>
                </span>
              }
            >
              <div
                className="box-icon"
                onClick={(e) => {
                  setCheck("four");
                }}
              >
                <div
                  className={`wraper-icon  gap-2  ${
                    check === "four" ? "active" : ""
                  }`}
                >
                  <div className="larg-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="small-icon">
                    <i className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
              </div>
            </BoxTooltipTitle>

            <BoxTooltipTitle
              placement="top"
              backgroundColor="rgb(27, 31, 41)"
              title={
                <span className="titleWithButtons">
                  News layout. Press <text>SHIFT</text> + <text>5</text>
                </span>
              }
            >
              <div
                className="box-icon"
                onClick={(e) => {
                  setCheck("fife");
                }}
              >
                <div
                  className={`wraper-icon  gap-2 ${
                    check === "fife" ? "active" : ""
                  }`}
                >
                  <i className="fa-solid fa-user"></i>
                  <i
                    className="fa-solid fa-square"
                    style={{ fontSize: "17px" }}
                  />
                </div>
              </div>
            </BoxTooltipTitle>

            <BoxTooltipTitle
              placement="top"
              backgroundColor="rgb(27, 31, 41)"
              title={
                <span className="titleWithButtons">
                  Screen layout. Press <text>SHIFT</text> + <text>6</text>
                </span>
              }
            >
              <div
                className="box-icon"
                onClick={(e) => {
                  setCheck("six");
                }}
              >
                <div
                  className={`wraper-icon gap-2 ${
                    check === "six" ? "active" : ""
                  }`}
                >
                  <div className="small-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <i
                    className="fa-solid fa-square"
                    style={{ fontSize: "30px" }}
                  />
                </div>
              </div>
            </BoxTooltipTitle>

            <BoxTooltipTitle
              placement="top"
              backgroundColor="rgb(27, 31, 41)"
              title={
                <span className="titleWithButtons">
                  Picture-in-Picture layout. Press <text>SHIFT</text> +{" "}
                  <text>7</text>
                </span>
              }
            >
              <div
                className="box-icon"
                onClick={(e) => {
                  setCheck("seven");
                }}
              >
                <div
                  className={`wraper-icon  gap-2 ${
                    check === "seven" ? "active" : ""
                  }`}
                >
                  <i className="fa-solid fa-user inside"></i>
                  <i
                    className="fa-solid fa-square"
                    style={{ fontSize: "37px" }}
                  />
                </div>
              </div>
            </BoxTooltipTitle>

            <BoxTooltipTitle
              placement="top"
              backgroundColor="rgb(27, 31, 41)"
              title={
                <span className="titleWithButtons">
                  Cinema layout. Press <text>SHIFT</text> + <text>8</text>
                </span>
              }
            >
              <div
                className="box-icon"
                onClick={(e) => {
                  setCheck("eaght");
                }}
              >
                <div
                  className={`wraper-icon  gap-2 ${
                    check === "eaght" ? "active" : ""
                  }`}
                >
                  <i
                    className="fa-solid fa-square"
                    style={{ fontSize: "37px" }}
                  />
                </div>
              </div>
            </BoxTooltipTitle>
          </div>

          <div className="icnons-edit">
            <div className="waprer-edit-1">
              <div className="waprer-edit-2">
                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={<span className="titleWithButtons">Edit layout</span>}
                >
                  <div className="contai-edit">
                    <i className="fa-solid fa-pencil" />
                  </div>
                </BoxTooltipTitle>

                <BoxTooltipTitle
                  placement="top"
                  backgroundColor="rgb(27, 31, 41)"
                  title={<span className="titleWithButtons">New layout</span>}
                >
                  <div className="contai-edit">
                    <div className="puls">+</div>
                  </div>
                </BoxTooltipTitle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
