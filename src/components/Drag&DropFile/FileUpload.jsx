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
    <div className="drag-upload">
      <div className="header">
        <p className="size-reom">Landscape :</p>
        {landscapeFile && (
          <button onClick={handleRemoveLandscapeFile}>
            <i className="fa-solid fa-xmark icon" />
          </button>
        )}
      </div>

      <div className="dropzone-container  d-flex justify-content-center align-items-center w-100">
        {landscapeFile ? (
          <div className=" upload-video selected-file-container land">
            {renderPreview(landscapeFile.file, "Landscape")}
          </div>
        ) : (
          <div {...landscapeGetRootProps()}>
            <input {...landscapeGetInputProps()} />
            <p className="upload-video form-control land">
              {"Drag & drop Landscape image here, or click to select a file"}
            </p>
          </div>
        )}
      </div>

      <hr />

      <div className="header">
        <p className="size-reom">Portrait :</p>
        {portraitFile && (
          <button onClick={handleRemovePortraitFile}>
            <i className="fa-solid fa-xmark icon" />
          </button>
        )}
      </div>

      <div className="dropzone-container port-item  d-flex justify-content-center align-items-center w-100">
        {portraitFile ? (
          <div className=" upload-video selected-file-container port">
            {renderPreview(portraitFile.file, "Portrait")}
          </div>
        ) : (
          <div className=" upload-video" {...portraitGetRootProps()}>
            <input {...portraitGetInputProps()} />
            <p className=" form-control port">
              {"Drag & drop Portrait image here, or click to select a file"}
            </p>
          </div>
        )}
      </div>

      {/*uploadProgress > 0 && (
        <progress value={uploadProgress} max="100">
          {uploadProgress}%
        </progress>
      )*/}

      <div className="modal-control">
        <div className="form-wrap">
          <button className="sucsess" onClick={(e) => AddDta(e)}>
            <span>Submit</span>
          </button>
          <button className="cancle" onClick={(e) => close()}>
            <span>Cancle</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
