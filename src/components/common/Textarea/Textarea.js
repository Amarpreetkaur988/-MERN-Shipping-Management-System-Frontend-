import React from "react";

const Textarea = (props) => {
  return (
    <React.Fragment>
      <div className="form-group input-icons">
        <i className={props.icon} style={{ fontSize: props.size }}></i>
        <textarea
          name={props.name}
          rows={props.rows}
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

export default Textarea;
