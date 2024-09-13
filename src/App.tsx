import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import "./App.css";
import downloadIcon from "./assets/download.png";
import Table from "./components/Table/Table";

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="App">
      <div className="App__TopBar">
        <TopBar active={showSidebar} handleSidebar={handleSidebar} />
      </div>

      <div className="App__Body">
        <SideBar show={showSidebar} />

        <div className="App__MainView">
          <div className="App__MainView__Header">
            <h2>Comparison</h2>
            <button className="TableButton">
              <img src={downloadIcon} alt="ddd" />
              Export
            </button>
          </div>

          <div className="App__MainView__Table">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
