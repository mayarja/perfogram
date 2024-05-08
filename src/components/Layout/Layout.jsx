import React, { useState } from "react";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import { useDispatch } from "react-redux";
import "./layout.scss";
import { ChangeScrennMode, getLayout } from "../../store/theme";
import { useSelector } from "react-redux";
import single from "../../assits/single.svg";
import fill from "../../assits/fill.svg";
import grid from "../../assits/grid.svg";
import mainsub from "../../assits/mainsub.svg";
import addnew from "../../assits/layout_plus_2.svg";

function Layout() {
  let { layout } = useSelector((state) => state.themeslice);

  let [canChangeMode, setCanChangeMode] = useState(true); // Flag to control function calls

  let chnageMode = (e) => {
    if (canChangeMode) {
      dispatch(ChangeScrennMode(e));
      setCanChangeMode(false);
      setTimeout(() => {
        setCanChangeMode(true); // Re-enable function calls after delay
      }, 1000);
    }
  };
  let dispatch = useDispatch();
  return (
    <>
      <>
        <div className="waprer-edit-1">
          <div className="waprer-edit-2">
            <BoxTooltipTitle
              backgroundColor={"rgba(27, 31, 41)"}
              title="Screen view"
              placement="top"
            >
              <div
                className={`contai-edit ${layout === "landscape" && "active"}`}
                onClick={() => {
                  chnageMode("landscape");
                }}
              >
                <i className="fa-solid fa-laptop" />
              </div>
            </BoxTooltipTitle>

            <BoxTooltipTitle
              backgroundColor={"rgba(27, 31, 41)"}
              title="Mobile view"
              placement="top"
            >
              <div
                className={`contai-edit ${layout === "portrait" && "active"}`}
                onClick={() => {
                  chnageMode("portrait");
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                </svg>
              </div>
            </BoxTooltipTitle>
          </div>
        </div>

        {/*" Single"*/}
        <BoxTooltipTitle
          backgroundColor={"rgba(27, 31, 41)"}
          title="Single guest layout"
          placement="top"
        >
          <div
            className="box-icon"
            onClick={(e) => {
              dispatch(getLayout("Single"));
            }}
          >
            <div
              className={`wraper-icon ${layout === "Single" ? "active" : ""}`}
            >
              <img src={single} alt="..." />
            </div>
          </div>
        </BoxTooltipTitle>

        {/**Fill */}

        <BoxTooltipTitle
          backgroundColor={"rgba(27, 31, 41)"}
          title="Fill layout"
          placement="top"
        >
          <div
            className="box-icon"
            onClick={(e) => {
              dispatch(getLayout("Fill"));
            }}
          >
            <div className={`wraper-icon ${layout === "Fill" ? "active" : ""}`}>
              <img src={fill} alt="..." />
            </div>
          </div>{" "}
        </BoxTooltipTitle>

        {/*"Group "*/}

        <BoxTooltipTitle
          backgroundColor={"rgba(27, 31, 41)"}
          title="Grid layout"
          placement="top"
        >
          <div
            className="box-icon"
            onClick={(e) => {
              dispatch(getLayout("Grid"));
            }}
          >
            <div
              className={`wraper-icon gap-2 ${
                layout === "Grid" ? "active" : ""
              }`}
              style={{ padding: "1px", background: "rgb(143, 148, 162)" }}
            >
              <img src={grid} alt="..." />
            </div>
          </div>{" "}
        </BoxTooltipTitle>
        {/*" Spotlight"*/}

        <BoxTooltipTitle
          backgroundColor={"rgba(27, 31, 41)"}
          title="Main-subs layout"
          placement="top"
        >
          <div
            className="box-icon"
            onClick={(e) => {
              dispatch(getLayout("mainSup"));
            }}
          >
            <div
              className={`wraper-icon  gap-2  ${
                layout === "Main-sub" ? "active" : ""
              }`}
            >
              <img src={mainsub} alt="..." />
            </div>
          </div>{" "}
        </BoxTooltipTitle>

        {/*Add new */}

        <BoxTooltipTitle
          backgroundColor={"rgba(27, 31, 41)"}
          title="Add new layout"
          placement="top"
        >
          <div
            className="box-icon"
            onClick={(e) => {
              // dispatch(getLayout("addnew"));
            }}
          >
            <div className={`wraper-icon  gap-2  `}>
              <TooltipBoxAction
                placement={"top"}
                title={
                  <p style={{ fontSize: "1.4rem", padding: "5px " }}>
                    Contact us to design your own layouts 👍
                  </p>
                }
              >
                <img src={addnew} alt="..." />
              </TooltipBoxAction>
            </div>
          </div>
        </BoxTooltipTitle>
      </>
    </>
  );
}

export default Layout;
