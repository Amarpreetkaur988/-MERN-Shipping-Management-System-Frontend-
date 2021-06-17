import React from "react";

const FilterAppointments = ({ handleAppointmentChange, appointment }) => {
  return (
    <React.Fragment>
      <select
        name="filterAppointments"
        className="form-control shadow-none"
        onChange={(e) => handleAppointmentChange(e.target.value)}
      >
        <option value="All Appointments">All Bookings</option>
        <option value="New Appointments">New Bookings</option>
      </select>
    </React.Fragment>
  );
};

export default FilterAppointments;
