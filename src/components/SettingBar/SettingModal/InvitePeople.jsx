import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate } from "react-router-dom";

function InvitePeople({ setOpenInvite }) {
  const navigate = useNavigate(); // Get navigation function

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
  };
  const urlToCopy = `${window.location.origin}`;

  return (
    <div className="modal-setting">
      <div className="header-setting">
        <div className="wrapper-header">
          <h2>Invite People</h2>
        </div>
        <div
          className="box-icon"
          onClick={() => {
            setOpenInvite(false);
          }}
        >
          <i className="fa-solid fa-xmark" />
        </div>
      </div>
      <div className="box-setting">
        <div className="box-item ">
          <div
            className="d-flex justify-content-start gap-3 align-items-center icon-title"
            style={{ width: "25%" }}
          >
            <i class="fa-solid fa-eye"></i>
            <span>Invite Viewers</span>
          </div>
          <input
            className="input"
            name="input"
            value={urlToCopy}
            disabled // Disable the input field
          />
          <CopyToClipboard text={urlToCopy} onCopy={handleCopy}>
            <button>Copy URL</button>
          </CopyToClipboard>
        </div>
        <div className="box-item">
          <div
            className="d-flex justify-content-start gap-3 align-items-center  icon-title"
            style={{ width: "25%" }}
          >
            <i class="fa-solid fa-user"></i>
            <span>Invite Guests</span>
          </div>

          <input
            className="input"
            name="input"
            value={urlToCopy}
            disabled // Disable the input field
          />
          <CopyToClipboard text={urlToCopy} onCopy={handleCopy}>
            <button>Copy URL</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default InvitePeople;
