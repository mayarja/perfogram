import React, { useState } from "react";
import "./ViwerMobileCover.scss";
function ViwerMobileCover() {
  let [inp, setInp] = useState("");

  return (
    <div className="viwer-mobile">
      <div className="box-gear-top">
        <div className="viwer-number">
          <i className="fa-solid fa-user" />
          <span>5</span>
        </div>
        <i className="fa-solid fa-gear"></i>
      </div>
      <div className="box-write-bottom">
        <div className="icon-send">
          <i className={`fa-solid fa-play fa-rotate-180  ${inp && "active"}`} />
        </div>
        <input
          type="text"
          placeholder="Add comment"
          onChange={(e) => setInp(e.target.value)}
        />
        <i className="fa-solid fa-heart ms-1 me-2" />
        <i className="fa-solid fa-hand" />
      </div>
    </div>
  );
}

export default ViwerMobileCover;
