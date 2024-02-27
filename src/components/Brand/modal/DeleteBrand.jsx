import React from "react";

function DeleteBrand() {
  return (
    <div className="modal-control">
      <div className="box-icon">
        <i className="fa-solid fa-xmark" />
      </div>
      <form className="form-wrap">
        <h2>Delete brand?</h2>

        <p>test</p>
        <button className="danger">
          <span>Delete brand</span>
        </button>
      </form>
    </div>
  );
}

export default DeleteBrand;
