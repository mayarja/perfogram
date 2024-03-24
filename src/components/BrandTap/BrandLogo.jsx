import React, { Fragment, useState } from "react";
import { BoxTooltipTitle } from "../ToolTipsFolder/ToolTips";
import img1 from "../../assits/Perfogram_Logo_TransparentBG.png";
function BrandLogo() {
  const [uploadedLogo, setUploadedLogo] = useState([
    {
      name: "test",
      src: img1,
    },
  ]);
  let [active, setActive] = useState(null);
  let [File, setFile] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    if (file && file.type.startsWith("image/")) {
      setFile(event.target.files[0]);
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedLogo((prev) => {
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
    <Fragment>
      <h2 className="accordion-header" id="panelsStayOpen-headingThree">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseThree"
        >
          <text className="text-acco">Logo</text>
          <BoxTooltipTitle
            backgroundColor={"rgba(27, 31, 41)"}
            title="Adding your logo to your content makes you look like a pro. Plus, it's great marketing if people are sharing your streams! Try using a PNG or GIF with a transparent background."
            arrow
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseThree"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingThree"
      >
        <div className="accordion-body">
          <div className="box-logo">
            <div className="wraper-logo">
              {uploadedLogo.map((e, index) => {
                return (
                  <div className="cover-logo">
                    <div
                      className="wraper-two"
                      onClick={() => setActive(active === index ? "" : index)}
                    >
                      {active === index && <div className="layer"></div>}
                      <img src={e.src} alt="..." />
                    </div>
                  </div>
                );
              })}

              <label htmlFor="addLogo" className="add-logo">
                <input
                  id="addLogo"
                  type="file"
                  value={File}
                  onChange={handleImageUpload}
                />
                <span className="add-plus">+</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BrandLogo;
