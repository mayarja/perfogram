import React from "react";

function KickFromStudion() {
  return (
    <div className="modal-control">
      <div className="box-icon">
        <i className="fa-solid fa-xmark" />
      </div>
      <form className="form-wrap">
        <h2>Kick "name"</h2>

        <p>"name" will be removed from the studio.</p>
        <p>
          If you want to prevent this person from rejoining, you should ban them
          instead.
        </p>
        <button className="sucsess">
          <span>Kick guest</span>
        </button>
      </form>
    </div>
  );
}

export default KickFromStudion;
