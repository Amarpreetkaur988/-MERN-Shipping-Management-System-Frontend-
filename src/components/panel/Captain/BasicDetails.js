import React from "react";
import moment from "moment";
import { api_url } from "../../../utils/api";

const BasicDetails = (props) => {
  let { data } = props;

  let basicInfo = data && data;
  let image =
  basicInfo.image ? basicInfo.image : api_url + "/default.png";

  return (
    <React.Fragment>
      <img src={image} alt="profile-img" className="details-image" />

      <span
        className={
          data && data.isVerified && data.isVerified
            ? "Blocked"
            : "Not Blocked"
        }
      >
      
      </span>

      {/* <h6 className="mt-3"># {data ? data._id : ""}</h6> */}
      <h1>{basicInfo && basicInfo.username}</h1>
      <h6>
        {basicInfo && basicInfo.email}{" "}
        <sup
          className={
            basicInfo
              ? basicInfo.isEmailVerified
                ? "verified"
                : "unverified"
              : ""
          }
        >
          {basicInfo
            ? basicInfo.isEmailVerified
              ? "verified"
              : "unverified"
            : ""}
        </sup>
      </h6>
      <h6>
        +{basicInfo && basicInfo.countryCode}{" "}
        {basicInfo && basicInfo.phoneNumber}{" "}
        <sup
          className={
            basicInfo
              ? basicInfo.isPhoneNumberVerified
                ? "verified"
                : "unverified"
              : ""
          }
        >
          {basicInfo
            ? basicInfo.isPhoneNumberVerified
              ? "verified"
              : "unverified"
            : ""}
        </sup>
      </h6>

      <h6>{data.experience ? data.experience + " experience" : ""}</h6>
      <p>{moment(basicInfo && basicInfo.created_at).format("MMM DD, YYYY")}</p>
    </React.Fragment>
  );
};

export default BasicDetails;
