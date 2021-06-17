import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SubMenuItem = ({ name, link, handleClick }) => {
  return (
    <React.Fragment>
      <MenuItem>
        {name} <Link to={link} onClick={handleClick} />
      </MenuItem>
    </React.Fragment>
  );
};

export default SubMenuItem;
