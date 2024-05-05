import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getMainColor, getFontColor } from "../../store/theme";
import { useDispatch, useSelector } from "react-redux";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";

function BrandColor() {
  let { color: FromLocalSt, fontColor } = useSelector(
    (state) => state.themeslice
  );
  let dispatch = useDispatch();

  let [color, setColor] = useState(FromLocalSt);
  let [colorFont, setColorFont] = useState(fontColor);

  const colorTimeoutRef = useRef(null);
  const fontColorTimeoutRef = useRef(null);

  const debouncedSetColor = useCallback(() => {
    dispatch(getMainColor(color));
  }, [color, dispatch]);

  const debouncedSetFontColor = useCallback(() => {
    dispatch(getFontColor(colorFont));
  }, [colorFont, dispatch]);

  useEffect(() => {
    if (colorTimeoutRef.current) {
      clearTimeout(colorTimeoutRef.current);
    }

    colorTimeoutRef.current = setTimeout(debouncedSetColor, 500); // Adjust delay as needed

    return () => clearTimeout(colorTimeoutRef.current);
  }, [color, dispatch]);

  useEffect(() => {
    if (fontColorTimeoutRef.current) {
      clearTimeout(fontColorTimeoutRef.current);
    }

    fontColorTimeoutRef.current = setTimeout(debouncedSetFontColor, 500); // Adjust delay as needed

    return () => clearTimeout(fontColorTimeoutRef.current);
  }, [colorFont, dispatch]);

  const ChoseColor = (e) => {
    setColor(e); // Update state immediately for UI feedback
  };

  const ChoseColorFont = (e) => {
    setColorFont(e); // Update state immediately for UI feedback
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
          <text className="text-acco">Colors</text>
          <BoxTooltipTitle
            backgroundColor={"rgba(27, 31, 41)"}
            title="Add your branding to the screen by customizing the colors of
banners, tickers and display names"
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
          <div className="waraper-color-box mt-3">
            <div>
              <p className="title">Background</p>
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
            <div>
              <p className="title">Font</p>
              <div className="box-color">
                <input
                  type="color"
                  value={colorFont}
                  className="chose-color"
                  onChange={(e) => ChoseColorFont(e.target.value)}
                />
                <input
                  type="text"
                  value={colorFont}
                  readOnly
                  maxLength={7}
                  className="input-color form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BrandColor;
