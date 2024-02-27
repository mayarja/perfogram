import React from "react";

function BanFromStudion() {
  return (
    <div className="modal-control">
      <div className="box-icon">
        <i className="fa-solid fa-xmark" />
      </div>
      <form className="form-wrap">
        <h2>Require your guests to authenticate</h2>

        <p>
          To ban a guest, you need to require all guests to authenticate with
          YouTube or Facebook.
        </p>
        <p>
          Existing guests won't need to authenticate unless they refresh the
          page or you kick them.
        </p>
        <p>You can turn this off at any time in your settings.</p>
        <button className="sucsess">
          <span>Require all guests to log in</span>
        </button>
      </form>
    </div>
  );
}

export default BanFromStudion;
