import React from "react";
import { useDispatch } from "react-redux";
import {
  ManageControlStatus,
  ManageViwerTapMode,
  manageShowCover,
} from "../../store/theme";

function Test() {
  let dispatch = useDispatch();
  let ToggleStatus = (e) => {
    dispatch(ManageControlStatus(e));
  };
  let ToggleModeViwer = (e) => {
    dispatch(ManageViwerTapMode(e));
  };
  let ShowVocer = (e) => {
    console.log("adsasdadsadsadsasdpopop");
    dispatch(manageShowCover(true));
  };
  return (
    <div className="box-icon h-100 w-100 p-3 wrapper-side">
      <p
        style={{ fontSize: "1.6rem", cursor: "pointer" }}
        onClick={(e) => ToggleStatus("Moderator")}
      >
        Moderator
      </p>
      <p
        style={{ fontSize: "1.6rem", cursor: "pointer" }}
        onClick={(e) => ToggleStatus("Host")}
      >
        Host
      </p>
      <p
        style={{ fontSize: "1.6rem", cursor: "pointer" }}
        onClick={(e) => ToggleStatus("Viewer")}
      >
        Viewer
      </p>
      <hr style={{ background: "black", height: "2px" }} />
      <br />
      <p
        style={{ fontSize: "1.6rem", cursor: "pointer" }}
        onClick={(e) => ToggleModeViwer("quiz")}
      >
        Quiz Mode
      </p>
      <p
        style={{ fontSize: "1.6rem", cursor: "pointer" }}
        onClick={(e) => ToggleModeViwer("basic")}
      >
        Basic Mode
      </p>
      <p style={{ fontSize: "1.6rem", cursor: "pointer" }} onClick={ShowVocer}>
        Show Cover
      </p>
    </div>
  );
}

export default Test;
