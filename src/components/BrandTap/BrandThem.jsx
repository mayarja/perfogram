import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowNameUserFn, getTheme } from "../../store/theme";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import Switch from "react-switch";

function BrandThem() {
  let {
    theme,
    ShowNameUser,
    fontColor,
    color: FromLocalSt,
  } = useSelector((state) => state.themeslice);
  let dispatch = useDispatch();
  let [activeTheme, setActiveTheme] = useState(theme);
  let setTheme = (e) => {
    setActiveTheme(e);
    dispatch(getTheme(e));
  };

  let handleShowName = (e) => {
    dispatch(ShowNameUserFn(e));
    setStateSwitch(e);
  };

  let [stateSwitch, setStateSwitch] = useState(ShowNameUser);

  return (
    <Fragment>
      <h2 className="accordion-header mb-3" id="panelsStayOpen-headingTwo">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          <text className="text-acco">Style</text>
          <BoxTooltipTitle
            backgroundColor={"rgba(27, 31, 41)"}
            title="Choose the style that fits your brand. This will affect banners, and
display names"
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseTwo"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingTwo"
      >
        <div className="accordion-body">
          <div className="box-them">
            <div
              className="container-them"
              onClick={(e) => {
                setTheme("Bubble");
              }}
            >
              {activeTheme === "Bubble" && <div className="layer"></div>}
              <div
                className={`box-svg ${activeTheme === "Bubble" && "active"}`}
              >
                <span
                  className="Bubble"
                  style={{ background: FromLocalSt, color: fontColor }}
                >
                  Bubble
                </span>
              </div>
            </div>

            <div
              className="container-them"
              onClick={(e) => {
                setTheme("Classic");
              }}
            >
              {activeTheme === "Classic" && <div className="layer"></div>}
              <div
                className={`box-svg ${activeTheme === "Classic" && "active"}`}
              >
                <span
                  className="Classic"
                  style={{
                    background: FromLocalSt,
                    color: fontColor,
                  }}
                >
                  <span
                    className="borderrr"
                    style={{
                      borderTopColor: `${FromLocalSt}`,
                      borderBottomColor: `${FromLocalSt}`,
                      borderLeftColor: `${FromLocalSt}`,
                      borderRightColor: `#fff`,
                    }}
                  ></span>
                  Classic
                </span>
              </div>
            </div>

            <div
              className="container-them"
              onClick={(e) => {
                setTheme("Minimal");
              }}
            >
              {activeTheme === "Minimal" && <div className="layer"></div>}
              <div
                className={`box-svg ${activeTheme === "Minimal" && "active"}`}
              >
                <span
                  className="Minimal"
                  style={{
                    background: "rgba(29, 29, 29, 0.9)",
                    color: fontColor,
                  }}
                >
                  <div
                    className="block"
                    style={{ background: FromLocalSt }}
                  ></div>
                  Dynamic
                </span>
              </div>
            </div>

            <div
              className="container-them"
              onClick={(e) => {
                setTheme("Block");
              }}
            >
              {activeTheme === "Block" && <div className="layer"></div>}
              <div className={`box-svg ${activeTheme === "Block" && "active"}`}>
                <span
                  className="Block"
                  style={{ background: FromLocalSt, color: fontColor }}
                >
                  Full Width
                </span>
              </div>
            </div>

            <div
              className="container-them"
              onClick={(e) => {
                setTheme("Central");
              }}
            >
              {activeTheme === "Central" && <div className="layer"></div>}
              <div
                className={`box-svg ${activeTheme === "Central" && "active"}`}
              >
                <span
                  className="Central"
                  style={{ background: FromLocalSt, color: fontColor }}
                >
                  Central Block
                </span>
              </div>
            </div>

            <label htmlFor="" className="add-logo">
              <div>
                <TooltipBoxAction
                  placement={"top"}
                  title={
                    <p style={{ fontSize: "1.4rem", padding: "5px " }}>
                      Contact us to design your own style 👍
                    </p>
                  }
                >
                  <span className="add-plus">+</span>
                </TooltipBoxAction>
              </div>
            </label>
          </div>
          <div className="switch-show-name">
            <Switch
              onColor="#4285C5"
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={40}
              handleDiameter={15}
              checked={stateSwitch}
              onChange={(e) => handleShowName(e)}
            />
            <span className="title">Display names</span>{" "}
            <BoxTooltipTitle
              backgroundColor={"rgba(27, 31, 41)"}
              title="Choose to show or hide the name of guests on the screen"
              placement="top"
            >
              <i className="fa-regular fa-circle-question ms-2 question" />
            </BoxTooltipTitle>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BrandThem;
