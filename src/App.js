import MainPage from "./pages/MainPage/MainPage";
import "./App.scss";
import { useSelector } from "react-redux";
import StartPage from "./pages/StartPage/StartPage";
import useDisableScrollBounce from "./useDisableScrollBounce";

function App() {
  let { startStatus } = useSelector((state) => state.themeslice);
  const { isBounceDisabled, setIsBounceDisabled } = useDisableScrollBounce();

  return (
    <div className="App" onTouchStart={() => setIsBounceDisabled(true)}>
      {startStatus ? <StartPage /> : <MainPage />}
    </div>
  );
}

export default App;
