import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import ViewBookingDetails from "../../common/Modal/ViewBookingDetails";

const ManagerHistory = (props) => {
  let [showViewModal, setShowViewModal] = useState(false);
  let [data, setData] = useState({});

  const handleClick = (data) => {
    setShowViewModal(true);
    setData(data);
  };

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Consultation</th>
            <th>Fee</th>
            <th>Status</th>
            <th>Date/Time</th>
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
                <td>
                  <span className={a.status.toLowerCase()}>
                    {a.status.toLowerCase()}
                  </span>
                </td>
                <td>
                  {moment(a.created_at).format("MMM DD, YYYY")}/{a.time}
                </td>
                <td>
                  <Link to="#" onClick={() => handleClick(a)}>
                    <i className="fa fa-eye"></i>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <ViewBookingDetails
        showViewModal={showViewModal}
        setShowViewModal={setShowViewModal}
        details={data}
      />
    </React.Fragment>
  );
};

export default ManagerHistory;
