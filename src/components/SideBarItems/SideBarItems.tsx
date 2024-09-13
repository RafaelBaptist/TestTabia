import React from "react";
import { MenuItemProps } from "../SideBar/SideBar";
import "./SideBarItems.css";

interface SideBarItemType {
  title: string;
  icon?: string | null;
  active?: boolean;
  subMenu?: MenuItemProps[];
}
const SideBarItem = ({ icon, title, active, subMenu }: SideBarItemType) => {
  return (
    <>
      <div className={`menuItem primary ${active ? "active" : ""}`}>
        {icon ? <img src={icon} /> : null}
        {title}
      </div>

      {subMenu?.map((subMenuItem) => (
        <div
          key={subMenuItem.title}
          className={`menuItem secundary ${subMenuItem.active ? "active" : ""}`}
        >
          {subMenuItem.icon ? <img src={subMenuItem.icon} /> : null}
          {subMenuItem.title}
        </div>
      ))}
    </>
  );
};
export default SideBarItem;
