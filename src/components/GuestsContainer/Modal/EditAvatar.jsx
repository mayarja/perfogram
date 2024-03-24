import React from "react";

function EditAvatar() {
  return (
    <div className="modal-control">
      <div className="box-icon">
        <i className="fa-solid fa-xmark" />
      </div>
      <form className="form-wrap">
        <h2>Edit avatar</h2>

        <p>This avatar will be used when your camera is off</p>
        <div className="box-avatar">
          <div className="box-waper">
            <div className="box">
              <div className="layer"></div>
              <div className="avater">
                <svg
                  focusable={false}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#4F5461"
                  className="Avatar__StyledAccountCircle-sc-1obdzkx-6 glOCkS"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          <div className="box-add">
            <label htmlFor="add">
              <input type="file" id="add" style={{ display: "none" }} />
              <svg
                focusable="false"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#4F5461"
                className="UploadButton__StyledAdd-sc-1s3mm53-2 iLxyQy"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="small-btn">
          <button>
            <span>Done</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditAvatar;
