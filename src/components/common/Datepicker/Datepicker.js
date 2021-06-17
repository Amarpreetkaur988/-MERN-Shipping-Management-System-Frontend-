import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({ startDate, placeholder, handleDateChange }) => {
  return (
    <React.Fragment>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        className="form-control shadow-none"
        placeholderText={placeholder}
      />
    </React.Fragment>
  );
};

export default Datepicker;
