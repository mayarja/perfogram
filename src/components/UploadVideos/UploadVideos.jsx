import React, { Fragment, useRef, useState } from "react";
import "./UploadVideo.scss";

import { BoxTooltipTitle, TooltipBoxAction } from "../ToolTipsFolder/ToolTips";
import { useDispatch, useSelector } from "react-redux";
import { ManageCover } from "../../store/theme";
function UploadVideos() {
  const [open, setOpen] = React.useState(false);

  let { cover } = useSelector((state) => state.themeslice);

  const [uploadedVideo, setUploadedVideo] = useState([
    {
      name: "test",
      duration: "0:30",
      src: "https://storage.googleapis.com/streamyard-app/examples/video-clips/countdown3_1280x720_q_med.mp4",
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
  let [loop, setLoop] = useState(false);
  let dispatch = useDispatch();

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    if (file && file.type === "video/mp4") {
      setFile(event.target.files[0]);

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedVideo((prev) => {
          return [
            ...prev,
            {
              name: file.name,
              duration: "0:30", // You can update this with the actual video length
              src: e.target.result,
            },
          ];
        });
      };
      reader.readAsDataURL(file);
      setFile("");
    }
  };

  return (
    <div className="wrapper-side">
      <div className="BoxVideo">
        <div className="header">
          <text className="text-acco">Videos</text>
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
        <div className="loop d-flex">
          <input
            id="loop"
            type="checkbox"
            className="check-form"
            value={loop}
            onChange={(e) => {
              setLoop(!loop);
              dispatch(ManageCover({ ...cover, ["loop"]: !loop }));
            }}
          />
          <label htmlFor="loop">Loop</label>
          <BoxTooltipTitle
            backgroundColor={"rgba(27, 31, 41)"}
            title={"Enable loop to repeat video clips"}
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </div>
        <ul className="list-unstyled mb-2">
          {uploadedVideo.map((video, index) => (
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
                        active === index
                          ? ""
                          : { type: "Video", src: video.src, loop: loop }
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
                    <video src={video.src} /> {/* Display uploaded video */}
                    <div className="box-title">
                      <p>{video.name}</p>
                      <p>{video.duration || "0:30"}</p>
                    </div>
                    <i className="fa-solid fa-clapperboard viv" />
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
                              <span>Rename Video</span>
                            </li>
                            <li className="">
                              <i className="fa-solid fa-trash" />
                              <span>Delete Video</span>
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
                onChange={handleVideoUpload}
              />
              <div className="box-plus">
                <span>+</span>
              </div>
              <div className="title">
                <span>Add Video</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadVideos;
