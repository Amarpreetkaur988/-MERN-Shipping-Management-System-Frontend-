import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Table = (props) => {
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Manager</th>
            <th>Staff</th>
            {/* <th>Consultation</th> */}
            <th>Vessel</th>
            {/* <th>Category</th> */}
            {/* <th>Session</th> */}
            <th>Status</th>
            <th>Date / Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.appointments &&
            props.appointments.length > 0 &&
            props.appointments.map((a, index) => (
              <tr key={a._id}>
                <td>{index + 1}</td>
                <td>
                  {a.patient_id.basicInfo.firstName}{" "}
                  {a.patient_id.basicInfo.lastName}
                </td>
                <td>
                  {a.doctor_id.basicInfo.firstName}{" "}
                  {a.doctor_id.basicInfo.lastName}
                </td>
                <td>{a.consultation_type}</td>
                <td>{a.consultation_fee}</td>
                <td>{a.category || "-"}</td>
                <td>{a.session || "-"}</td>
                <td>
                  <span className={a.status}>{a.status}</span>
                </td>
                <td>
                  {a.date} / {a.time}
                </td>
                <td>
                  <Link to="#" onClick={() => props.showAppointmentDetails(a)}>
                    <i className="fa fa-eye"></i>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
