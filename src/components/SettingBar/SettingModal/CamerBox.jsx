import React, { Fragment } from "react";
import img1 from "../../../assits/about-1.jpg";

function CamerBox() {
  return (
    <Fragment>
      <div className="box-camera">
        <img src={img1} alt="..." />
      </div>
      <div className="camera-setting">
        <div className="box-content">
          <div className="box-label">
            <label>Camera</label>
          </div>
          <select className="select-control form-select">
            <option value="EasyCamera (0bda:58ea)" key="one">
              EasyCamera (0bda:58ea)
            </option>
          </select>
        </div>
        <div className="box-content">
          <div className="box-label">
            <label>Camera resolution </label>
          </div>
          <select className="select-control form-select">
            <option value="Full High Definition (1080p)" key="one">
              Full High Definition (1080p)
            </option>
            <option value="High Definition (720p)" key="one">
              High Definition (720p)
            </option>
            <option value="Standard Definition (480p)" key="one">
              Standard Definition (480p)
            </option>
            <option value="Low Definition (360p)" key="one">
              Low Definition (360p)
            </option>
          </select>
        </div>
      </div>
      <div className="box-chack">
        <div className="wraper-check">
          <input type="checkbox" id="meror" className="form-check" />
          <label htmlFor="meror">Mirror my camera</label>
        </div>
      </div>
      <div className="box-chack">
        <div className="wraper-check">
          <input type="checkbox" id="meror" className="form-check" />
          <label htmlFor="meror">Touch up my appearance</label>
        </div>
      </div>
    </Fragment>
  );
}

export default CamerBox;
