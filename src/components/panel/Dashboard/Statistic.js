import React from "react";

import Icon from "../../common/Icon/Icon";

const Statistics = ({ value, name, icon, size, bgColor }) => {
  return (
    <React.Fragment>
      <div className="statistics" style={{ backgroundColor: bgColor }}>
        <div className="row mx-0">
          <div className="col-md-8">
            <h5>{value}</h5>
            <p>{name}</p>
          </div>
          <div className="col-md-4">
            <Icon icon={icon} size={size} float="right" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Statistics;
