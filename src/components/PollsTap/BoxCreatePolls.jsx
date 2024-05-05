import React, { Fragment, useEffect, useRef, useState } from "react";
import "./PollsCreate.scss";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import {
//   ManageAddEditPoll,
//   ManageAddEditQuesion,
//   ShowBoxEditCreateQP,
// } from "../../store/theme";
import {
  CreatePoll,
  EditPoll,
  ManageAddEditQuesion,
  ShowBoxEditCreatePoll,
} from "../../store/pollsSlice.js";
import { randomPassword } from "../../RandomID";
import { notifyError } from "../../Notification";
import { addAllAction, editAllAction } from "../../store/allActionsSlice.js";

function BoxCreatePolls({ valueData, type }) {
  console.log("type", type);
  console.log("valueData", valueData);
  let { screenMode, status } = useSelector((state) => state.themeslice);
  const [landscapeFile, setLandscapeFile] = useState(
    type === "edit" ? valueData.element : null
  );

  const onLandscapeDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    setLandscapeFile(file);
    setValue({ ...value, element: file }); // Update the 'element' property of 'value'
  };

  const renderPreview = (selectedFile) => {
    // No changes to this function
    console.log("selectedFile", selectedFile);
    if (selectedFile) {
      let url;

      // Check if selectedFile is a string URL
      if (selectedFile instanceof File) {
        // Create a temporary URL for Blob objects (files)
        url = URL.createObjectURL(selectedFile);
        if (selectedFile.type.startsWith("image/")) {
          return <img src={url} alt={selectedFile.name || "Preview"} />; // Use filename or 'Preview' for alt
        } else if (selectedFile.type.startsWith("video/")) {
          return <video src={url} controls />;
        } else {
          return <p>Unsupported file type</p>;
        }
      } else {
        console.log("qweqewqewqew");
        url = selectedFile; // Use the string as the URL
        return <img src={url} alt={"Preview"} />; // Use filename or 'Preview' for alt
      }
    }

    return null; // Return nothing if no file is selected
  };

  const {
    getRootProps: landscapeGetRootProps,
    getInputProps: landscapeGetInputProps,
  } = useDropzone({
    onDrop: onLandscapeDrop,
    multiple: false, // Allow only single file selection
  });

  let [value, setValue] = useState(
    type === "edit"
      ? valueData
      : {
          id: randomPassword(2),
          title: "",
          type: "poll",
          options: [],
          corretAnswer: "",
          element: "",
        }
  );

  useEffect(() => {
    setValue(
      type === "edit"
        ? valueData
        : {
            id: randomPassword(2),
            title: "",
            type: "poll",
            options: [],
            corretAnswer: "",
            element: "",
          }
    );
    setLandscapeFile(type === "edit" ? valueData.element : null);
  }, [valueData, type]);

  const handleAddOption = () => {
    const updatedValue = {
      ...value,
      options: [...value.options, { name: "", ratio: "" }],
    };
    setValue(updatedValue);
  };

  let AddCorrectAnswer = (e, index) => {
    console.log("name");
    setValue((prev) => {
      return { ...prev, corretAnswer: e.name };
    });
  };
  let dispatch = useDispatch();
  let addAnswer = (type) => {
    // if (!value.corretAnswer) {
    //   notifyError("Please select the correct option.");
    // }

    if (!value.title) {
      notifyError("Please enter a title for the question.");
    }

    if (value.options.length < 1) {
      notifyError("Please add at least one option for the question.");
    }
    if (value.title && value.options.length >= 1) {
      if (type === "create") {
        dispatch(addAllAction(value));
        dispatch(CreatePoll(value));
      } else {
        dispatch(EditPoll({ value: value, id: value.id, type: type }));
        dispatch(editAllAction({ values: value, id: value.id }));
      }

      dispatch(ShowBoxEditCreatePoll(false));
    }
  };
  console.log("*//*7*//*qwe*/*/", value);

  const handleChangeOption = (newValue, index) => {
    // Create a copy of the options array to avoid mutation
    const updatedOptions = [...value.options];

    // Update the name property of the cloned answer object at the given index
    updatedOptions[index] = { ...updatedOptions[index], name: newValue };

    // Create a new value object with the updated options
    const updatedValue = { ...value, options: updatedOptions };

    // Update the state using setValue
    setValue(updatedValue);
  };

  const handleDeleteOption = (index) => {
    // Create a copy of the value object
    console.log("index", index);
    const updatedValue = { ...value };

    // Use filter to create a new array excluding the object at the given index
    updatedValue.options = updatedValue.options.filter((_, i) => i !== index);

    // Update the state with the filtered options array
    setValue(updatedValue);
  };

  const handleClosePop = () => {
    dispatch(ShowBoxEditCreatePoll(false));
  };

  console.log("Hello World", value);
  return (
    <div className="box-add-quesion">
      <div
        className={`wrapper-question wrapper-question-vote ${
          status === "Viewer" ? "newStyle" : "styleNotForViwer"
        } ${screenMode === "portrait" && "wrapper-question-portrait"}`}
      >
        <div className="close-pop" onClick={() => handleClosePop()}>
          <span>x</span>
        </div>
        <div
          className="save-pop"
          onClick={() => addAnswer(type === "edit" ? "edit" : "create")}
        >
          <span>{type === "edit" ? "Edit" : "Save"}</span>
        </div>
        <div className="box-img box-drag">
          <div className="dropzone-container big-drag d-flex justify-content-center align-items-center w-100">
            {landscapeFile ? (
              <div className=" upload-video selected-file-container land">
                {renderPreview(landscapeFile, "Landscape")}
              </div>
            ) : (
              <div
                className="wrrap-drag"
                {...landscapeGetRootProps()}
                style={{ width: "100%" }}
              >
                <input {...landscapeGetInputProps()} />
                <div className="upload-file-box">
                  Add Picture (Optional)
                  <br />
                  Click or Drag & Drop here
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="wrapper-two">
          <div className="liner-point" style={{ background: "#dfdfdf" }}></div>
          <div className="content">
            <div className="wrapper-title">
              <textarea
                className="question-title"
                autoFocus
                style={{
                  resize: "none",
                  fontSize:
                    value.title.length <= 44
                      ? "160%"
                      : value.title.length >= 44 && value.title.length <= 65
                      ? "130%"
                      : value.title.length >= 65 && value.title.length <= 80
                      ? "115%"
                      : value.title.length >= 80 && value.title.length <= 115
                      ? "100%"
                      : value.title.length >= 115 && value.title.length <= 125
                      ? "85%"
                      : value.title.length >= 125 && value.title.length <= 175
                      ? "72%"
                      : "65%",
                }}
                onChange={(e) =>
                  setValue((prev) => {
                    return { ...prev, title: e.target.value };
                  })
                }
                placeholder="Poll text here (200 characters)"
                // onBlur={() => setToggleTitle(false)}
                maxLength={200}
                value={value.title}
                // onClick={() => setToggleTitle(true)}
              />
            </div>
            <ul className="list-unstyled">
              {value.options &&
                value.options.map((e, index) => (
                  <div className="wraper-option">
                    <i
                      className="fa-solid fa-circle-minus"
                      onClick={() => handleDeleteOption(index)}
                    />
                    <input
                      key={index}
                      className="input-option"
                      onChange={(ele) =>
                        handleChangeOption(ele.target.value, index)
                      }
                      maxLength={24}
                      style={{
                        background: "rgb(245 245 245)",
                        color: "#333",
                        paddingRight: "20px",
                        fontSize:
                          e.name.length < 19
                            ? "1.4rem"
                            : e.name.length >= 19 && e.name.length <= 25
                            ? "1rem"
                            : e.name.length > 25 && e.name.length <= 30
                            ? "0.8rem"
                            : e.name.length > 30 && e.name.length <= 40
                            ? "0.5rem"
                            : "50%",
                      }}
                      value={e.name}
                      autoFocus
                    />
                  </div>
                ))}
              <p className="add-option" onClick={() => handleAddOption()}>
                + Add option
              </p>

              {/**
                   <span
                  onClick={() => {
                    addAnswer();
                    setToggleAddoption(false);
                  }}
                  style={{
                    marginRight: "5px",
                    background: "rgb(255, 160, 0)",
                    padding: "2px",
                    color: "#fff",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Done
                </span>
            */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxCreatePolls;
