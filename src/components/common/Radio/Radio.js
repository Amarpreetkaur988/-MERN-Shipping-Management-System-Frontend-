import React, { memo } from "react";
import { Radio } from "pretty-checkbox-react";
import "pretty-checkbox";

import "./styles.scss";

const VienRadio = ({ name, text, checked, handleChange, className }) => {
  return (
    <React.Fragment>
      <Radio
        animation="pulse"
        shape="round"
        variant="thick"
        color="primary-o"
        name={name}
        value={text}
        checked={checked}
        className={className}
        onChange={() => handleChange(text)}
      >
        {text}
      </Radio>
    </React.Fragment>
  );
};

export default memo(VienRadio);
