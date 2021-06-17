import React from "react";
import { SubMenu } from "react-pro-sidebar";

import Icon from "../Icon/Icon";

const GoSubMenu = ({ collapsed, name, icon, children }) => {
  return (
    <React.Fragment>
      <SubMenu
        title={collapsed ? "" : name}
        icon={<Icon icon={icon} size={collapsed ? "20px" : "14px"} />}
      >
        {children}
      </SubMenu>
    </React.Fragment>
  );
};

export default GoSubMenu;
