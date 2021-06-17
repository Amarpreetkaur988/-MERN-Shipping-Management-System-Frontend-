import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";
import Icon from "../Icon/Icon";

const MainMenuItem = ({ icon, collapsed, name, link = "", handleClick }) => {
  return (
    <React.Fragment>
      <MenuItem icon={<Icon icon={icon} size={collapsed ? "20px" : "14px"} />}>
        {collapsed ? "" : name}
        <Link to={link} onClick={handleClick} />
      </MenuItem>
    </React.Fragment>
  );
};

export default MainMenuItem;
