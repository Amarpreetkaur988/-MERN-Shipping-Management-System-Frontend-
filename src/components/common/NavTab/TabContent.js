import React from "react";

const TabContent = ({ className, id, label, children }) => {
  return (
    <React.Fragment>
      <div
        className={`tab-pane tab-content-item fade ${className}`}
        id={id}
        role="tabpanel"
        aria-labelledby={label}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default TabContent;
