import React, { useState } from "react";
import { Link } from "react-router-dom";

import ViewBookingDetails from "../../common/Modal/ViewBookingDetails";

const VesselHistory = (props) => {
  const { data } = props;

  let [showViewModal, setShowViewModal] = useState(false);
  let [details, setDetails] = useState({});

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
            <th>Vessel Name</th>
            <th>MMSI</th>
            <th>Vessel Type</th>
            <th>IMO</th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((el, index) => (
              <tr key={el._id}>
                <td>{index + 1}</td>
                <td>
                  {el && el.vesselId
                    ? el.vesselId.vesselName : ''
                  }
                </td>
                <td>
                  {el && el.vesselId 
                    ? el.vesselId.vesselMMSI
                    : "-"}
                </td>
                <td>{el && el.vesselId ? el.vesselId.vesselType : '-'}</td>
                <td>
                  <span className={el && el.status}>{el && el.vesselId ? el.vesselId.serialNo: '-'}</span>
                </td>
                <td>
                  {el && el.date} / {el && el.time}
                </td>
                <td>
                  <Link to="#" onClick={() => handleClick(el)}>
                    <i className="fa fa-eye"></i>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* <ViewBookingDetails
        showViewModal={showViewModal}
        setShowViewModal={setShowViewModal}
        details={details}
      /> */}
    </React.Fragment>
  );
};

export default VesselHistory;
