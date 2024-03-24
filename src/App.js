import MainPage from "./pages/MainPage/MainPage";
import "./App.scss";
import { useSelector } from "react-redux";
import StartPage from "./pages/StartPage/StartPage";
import { useEffect } from "react";

function App() {
  let { startStatus } = useSelector((state) => state.themeslice);

  return (
    <div className="App" style={{ overflowScroll: "touch" }}>
      {startStatus ? <StartPage /> : <MainPage />}
    </div>
  );
}

export default App;
