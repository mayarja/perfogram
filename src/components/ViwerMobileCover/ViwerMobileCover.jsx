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
      setData([...data, { name: "mayar", message: inp, img: true }]);
      setInp(""); // Clear input after sending
    }
  };

  console.log("inp", inp);
  console.log("datadatadata", data);
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
      <div className="box-write-bottom">
        <div className="icon-send">
          <i
            className={`fa-solid fa-play fa-rotate-180  ${inp && "active"}`}
            onClick={(e) => handleChange(e)}
          />
        </div>
        <input
          type="text"
          placeholder="Add comment"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <i className="fa-solid fa-heart ms-1 me-2" />
        <i className="fa-solid fa-hand" />
      </div>
    </div>
  );
}

export default ViwerMobileCover;
