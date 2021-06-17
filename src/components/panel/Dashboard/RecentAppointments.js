import React, { useState } from "react";
import { Link } from "react-router-dom";

import ViewBookingDetails from "../../common/Modal/ViewBookingDetails";

const RecentAppointments = (props) => {
  const { appointments } = props;
  const [showViewModal, setShowViewModal] = useState(false);
  const [details, setDetails] = useState({});

  const handleModalClick = (details) => {
    setShowViewModal(true);
    setDetails(details);
  };

  const handleViewModalClose = () => {
    setShowViewModal(false);
  };

  return (
    <React.Fragment>
      <div className="recent-appointments">
        <h6>Recent Bookings</h6>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Manager</th>
                <th>Captain</th>
                <th>Hour</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments &&
                appointments.length > 0 &&
                appointments.map((a, index) => (
                  <tr key={a._id}>
                    <td>{index + 1}</td>
                    <td>
                      {a.patient_id &&
                        a.patient_id.basicInfo &&
                        a.patient_id.basicInfo.firstName}
                    </td>
                    <td>
                      {a.doctor_id &&
                        a.doctor_id.basicInfo &&
                        a.doctor_id.basicInfo.firstName}
                    </td>
                    <td>{a.consultation_type}</td>
                    <td>{a.consultation_fee}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>
                      <span className={a.status}>{a.status}</span>
                    </td>
                    <td>
                      <Link to="#" onClick={() => handleModalClick(a)}>
                        <i className="fa fa-eye"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <ViewBookingDetails
        showViewModal={showViewModal}
        setShowViewModal={handleViewModalClose}
        details={details}
      />
    </React.Fragment>
  );
};

export default RecentAppointments;
