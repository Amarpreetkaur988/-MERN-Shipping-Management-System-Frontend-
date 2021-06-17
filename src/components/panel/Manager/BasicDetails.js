import React from "react";
import moment from "moment";
import { api_url } from "../../../utils/api";

const BasicDetails = (props) => {
  let { details } = props;

  let image =
  details && details.image ? details.image : api_url + "/default.png";

  return (
    <React.Fragment>
      <img src={image} alt="profile-img" className="details-image" />

      <h1>
        {details ? details.firstName : ""}{" "}
        {details ? details.lastName : ""}
      </h1>
      <h6>
        {details ? details.email : ""}{" "}
        <sup
          className={
            details
              ? details.isEmailVerified
                ? "verified"
                : "unverified"
              : ""
          }
        >
          {details
            ? details.isEmailVerified
              ? "verified"
              : "unverified"
            : ""}
        </sup>
      </h6>
      <h6>
        {details ? details.phoneNumber : ""}{" "}
       
      </h6>
      <p>{details ? moment(details.created_at).format("MMM DD, YYYY") : ""}</p>
    </React.Fragment>
  );
};

export default BasicDetails;
