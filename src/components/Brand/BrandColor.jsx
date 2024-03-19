import React, { Fragment, useState } from "react";
import { getColor } from "../../store/theme";
import { useDispatch, useSelector } from "react-redux";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";

function BrandColor() {
  let {
    theme,
    title,
    color: FromLocalSt,
  } = useSelector((state) => state.themeslice);
  let dispatch = useDispatch();

  let [color, setColor] = useState(FromLocalSt);

  let ChoseColor = (e) => {
    setColor(e);
    dispatch(getColor(e));
  };

  return (
    <Fragment>
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <div
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          <text className="text-acco"> Brand Color</text>
          <BoxTooltipTitle
            backgroundColor={"rgba(27, 31, 41)"}
            title="It's important to brand your content. This color is used in your banners, on-screen comments, and display name."
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </div>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className="accordion-body">
          <div className="box-color">
            <input
              type="color"
              value={color}
              className="chose-color"
              onChange={(e) => ChoseColor(e.target.value)}
            />
            <input
              type="text"
              value={color}
              readOnly
              maxLength={7}
              className="input-color form-control"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BrandColor;
