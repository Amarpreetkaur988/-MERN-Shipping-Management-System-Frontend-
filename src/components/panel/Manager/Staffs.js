import React, { useState } from "react";
import { Link } from "react-router-dom";

import ViewStaff from "../../common/Modal/ViewStaff";

const Staffs = (props) => {
  const { staffs } = props;

  const [showViewModal, setShowViewModal] = useState(false);
  const [details, setDetails] = useState({});

  const handleClick = (details) => {
    setShowViewModal(true);
    setDetails(details);
  };

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Staff</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {console.log("sstaffs=", props.staffs)}
          {props.staffs &&
            props.staffs.length > 0 &&
            props.staffs.map((r, index) => (
              <tr key={r._id}>
                <td>{index + 1}</td>
                <td>
                  {r.username ? r.username : r.nickName}
                </td>
              
                <td>
                  {r.email ? r.email : "-"}
                </td>
                <td>{r.phone}</td>
                <td>
                  {r.staffRole ? r.staffRole : "-"}
                </td>
                <td>
                  <span
                    className={r.appointment_id ? r.appointment_id.status : "-"}
                  >
                    {r.appointment_id ? r.appointment_id.status : "-"}
                  </span>
                </td>
                <td>
                  <Link to="#" onClick={() => handleClick(r)}>
                    <i className="fa fa-eye">view</i>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <ViewStaff
        showViewModal={showViewModal}
        setShowViewModal={setShowViewModal}
        details={details}
      />
    </React.Fragment>
  );
};

export default Staffs;
