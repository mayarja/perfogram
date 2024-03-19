import React, { useRef, useState } from "react";
import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import img1 from "../../assits/img-mobile.jpg";
import { ManageCover } from "../../store/theme";
import { useDispatch, useSelector } from "react-redux";

function Graphics() {
  const [open, setOpen] = React.useState(false);

  let { cover } = useSelector((state) => state.themeslice);

  const [uploadedVideo, setUploadedVideo] = useState([
    {
      name: "test",
      src: img1,
    },
  ]);

  const dragVideo = useRef(0);
  const dragOverVideo = useRef(0);

  function handleSort() {
    const bannerVideo = [...uploadedVideo];
    const temp = bannerVideo[dragVideo.current];
    bannerVideo[dragVideo.current] = bannerVideo[dragOverVideo.current];
    bannerVideo[dragOverVideo.current] = temp;
    setUploadedVideo(bannerVideo);
  }

  let [active, setActive] = useState(null);
  let [File, setFile] = useState("");
  let dispatch = useDispatch();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    if (file && file.type.startsWith("image/")) {
      setFile(event.target.files[0]);
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedVideo((prev) => {
          return [
            ...prev,
            {
              name: file.name,
              src: e.target.result, // Store image data URL
              // No need for duration as it's an image
            },
          ];
        });
      };
      reader.readAsDataURL(file);
      setFile("");
    } else {
      // Handle invalid file type
      alert("Please select a valid image file (JPEG, PNG, etc.)");
    }
  };

  return (
    <div className="wrapper-side">
      <div className="BoxVideo">
        <div className="header">
          <text className="text-acco">Graphics</text>
          <BoxTooltipTitle
            bigWidth={true}
            backgroundColor={"rgba(27, 31, 41)"}
            title={
              <div className="toltip-title-line">
                <span>
                  Upload short video clips (perfect for intros/outros).
                </span>{" "}
                <br /> <span>Recommended size: 1280 x 720.</span> <br />{" "}
                <span>Max video length: 10 minutes.</span> <br />{" "}
                <span>File type: mp4.</span> <br />
              </div>
            }
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </div>

        <ul className="list-unstyled mb-2">
          {uploadedVideo.map((img, index) => (
            <li
              key={index}
              className="mb-2"
              draggable
              onDragStart={() => (dragVideo.current = index)}
              onDragEnter={() => (dragOverVideo.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="wraper-box-video">
                <div
                  className={`layer-video ${active === index && "active"}`}
                  onClick={() => {
                    setActive(active === index ? "" : index);
                    dispatch(
                      ManageCover(
                        active === index ? "" : { type: "img", src: img.src }
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
                    <img src={img.src} alt={img.name} />{" "}
                    {/* Display uploaded video */}
                    <div className="box-title">
                      <p>{img.name}</p>
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
                              <span>Rename Graphic</span>
                            </li>
                            <li className="">
                              <i className="fa-solid fa-trash" />
                              <span>Delete Graphic</span>
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
            <label htmlFor="upload">
              <input
                type="file"
                id="upload"
                value={File}
                className="d-none"
                onChange={handleImageUpload}
              />
              <div className="box-plus">
                <span>+</span>
              </div>
              <div className="title">
                <span>Add Graphic</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphics;
