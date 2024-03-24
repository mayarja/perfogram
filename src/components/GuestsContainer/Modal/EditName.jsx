import React from "react";

function EditName({ Close }) {
  return (
    <div className="modal-control">
      <div className="box-icon" onClick={() => Close()}>
        <i className="fa-solid fa-xmark" />
      </div>
      <form className="form-wrap">
        <h2>Rename brand</h2>

        <div className="box-input">
          <div>
            <div className="box-label">
              <label htmlFor="rename">Brand name</label>
            </div>
            <input type="text" id="rename" className="form-control" />
          </div>
        </div>
        <button className="sucsess">
          <span>Rename</span>
        </button>
      </form>
    </div>
  );
}

export default EditName;
