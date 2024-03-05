import React from "react";
import { BoxTooltipTitle } from "../../ToolTipsFolder/ToolTips";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function General() {
  return (
    <div className="quality-record">
      <div className="wraper">
        <div className="box-label">
          <label>Recording quality</label>
          <BoxTooltipTitle
            title="The quality of the recording and the stream sent to your destinations. You and your guests need a solid internet connection for 1080p. For Facebook and X (Twitter), unless you have 1080p access, viewers can only watch in 720p."
            arrow
            placement="bottom"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </div>

        <select className="select-control form-select">
          <option value="Full High Definition (1080p)" key="one">
            Full High Definition (1080p)
          </option>
          <option value="High Definition (720p)" key="one">
            High Definition (720p)
          </option>
        </select>
      </div>

      <div className="box-label">
        <label>Orientation</label>
        <BoxTooltipTitle
          title="Select the orientation mode to be landscape or portrait. Portrait works best for vertical destinations like Instagram."
          arrow
          placement="bottom"
        >
          <i className="fa-regular fa-circle-question ms-2 question" />
        </BoxTooltipTitle>
      </div>

      <div className="radio-group">
        <div className="box-radio">
          <input
            defaultChecked={true}
            type="radio"
            id="landscape"
            name="orientation"
          />
          <svg
            focusable="{false}"
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillrule="evenodd"
              cliprule="evenodd"
              d="M1.35417 11.3672C1.35417 12.1005 1.95417 12.7005 2.6875 12.7005L13.3542 12.7005C14.0875 12.7005 14.6875 12.1005 14.6875 11.3672L14.6875 4.70052C14.6875 3.96719 14.0875 3.36719 13.3542 3.36719L2.6875 3.36719C1.95417 3.36719 1.35417 3.96719 1.35417 4.70052L1.35417 11.3672ZM12.8545 4.7002C13.1306 4.7002 13.3545 4.92405 13.3545 5.20019L13.3545 10.8669C13.3545 11.143 13.1306 11.3669 12.8545 11.3669L3.18783 11.3669C2.91168 11.3669 2.68783 11.143 2.68783 10.8669L2.68783 5.2002C2.68783 4.92405 2.91168 4.7002 3.18783 4.7002L12.8545 4.7002Z"
              fill="#4F5461"
            />
            <path
              d="M12.4844 5.80078C12.4844 5.66271 12.3724 5.55078 12.2344 5.55078L3.73438 5.55078C3.5963 5.55078 3.48438 5.66271 3.48438 5.80078L3.48438 10.3008C3.48438 10.4389 3.5963 10.5508 3.73438 10.5508L12.2344 10.5508C12.3724 10.5508 12.4844 10.4389 12.4844 10.3008L12.4844 5.80078Z"
              fill="#8F94A2"
            />
          </svg>
          <label htmlFor="landscape">Landscape</label>
        </div>

        <div className="box-radio">
          <input type="radio" id="portrait" name="orientation" />
          <svg
            focusable={false}
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.63281 1.35026C3.89948 1.35026 3.29948 1.95026 3.29948 2.68359L3.29948 13.3503C3.29948 14.0836 3.89948 14.6836 4.63281 14.6836L11.2995 14.6836C12.0328 14.6836 12.6328 14.0836 12.6328 13.3503L12.6328 2.68359C12.6328 1.95026 12.0328 1.35026 11.2995 1.35026L4.63281 1.35026ZM11.2998 12.8506C11.2998 13.1267 11.0759 13.3506 10.7998 13.3506L5.13314 13.3506C4.857 13.3506 4.63314 13.1267 4.63314 12.8506L4.63314 3.18392C4.63314 2.90778 4.85699 2.68392 5.13314 2.68392L10.7998 2.68392C11.0759 2.68392 11.2998 2.90778 11.2998 3.18392L11.2998 12.8506Z"
              fill="#4F5461"
            />
            <path
              d="M10.1953 12.4834C10.3334 12.4834 10.4453 12.3715 10.4453 12.2334L10.4453 3.7334C10.4453 3.59533 10.3334 3.4834 10.1953 3.4834L5.69531 3.4834C5.55724 3.4834 5.44531 3.59533 5.44531 3.7334L5.44531 12.2334C5.44531 12.3715 5.55724 12.4834 5.69531 12.4834L10.1953 12.4834Z"
              fill="#8F94A2"
            />
          </svg>
          <label htmlFor="portrait">Portrait</label>
        </div>
      </div>

      <div className="box-chack">
        <div className="wraper-check">
          <input
            defaultChecked={true}
            type="checkbox"
            id="Shift"
            className="form-check"
          />
          <label htmlFor="Shift">Shift videos up for comments/banners</label>

          <BoxTooltipTitle
            title="  Automatically shift videos up to avoid covering guests in certain landscape layouts"
            arrow
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </div>
      </div>
      <div className="box-chack">
        <div className="wraper-check">
          <input
            defaultChecked={true}
            type="checkbox"
            id="Audio"
            className="form-check"
          />
          <label htmlFor="Audio">Audio avatars</label>
          <BoxTooltipTitle
            title="Show an avatar when a user's camera is off. Uncheck this if you want users to be completely hidden when their camera is off."
            arrow
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </div>
      </div>
      <div className="box-chack">
        <div className="wraper-check">
          <input
            defaultChecked={true}
            type="checkbox"
            id="Automatically"
            className="form-check"
          />
          <label htmlFor="Automatically">
            Automatically add shared screens/videos to stream
          </label>
          <BoxTooltipTitle
            title="When you share a screen or video, we'll automatically add it to the stream. Disable this if you want to queue up a shared screen or video without showing it right away. This doesn't affect guests. Guest screens are never added automatically."
            arrow
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </div>
      </div>
    </div>
  );
}

export default General;
