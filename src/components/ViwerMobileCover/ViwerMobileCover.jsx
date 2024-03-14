import React, { useState } from "react";
import "./ViwerMobileCover.scss";
import img1 from "../../assits/img-mobile.jpg";
function ViwerMobileCover() {
  let [inp, setInp] = useState();
  let [data, setData] = useState([
    { name: "mayar", message: "good morning guys 3", img: true },
  ]);

  const handleChange = () => {
    if (inp.trim() !== "") {
      setData([
        { name: "mayar", message: inp, img: true },
        ...data, // Spread existing messages to maintain order
      ]);
      setInp(""); // Clear input after sending
    }
  };

  let SendCommint = (e) => {
    e.preventDefault();
    if (inp.trim() !== "") {
      setData([
        { name: "mayar", message: inp, img: true },
        ...data, // Spread existing messages to maintain order
      ]);
      setInp(""); // Clear input after sending
    }
  };

  return (
    <div className="viwer-mobile">
      <div className="box-gear-top">
        <div className="viwer-number">
          <i className="fa-solid fa-user" />
          <span>5</span>
        </div>
        <i className="fa-solid fa-gear"></i>
      </div>
      <div className="commints">
        {data &&
          data.map((e) => {
            return (
              <div className="meesage-box">
                <div className="img-box">
                  {e.img ? <img src={img1} alt="..." /> : <span>J</span>}
                </div>
                <div className="box-title">
                  <span className="name">{e.name}</span>
                  <span className="message">{e.message}</span>
                </div>
              </div>
            );
          })}
      </div>
      <form className="box-write-bottom" onSubmit={(e) => SendCommint(e)}>
        <button className="icon-send">
          <i
            className={`fa-solid fa-play   ${inp && "active"}`}
            onClick={(e) => handleChange(e)}
          />
        </button>
        <input
          type="text"
          placeholder="Add comment"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <i className="fa-solid fa-heart ms-1 me-2" />
        <i className="fa-solid fa-hand" />
      </form>
    </div>
  );
}

export default ViwerMobileCover;
