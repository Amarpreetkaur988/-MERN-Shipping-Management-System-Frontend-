import React from "react";

const FormInput = (props) => {
  return (
    <React.Fragment>
      <div className="form-group input-icons">
        <i className={props.icon} style={{ fontSize: props.size }}></i>
        <input
          type={props.type}
          name={props.name}
          className="form-control shadow-none"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleChange}
          readOnly={props.readOnly}
        />
      </div>
    </React.Fragment>
  );
};

export default FormInput;
