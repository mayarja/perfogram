import React from "react";

function DeleteBanner() {
  return (
    <div className="modal-control">
      <div className="box-icon">
        <i className="fa-solid fa-xmark" />
      </div>
      <form className="form-wrap">
        <h2>Delete folder?</h2>

        <p>"Name" folder has 4 banners</p>
        <button className="danger">
          <span>Delete Folder</span>
        </button>
      </form>
    </div>
  );
}

export default DeleteBanner;
