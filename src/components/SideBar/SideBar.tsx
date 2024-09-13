import "./SideBar.css";
import SideBarItem from "../SideBarItems/SideBarItems";
import HomeIcon from "../../assets/homeic.png";
import GraphIcon from "../../assets/chart-line.png";
import CommentIcon from "../../assets/comment.png";
import BullseyeIcon from "../../assets/bullseye.png";

interface SideBarProps {
  show: boolean;
}

export interface MenuItemProps {
  title: string;
  icon?: string;
  active?: boolean;
  submenu?: Omit<MenuItemProps, "submenu">[];
}

const menuItems: MenuItemProps[] = [
  { icon: HomeIcon, title: "Home" },
  {
    icon: GraphIcon,
    title: "Analisys",
    submenu: [
      { title: "Survey report" },
      { title: "Comparison", active: true },
      { title: "Custom polls" },
    ],
  },
  { icon: CommentIcon, title: "Feedback" },
  { icon: BullseyeIcon, title: "Goals" },
];

function SideBar({ show }: SideBarProps) {
  return (
    <div
      style={{
        width: 224,
        marginLeft: show ? 0 : -224,
        transition: "margin-left  0.4s",
      }}
      className="SideBar"
    >
      {menuItems.map((menuItem, index) => (
        <SideBarItem
          key={menuItem.title}
          icon={menuItem.icon}
          title={menuItem.title}
          active={menuItem.active}
          subMenu={menuItem.submenu}
        />
      ))}
    </div>
  );
}

export default SideBar;
