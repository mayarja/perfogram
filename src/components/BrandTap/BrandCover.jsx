import React, { Fragment, useState } from "react";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import { useDispatch, useSelector } from "react-redux";
import { ManageCover } from "../../store/theme";
import img1 from "../../assits/img-mobile.jpg";
import img2 from "../../assits/img-mobile_2.jpg";
import { Dialog } from "@mui/material";
import FileUpload from "../Drag&DropFile/FileUpload";
import { addCover } from "../../store/coverSlice";

function BrandCover() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // let { cover } = useSelector((state) => state.themeslice);

  let [active, setActive] = useState(null);
  let dispatch = useDispatch();
  let { covers } = useSelector((state) => state.persistData.covers);

  const handleSelectedFile = (file) => {
    // setUploadedCover((prev) => [...prev, file]);
    dispatch(addCover(file));
  };

  console.log("coverscovers", covers);
  return (
    <Fragment>
      <h2 className="accordion-header" id="panelsStayOpen-headingFife">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseFife"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseFife"
        >
          <text className="text-acco">Cover</text>
          <BoxTooltipTitle
            arrow
            placement="top"
            backgroundColor={"rgba(27, 31, 41)"}
            title={
              <div className="toltip-title-line">
                <span>
                  Set an image, video or GIF as a Cover. The cover will be
                  visible for viewers before the start of the show and after the
                  end.
                </span>{" "}
                <br /> <br /> <span>Ideal dimensions: 1280 x 720 pixels</span>{" "}
                <br /> <br /> <span>Maximum image file size: 2 MB</span> <br />{" "}
                <br /> <span>Maximum video duration: 1 minute</span> <br />{" "}
                <br />{" "}
                <span>
                  Supported file formats: .png, .jpeg, .jpg, .gif, .mp4.
                </span>{" "}
                <br /> <br />
                <span>
                  Video backgrounds will continuously loop without sound.
                </span>{" "}
                <br />{" "}
              </div>
            }
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </button>
      </h2>

      <div
        id="panelsStayOpen-collapseFife"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingFife"
      >
        <div className="accordion-body">
          <div className="BoxVideo">
            <ul className="list-unstyled mb-2">
              {covers &&
                covers.map((e, index) => (
                  <li key={index} className="mb-2">
                    <div className="wraper-box-video">
                      <div
                        className={`layer-video ${
                          active === index && "active"
                        }`}
                        onClick={() => {
                          setActive(active === index ? "" : index);
                          dispatch(
                            ManageCover(
                              active === index
                                ? ""
                                : { type: "img", src: e.src }
                            )
                          );
                        }}
                      >
                        <div className={`box-video `}>
                          <div className={`add-toBox `}>
                            {active !== index ? (
                              <div className="showplus">
                                <i className="fa-solid fa-circle-plus" />
                                <span>Show</span>
                              </div>
                            ) : (
                              <div className="showplus">
                                <i className="fa-solid fa-circle-plus" />
                                <span>Hide</span>
                              </div>
                            )}
                          </div>
                          <div className="liner"></div>
                          {e.landscape && e.landscape.type === "mp4" ? (
                            <Fragment>
                              <video src={e.landscape && e.landscape.src} />
                              <i className="fa-solid fa-clapperboard viv" />
                            </Fragment>
                          ) : (
                            e.landscape && (
                              <img
                                src={e.landscape && e.landscape.src}
                                alt={e.name}
                              />
                            )
                          )}
                          {e.portrait && e.portrait.type === "mp4" ? (
                            <Fragment>
                              <video src={e.portrait && e.portrait.src} />
                              <i className="fa-solid fa-clapperboard viv" />
                            </Fragment>
                          ) : (
                            e.portrait &&
                            e.portrait.src && (
                              <img
                                style={{
                                  width: "35px",
                                  height: "100%",
                                }}
                                src={e.portrait && e.portrait.src}
                                alt={e.name}
                              />
                            )
                          )}
                          {/* Display uploaded video */}
                          <div className="box-title">
                            <p>{e.landscape && e.landscape.name}</p>
                            <p>{e.portrait && e.portrait.name}</p>
                          </div>
                          {/**  <i className="fa-solid fa-clapperboard viv" /> */}
                        </div>
                        <div className="edit">
                          <div
                            className="box-icon-edit"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <TooltipBoxAction
                              status={open}
                              title={
                                <ul className="box-action-toltip list-unstyled">
                                  <li className="">
                                    <i className="fa-solid fa-pen" />
                                    <span>Rename </span>
                                  </li>
                                  <li className="">
                                    <i className="fa-solid fa-trash" />
                                    <span>Delete</span>
                                  </li>
                                </ul>
                              }
                            >
                              <i className="fa-solid fa-ellipsis-vertical " />
                            </TooltipBoxAction>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="box-add-video">
              <div className="wrapper">
                <label htmlFor="upload" onClick={(e) => handleOpen()}>
                  <div className="box-plus">
                    <span>+</span>
                  </div>
                  <div className="title">
                    <span>Add Cover</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
        <div className="modal-box">
          <FileUpload
            handleSelectedFile={handleSelectedFile}
            close={handleClose}
          />
        </div>
      </Dialog>
    </Fragment>
  );
}

export default BrandCover;
