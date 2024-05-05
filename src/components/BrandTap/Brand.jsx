import React, { Fragment, useState } from "react";
import "./Brand.scss";
import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "@mui/material";
import RenameBrand from "./modal/RenameBrand";
import DeleteBrand from "./modal/DeleteBrand";
import NewBrand from "./modal/NewBrand";
import BrandThem from "./BrandThem";
import BrandColor from "./BrandColor";
import BrandLogo from "./BrandLogo";
import BrandBackground from "./BrandBackground";
import BrandCover from "./BrandCover";

function Brand() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [manage, setManage] = useState("");

  let ManageModal = (e) => {
    setManage(e);
    if (e) {
      handleOpen();
    }
  };

  return (
    <div className="wrapper-side Brand">
      <div
        className="accordion AccordionBrand"
        id="accordionPanelsStayOpenExample"
      >
        {/*Brand Color */}
        <div className="accordion-item">
          <BrandColor />
        </div>

        {/*Brand Theme */}
        <div className="accordion-item">
          <BrandThem />
        </div>

        {/*Brand Logo */}
        <div className="accordion-item" style={{ marginBottom: "15px" }}>
          <BrandLogo />
        </div>

        {/*Brand BackGround */}
        <div className="accordion-item">
          <BrandBackground />
        </div>

        {/*Brand Cover */}
        <div className="accordion-item">
          <BrandCover />
        </div>
      </div>

      <Dialog maxWidth="xs" fullWidth open={open} onClose={handleClose}>
        <div className="modal-box">
          {manage === "Rename" ? (
            <RenameBrand />
          ) : manage === "NewBrand" ? (
            <NewBrand />
          ) : (
            <DeleteBrand />
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default Brand;
