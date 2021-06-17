import React, {useState} from "react";
import { Link } from "react-router-dom";
import LazyLoadImage from "../../common/Lazy/Image";
import moment from "moment";

import { api_url } from "../../../utils/api";

const Vessels = (props) => {
  const { vessels } = props;

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
            <th>Vessel Name</th>
            <th>Captain</th>
            <th>vessel Type</th>
            <th>Vessel Model</th>
            <th>Year of Manufacture</th>
            <th>Date Registered</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.vessels &&
            props.vessels.length > 0 &&
            props.vessels.map((v, index) => (
              <tr key={v._id}>
                <td>{index + 1}</td>
                <td>
                  <LazyLoadImage
                    src={v.image || api_url + "/default.png"}
                    alt="profile"
                  />
                </td>
                <td>{v.vesselName}</td>
                <td>{v.captain}</td>
                <td>{v.vesselType}</td>
                <td>{v.vesselModel}</td>
                <td>{moment(v.created_at).format("MMM DD, YYYY")}</td>
                <td>
                  <span
                    className={
                      v.isVesselBlocked ? "suspended" : "active"
                    }
                  >
                    {v.isVesselBlocked ? "suspended" : "active"}
                  </span>
                </td>
                <td>
                  <Link to="#" onClick={() => handleClick(v)}>
                    <i className="fa fa-eye">view</i>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Vessels;
