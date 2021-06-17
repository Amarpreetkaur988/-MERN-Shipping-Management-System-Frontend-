import React, { memo } from "react";
import { Checkbox } from "pretty-checkbox-react";
import "pretty-checkbox";

import "./styles.scss";

const VienCheckbox = ({ name, text, checked, handleChange }) => {
  return (
    <React.Fragment>
      <Checkbox
        animation="pulse"
        shape="curved"
        variant="thick"
        color="primary-o"
        name={name}
        value={text}
        checked={checked}
        onChange={() => handleChange(text)}
      >
        {text}
      </Checkbox>
    </React.Fragment>
  );
};

export default memo(VienCheckbox);
