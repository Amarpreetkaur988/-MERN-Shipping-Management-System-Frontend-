import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const YearPicker = ({ startDate, handleYearChange }) => {
  return (
    <React.Fragment>
      <DatePicker
        selected={startDate}
        onChange={(year) => handleYearChange(year)}
        className="form-control shadow-none"
        dateFormat="yyyy"
        showYearPicker
      />
    </React.Fragment>
  );
};

export default YearPicker;
