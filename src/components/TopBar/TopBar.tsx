import { MenuIcon } from "../../assets/menu-bars";
import "./TopBar.css";
import CircleQuestion from "../../assets/circle-question.svg";
import ProfileIcon from "../../assets/image 2.png";

interface TopBarProp {
  handleSidebar: () => void;
  active: boolean;
}

function TopBar({ handleSidebar, active }: TopBarProp) {
  return (
    <div className="TopBar">
      <div>
        <button className="hamburgerButton" onClick={handleSidebar}>
          <MenuIcon active={active} />
        </button>
        <p>ãcme</p>
      </div>

      <div>
        <img src={CircleQuestion} />
        <img src={ProfileIcon} />
      </div>
    </div>
  );
}

export default TopBar;
