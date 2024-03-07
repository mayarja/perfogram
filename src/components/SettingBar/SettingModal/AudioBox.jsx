import React from "react";
import { BoxTooltipTitle } from "../../ToolTipsFolder/ToolTips";
import { Box, Slider, Stack } from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";

function AudioBox() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("value=>", value);
  return (
    <div className="quality-record">
      <div className="wraper" style={{ width: "100%", marginBottom: "20px" }}>
        <div className="box-label">
          <label>Mic</label>
        </div>

        <div className="d-flex gap-4 justify-content-start w-100 box-with-icon">
          <select
            className="select-control form-select"
            style={{ width: "280px" }}
          >
            <option
              value="Default - Microphone (Realtek High Definition Audio)"
              key="one"
            >
              Default - Microphone (Realtek High Definition Audio)
            </option>
            <option
              value="Communications - Microphone (Realtek High Definition Audio)"
              key="one"
            >
              Communications - Microphone (Realtek High Definition Audio)
            </option>
            <option
              value="Microphone (Realtek High Definition Audio)"
              key="one"
            >
              Microphone (Realtek High Definition Audio)
            </option>
          </select>
          <i className="fa-solid fa-microphone" />
        </div>
      </div>

      <div className="wraper" style={{ width: "100%", marginBottom: "20px" }}>
        <div className="box-label">
          <label>Speaker</label>
        </div>

        <div className="d-flex gap-4 justify-content-start w-100 box-with-icon">
          <select
            className="select-control form-select"
            style={{ width: "280px" }}
          >
            <option
              value="Default - Speakers (Realtek High Definition Audio)"
              key="one"
            >
              Default - Speakers (Realtek High Definition Audio)
            </option>
            <option
              value="Communications - Microphone (Realtek High Definition Audio)"
              key="one"
            >
              Communications - Microphone (Realtek High Definition Audio)
            </option>
            <option
              value="Microphone (Realtek High Definition Audio)"
              key="one"
            >
              Microphone (Realtek High Definition Audio)
            </option>
          </select>
          <i className="fa-solid fa-volume-high" />
        </div>
      </div>

      <div className="box-chack">
        <div className="wraper-check">
          <input
            defaultChecked={true}
            type="checkbox"
            id="Shift"
            className="form-check"
          />
          <label htmlFor="Shift">Echo cancellation</label>

          <BoxTooltipTitle
            title="IMPORTANT: Do not turn this off unless you have a high quality microphone and are wearing headphones (or don't have any guests). This setting enables audio processing features like echo cancellation, noise suppression, and auto gain control. Podcasters and musicians often turn this off."
            arrow
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </div>
      </div>

      <div className="box-chack">
        <div className="wraper-check">
          <input
            defaultChecked={true}
            type="checkbox"
            id="Shift"
            className="form-check"
          />
          <label htmlFor="Shift">Reduce mic background noise</label>

          <BoxTooltipTitle
            title="Improves audio clarity by minimizing background noise."
            arrow
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </div>
      </div>

      <div className="box-chack">
        <div className="wraper-check">
          <input
            defaultChecked={true}
            type="checkbox"
            id="Shift"
            className="form-check"
          />
          <label htmlFor="Shift">Stereo audio</label>

          <BoxTooltipTitle
            title="This is often used by musicians with a stereo audio input/mic. Echo cancellation must be off for stereo audio to work properly."
            arrow
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </div>

        <div className="wraper-check">
          <label style={{ marginLeft: "28px", marginTop: "10px" }}>
            Echo cancellation must be off to use stereo audio
          </label>
        </div>
      </div>

      <div className="box-chack">
        <div className="wraper-check">
          <input
            defaultChecked={true}
            type="checkbox"
            id="Shift"
            className="form-check"
          />
          <label htmlFor="Shift">Automatically adjust mic volume</label>

          <BoxTooltipTitle
            title="Disable this option to manually adjust your mic volume with a slider."
            arrow
            placement="top"
          >
            <i className="fa-regular fa-circle-question ms-2 question" />
          </BoxTooltipTitle>
        </div>
      </div>

      <div className="box-chack">
        <div
          className="wraper-check"
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <label
            style={{
              marginLeft: "28px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Mic volume
          </label>

          <Box sx={{ width: 200 }}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              {value == 0 ? (
                <VolumeDown
                  style={{ fontSize: "25px", color: "rgb(105, 110, 124) " }}
                />
              ) : (
                <VolumeUp
                  style={{ fontSize: "25px", color: "rgb(105, 110, 124) " }}
                />
              )}
              <Slider
                size="medium"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={handleChange}
              />
            </Stack>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default AudioBox;
