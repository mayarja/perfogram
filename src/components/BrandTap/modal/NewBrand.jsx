import React from "react";

function NewBrand() {
  return (
    <div className="modal-control">
      <div className="box-icon">
        <i className="fa-solid fa-xmark" />
      </div>
      <form className="form-wrap">
        <h2>Create new brand</h2>

        <div className="box-input">
          <div>
            <div className="box-label">
              <label htmlFor="rename">Brand name</label>
            </div>
            <input type="text" id="rename" className="form-control" />
          </div>
        </div>
        <button className="sucsess">
          <span>Create brand</span>
        </button>
      </form>
    </div>
  );
}

export default NewBrand;
