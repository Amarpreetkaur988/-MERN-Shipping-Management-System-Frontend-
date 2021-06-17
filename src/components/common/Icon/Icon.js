import React from "react";

const Icon = ({ icon, size, float }) => {
  return (
    <div className="icon" style={{ fontSize: size, float: float }}>
      <i className={`fa fa-${icon}`}></i>
    </div>
  );
};

export default Icon;
