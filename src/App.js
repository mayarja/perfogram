import MainPage from "./pages/MainPage/MainPage";
import "./App.scss";
import { useSelector } from "react-redux";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  let { startStatus } = useSelector((state) => state.themeslice);
  return (
    <div className="App">{startStatus ? <StartPage /> : <MainPage />}</div>
  );
}

export default App;
