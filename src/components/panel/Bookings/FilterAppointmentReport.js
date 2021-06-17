import React from "react";

const FilterAppointmentReport = ({ handleAppointmentReportChange }) => {
  return (
    <React.Fragment>
      <select
        name="filterAppointmentReport"
        className="form-control shadow-none"
        onChange={(e) => handleAppointmentReportChange(e.target.value)}
      >
        <option value="">Filter by</option>
        <option value="Day">Day</option>
        <option value="Month">Month</option>
        <option value="Year">Year</option>
      </select>
    </React.Fragment>
  );
};

export default FilterAppointmentReport;
