import React, { Fragment, useState } from "react";
import "./Brand.scss";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { useDispatch, useSelector } from "react-redux";
import { getColor, getTheme } from "../../store/theme";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import useClickOutside from "../../useClickOutside";
import {
  BoxTooltipTitle,
  TooltipBoxAction,
  TooltipBoxsetting,
} from "../ToolTipsFolder/ToolTips";
import { Dialog } from "@mui/material";
import RenameBrand from "./modal/RenameBrand";
import DeleteBrand from "./modal/DeleteBrand";
import NewBrand from "./modal/NewBrand";
import BrandThem from "./BrandThem";
import BrandColor from "./BrandColor";
import BrandLogo from "./BrandLogo";
import BrandBackground from "./BrandBackground";
import BrandCover from "./BrandCover";

function Brand() {
  let {
    theme,
    title,
    color: FromLocalSt,
  } = useSelector((state) => state.themeslice);
  let dispatch = useDispatch();

  let [color, setColor] = useState(FromLocalSt);
  let [activeTheme, setActiveTheme] = useState(theme);

  let ChoseColor = (e) => {
    setColor(e);
    dispatch(getColor(e));
  };

  // let setTheme = (e) => {
  //   setActiveTheme(e);
  //   dispatch(getTheme(e));
  // };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [manage, setManage] = useState("");

  let ManageModal = (e) => {
    setManage(e);
    if (e) {
      handleOpen();
    }
  };

  return (
    <div className="wrapper-side">
      <div className="header-Details">
        {/*Create New Brand and Chose Another One */}
        <TooltipBoxsetting
          status={open}
          title={
            <ul className="box-setting-toltip list-unstyled">
              <li className="active">
                <div className="box-point">
                  <i className="fa-solid fa-palette qqq">
                    <span
                      className="point"
                      style={{ background: FromLocalSt }}
                    ></span>
                  </i>
                </div>
                <span>Brand</span>
              </li>
              <li className="">
                <div className="box-point">
                  <i className="fa-solid fa-palette qqq">
                    <span
                      className="point"
                      style={{ background: FromLocalSt }}
                    ></span>
                  </i>
                </div>
                <span>Brand 2</span>
              </li>

              <li
                onClick={(e) => {
                  ManageModal("NewBrand");
                }}
              >
                <div className="box-point">
                  <text>+</text>
                </div>
                <span>New Brand</span>
              </li>
            </ul>
          }
        >
          <div className="box-back">
            <i className="fa-solid fa-palette qqq">
              <span
                className="point"
                style={{ background: FromLocalSt }}
              ></span>
            </i>
            <span>Brand</span>
            <i className="fa-solid  fa-angle-down" />
          </div>
        </TooltipBoxsetting>

        {/*Rename & delete Brand  */}
        <TooltipBoxAction
          status={open}
          title={
            <ul className="box-action-toltip list-unstyled">
              <li
                className=""
                onClick={(e) => {
                  ManageModal("Rename");
                }}
              >
                <i className="fa-solid fa-pen" />
                <span>Rename brand</span>
              </li>
              <li
                className=""
                onClick={(e) => {
                  ManageModal("Delete");
                }}
              >
                <i className="fa-solid fa-trash" />
                <span>Delete brand</span>
              </li>
            </ul>
          }
        >
          <i className="fa-solid fa-ellipsis-vertical edit" />
        </TooltipBoxAction>
      </div>

      <div
        className="accordion AccordionBrand"
        id="accordionPanelsStayOpenExample"
      >
        {/*Brand Color */}
        <div className="accordion-item">
          <BrandColor />
        </div>

        {/*Brand Theme */}
        <div className="accordion-item">
          <BrandThem />
        </div>

        {/*Brand Logo */}
        <div className="accordion-item">
          <BrandLogo />
        </div>

        {/*Brand BackGround */}
        <div className="accordion-item">
          <BrandBackground />
        </div>

        {/*Brand Cover */}
        <div className="accordion-item">
          <BrandCover />
        </div>
      </div>

      <Dialog maxWidth="xs" fullWidth open={open} onClose={handleClose}>
        <div className="modal-box">
          {manage === "Rename" ? (
            <RenameBrand />
          ) : manage === "NewBrand" ? (
            <NewBrand />
          ) : (
            <DeleteBrand />
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default Brand;
