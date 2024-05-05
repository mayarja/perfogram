import React, { Fragment, useEffect, useRef, useState } from "react";
import "./QuestionTap.scss";
import CountUp from "react-countup";
import { useSelector } from "react-redux";

function BoxQuestion({ value }) {
  const [selectedAnswer, setSelectedAnswer] = useState(""); // Track selected answer
  const [remainingTime, setRemainingTime] = useState(value.duration);
  let { screenMode, status } = useSelector((state) => state.themeslice);

  const handleAnswerClick = (answer, index) => {
    setSelectedAnswer({ answer: answer, index: index }); // Update selected answer state
  };
  useEffect(() => {
    setRemainingTime(value.duration);
    setSelectedAnswer("");
  }, [value]);

  useEffect(() => {
    if (value.type !== "Vote") {
      const timerId = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime(remainingTime - 1);
        } else {
          clearInterval(timerId);
          // When timer ends and no answer selected, set a default answer
          if (!selectedAnswer) {
            setSelectedAnswer({ answer: "0", index: null });
          }
          // Perform any other necessary actions on timer completion
          // (e.g., disable answer choices, display a message, proceed to next question)
        }
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [remainingTime, selectedAnswer, value]);

  const divRef = useRef(null);
  const wdithBoxImg = divRef.current?.clientWidth; // Get the new height
  return (
    <div className="box-quesion">
      <div
        className={`${
          value.type === "Vote" ? "wrapper-question-vote" : "wrapper-question"
        } ${status === "Viewer" ? "newStyle" : "styleNotForViwer"}`}
        style={{
          width: screenMode === "portrait" ? "100%" : "33%",
          height: value.element ? "100%" : "auto",
        }}
      >
        {value?.element && (
          <div
            className="box-img"
            ref={divRef}
            style={{ height: (wdithBoxImg * 9) / 16 }}
          >
            <img
              src={
                value.element instanceof File
                  ? URL.createObjectURL(value.src || value.element)
                  : value.src || value.element || value.element.path
              }
              alt="..."
            />
          </div>
        )}
        <div className="wrapper-two">
          {value.type !== "Vote" && (
            <div
              className="liner-point"
              style={{
                background: selectedAnswer
                  ? selectedAnswer.answer.name === value.corretAnswer
                    ? "rgb(69 203 133) "
                    : "rgb(203 69 69)"
                  : "rgb(78 83 96)",
              }}
            >
              {selectedAnswer ? (
                <Fragment>
                  {selectedAnswer.answer.name === value.corretAnswer ? (
                    <span className="icon">🎉</span>
                  ) : (
                    <span className="icon-close">x</span>
                  )}
                </Fragment>
              ) : (
                ""
              )}
              {parseInt(value.point) !== 0 && (
                <span> {value.point} points </span>
              )}
              {!selectedAnswer && (
                <div
                  className="layer-duration"
                  style={{
                    width: `${(remainingTime / value.duration) * 100}%`,
                    backgroundColor:
                      remainingTime === 0 ? "" : "rgb(255, 160, 0)",
                    transition:
                      remainingTime < value.duration ? "all 1.5s ease" : "",
                  }}
                />
              )}
            </div>
          )}

          <div className="content">
            <div className="wrapper-title">
              <p
                className="question-title"
                style={{
                  marginBottom: "5px",
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
              >
                {value.title}
              </p>
            </div>
            <ul className="list-unstyled">
              {value.options &&
                value.options.map((e, index) => (
                  <li
                    key={index}
                    onClick={(ele) => handleAnswerClick(e, index)}
                    style={{
                      background:
                        value.type === "question"
                          ? selectedAnswer.index === index
                            ? selectedAnswer.answer.name === value.corretAnswer
                              ? "rgb(69 203 133) "
                              : "rgb(203 69 69)"
                            : "rgb(245 245 245)"
                          : "rgb(245 245 245)",

                      color:
                        value.type === "question"
                          ? selectedAnswer.index === index
                            ? selectedAnswer.answer.name === value.corretAnswer
                              ? "#fff "
                              : "#fff"
                            : "#333"
                          : "#333",
                      pointerEvents: selectedAnswer ? "none" : "all",
                    }}
                  >
                    <span
                      className="title"
                      style={{
                        fontSize:
                          e.name.length < 20
                            ? "1.4rem"
                            : e.name.length > 20 && e.name.length <= 45
                            ? "1rem"
                            : "50%",
                      }}
                    >
                      {e.name}
                    </span>
                    <div
                      className={`layer-answer ${
                        selectedAnswer ? "active-layer" : ""
                      }`}
                      style={{ width: `${selectedAnswer ? e.ratio : "0"}%` }}
                    ></div>
                    {selectedAnswer && (
                      <span
                        className="number"
                        style={{
                          color:
                            selectedAnswer.index === index
                              ? selectedAnswer.answer.name ===
                                value.corretAnswer
                                ? "#fff "
                                : "#fff"
                              : "#d3d3e7",
                        }}
                      >
                        <CountUp
                          end={e.ratio}
                          duration={1} // Adjust duration for animation speed (milliseconds)
                          delay={0} // Set delay before animation starts (milliseconds)
                          prefix="" // Add prefix before the number (optional)
                          suffix="%" // Add suffix after the number (optional)
                          decimals={0} // Set the number of decimal places (optional)
                        />
                      </span>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxQuestion;
