import MainPage from "./pages/MainPage/MainPage";
import "./App.scss";
import { useSelector } from "react-redux";
import StartPage from "./pages/StartPage/StartPage";
import { useEffect, useState } from "react";

function App() {
  let { startStatus, covers, showCover, status } = useSelector(
    (state) => state.themeslice
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Initial width
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let [stateCover, setShowCover] = useState(false);

  useEffect(() => {
    if (showCover) {
      setShowCover(true);
    }
  }, [showCover]);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = new Date(
    Date.now() +
      4 * 24 * 60 * 60 * 1000 +
      6 * 60 * 60 * 1000 +
      10 * 60 * 1000 +
      Math.floor(Math.random() * 10) * 1000
  ); // Add some random seconds for a more dynamic demo

  useEffect(() => {
    if (showCover) {
      const intervalId = setInterval(() => {
        const now = new Date();
        const distance = deadline.getTime() - now.getTime();

        // Calculate remaining days, hours, minutes, and seconds
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

        // Clear the interval when the deadline is reached
        if (distance < 0) {
          clearInterval(intervalId);
          setShowCover(false); // Update showCover state here
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
        }
      }, 1000); // Update timer every second

      return () => clearInterval(intervalId); // Cleanup function to stop the timer on unmount
    }
  }, [showCover]);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setShowCover(false);
  //   }, 10000); // Hide cover after 10 seconds

  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <div
      className="App"
      style={{
        overflowScroll: "touch",
        background: status === "Viewer" && "rgb(19, 19, 21)",
      }}
    >
      {stateCover ? (
        <div className="coverBox">
          {windowWidth <= 575 ? (
            <img src={covers.portrait.src} alt="..." />
          ) : (
            <img src={covers.landscape.src} alt="..." />
          )}
          <div className="box-timer">
            <p className="str">Starting in</p>
            <div className="duration-box">
              <div className="box-time-s">
                <span className="number">
                  {days.toString().padStart(2, "0")}
                </span>
                <span className="title">Days</span>
              </div>
              <div className="point">:</div>
              <div className="box-time-s">
                <span className="number">
                  {hours.toString().padStart(2, "0")}
                </span>
                <span className="title">Hrs</span>
              </div>
              <div className="point">:</div>
              <div className="box-time-s">
                <span className="number">
                  {minutes.toString().padStart(2, "0")}
                </span>
                <span className="title">Min</span>
              </div>
              <div className="point">:</div>
              <div className="box-time-s">
                <span className="number">
                  {seconds.toString().padStart(2, "0")}
                </span>
                <span className="title">Sec</span>
              </div>
            </div>
          </div>
        </div>
      ) : startStatus ? (
        <StartPage />
      ) : (
        <MainPage />
      )}
    </div>
  );
}

export default App;
