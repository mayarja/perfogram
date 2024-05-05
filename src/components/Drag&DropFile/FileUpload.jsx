import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import "./fileupload.scss"; // Import your stylesheet

const FileUpload = ({ handleSelectedFile, close }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const maxSize = 100 * 1024 * 1024; // 20 MB in bytes

  const [landscapeFile, setLandscapeFile] = useState(null);
  const [portraitFile, setPortraitFile] = useState(null);

  const onLandscapeDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file.size > maxSize) {
      console.error("Error: File size exceeds maximum (20MB)");
      return;
    }

    const newBackground = {
      landscape: {
        name: file.name,
        src: URL.createObjectURL(file),
        type: file.type.split("/")[1], // Extract type extension (e.g., "jpeg", "mp4")
      },
    };
    // handleSelectedFile(newBackground);
    setLandscapeFile({ file: file, newBackground: newBackground });
  };

  const onPortraitDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file.size > maxSize) {
      console.error("Error: File size exceeds maximum (20MB)");
      return;
    }

    const newBackground = {
      portrait: {
        name: file.name,
        src: URL.createObjectURL(file),
        type: file.type.split("/")[1], // Extract type extension
      },
    };
    // handleSelectedFile(newBackground);
    setPortraitFile({ file: file, newBackground: newBackground });
  };

  const {
    getRootProps: landscapeGetRootProps,
    getInputProps: landscapeGetInputProps,
  } = useDropzone({
    onDrop: onLandscapeDrop,
    multiple: false, // Allow only single file selection
  });

  const {
    getRootProps: portraitGetRootProps,
    getInputProps: portraitGetInputProps,
  } = useDropzone({
    onDrop: onPortraitDrop,
    multiple: false, // Allow only single file selection
  });

  const handleRemoveLandscapeFile = () => {
    setLandscapeFile(null); // Clear the selected file state
  };

  const handleRemovePortraitFile = () => {
    setPortraitFile(null); // Clear the selected file state
  };

  const renderPreview = (selectedFile) => {
    // No changes to this function
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile); // Create a temporary URL for preview

      if (selectedFile.type.startsWith("image/")) {
        return <img src={url} alt={selectedFile.name} />;
      } else if (selectedFile.type.startsWith("video/")) {
        return <video src={url} controls />; // Add controls for video playback
      } else {
        return <p>Unsupported file type</p>;
      }
    }

    return null; // Return nothing if no file is selected
  };

  let AddDta = (e) => {
    if (landscapeFile || portraitFile) {
      let dataSend = {
        ...landscapeFile?.newBackground,
        ...portraitFile?.newBackground,
      };
      handleSelectedFile(dataSend);
      close();
    }
  };
  return (
    <div className="modal-control">
      <div className="box-icon " onClick={() => close()}>
        <i className="fa-solid fa-xmark" />
      </div>
      <div className="drag-upload mt-2">
        <div className="header">
          <p className="size-reom">Landscape</p>
          {landscapeFile && (
            <button onClick={handleRemoveLandscapeFile}>
              <i className="fa-solid fa-xmark icon" />
            </button>
          )}
        </div>
        <div className="dropzone-container big-drag d-flex justify-content-center align-items-center w-100">
          {landscapeFile ? (
            <div className=" upload-video selected-file-container land">
              {renderPreview(landscapeFile.file, "Landscape")}
            </div>
          ) : (
            <div {...landscapeGetRootProps()} style={{ width: "100%" }}>
              <input {...landscapeGetInputProps()} />
              <div className="upload-video box-drag land">
                <svg
                  focusable={false}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="#2D2D2F"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.4999 19.25V12.25H22.1666L13.9999 4.08333L5.83325 12.25H10.4999V19.25H17.4999ZM13.9999 7.38499L16.5316 9.91666H15.1666V16.9167H12.8333V9.91666H11.4683L13.9999 7.38499ZM22.1666 23.9167V21.5833H5.83325V23.9167H22.1666Z"
                  />
                </svg>
                <p>Drag and drop images and videos to upload</p>
                <p>or</p>
                <button>
                  <span>Add File</span>
                </button>
              </div>
            </div>
          )}
        </div>
        {/**<hr /> */}
        <div className="header mt-3">
          <p className="size-reom">Portrait</p>
          {portraitFile && (
            <button onClick={handleRemovePortraitFile}>
              <i className="fa-solid fa-xmark icon" />
            </button>
          )}
        </div>
        <div className="dropzone-container big-drag port-item  d-flex justify-content-center align-items-center w-100">
          {portraitFile ? (
            <div className=" upload-video selected-file-container port">
              {renderPreview(portraitFile.file, "Portrait")}
            </div>
          ) : (
            <div className=" upload-video" {...portraitGetRootProps()}>
              <input {...portraitGetInputProps()} />
              <div className="upload-video box-drag port ">
                <svg
                  focusable={false}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="#2D2D2F"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.4999 19.25V12.25H22.1666L13.9999 4.08333L5.83325 12.25H10.4999V19.25H17.4999ZM13.9999 7.38499L16.5316 9.91666H15.1666V16.9167H12.8333V9.91666H11.4683L13.9999 7.38499ZM22.1666 23.9167V21.5833H5.83325V23.9167H22.1666Z"
                  />
                </svg>
                <p>Drag and drop images and videos to upload</p>
                <p>or</p>
                <button>
                  <span>Add File</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="modal-control">
          <div className="form-wrap">
            <button className="sucsess" onClick={(e) => AddDta(e)}>
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
