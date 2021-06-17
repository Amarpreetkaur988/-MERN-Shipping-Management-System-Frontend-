import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MonthPicker = ({ startDate, handleMonthChange }) => {
  return (
    <React.Fragment>
      <DatePicker
        selected={startDate}
        onChange={(month) => handleMonthChange(month)}
        className="form-control shadow-none"
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
    </React.Fragment>
  );
};

export default MonthPicker;
