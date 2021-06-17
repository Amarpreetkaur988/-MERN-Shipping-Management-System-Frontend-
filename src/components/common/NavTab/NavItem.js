import React from "react";

const NavItem = ({ className, id, href, selected, value, handleClick }) => {
  return (
    <React.Fragment>
      <li class="nav-item" role="presentation">
        <a
          className={`nav-link ${className}`}
          id={id}
          data-bs-toggle="tab"
          href={`#${href}`}
          role="tab"
          aria-controls={href}
          aria-selected={selected}
          onClick={handleClick}
        >
          {value}
        </a>
      </li>
    </React.Fragment>
  );
};

export default NavItem;
