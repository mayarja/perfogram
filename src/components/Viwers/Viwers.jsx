import React from "react";
import { useDispatch } from "react-redux";
import { ManageControlStatus } from "../../store/theme";

function Viwers() {
  let dispatch = useDispatch();
  let ToggleStatus = (e) => {
    dispatch(ManageControlStatus(e));
  };
  return (
    <div className="box-icon h-100">
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
    </div>
  );
}

export default Viwers;
