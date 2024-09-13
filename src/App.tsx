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
      <div className="AppTopBar">
        <TopBar active={showSidebar} handleSidebar={handleSidebar} />
      </div>

      <div className="AppBody">
        <SideBar show={showSidebar} />

        <div className="AppMainView">
          <div className="AppMainViewHeader">
            <h2>Comparison</h2>
            <button className="TableButton">
              <img src={downloadIcon} alt="ddd" />
              Export
            </button>
          </div>

          <div className="AppMainViewTable">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
