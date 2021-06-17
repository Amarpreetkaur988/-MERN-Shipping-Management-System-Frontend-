import React from "react";
import loader from "./loader.gif";

import "./styles.scss";

export default () => {
  return (
    <div className="loader-container">
      <img src={loader} alt="Loading..." />
    </div>
  );
};
