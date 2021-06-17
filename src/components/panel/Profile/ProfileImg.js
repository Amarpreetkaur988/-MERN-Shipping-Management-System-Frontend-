import React from "react";
import moment from "moment";

import LazyLoadImage from "../../common/Lazy/Image";

const ProfileImg = (props) => {
  return (
    <React.Fragment>
      <LazyLoadImage src={props.imagePreview} alt="profile-pic" />

      <div className="text-center mx-auto">
        <label htmlFor="upload-button">Upload Image</label>
      </div>

      <input
        id="upload-button"
        name="image"
        type="file"
        accept="image/*"
        onChange={props.handleImageChange}
      />

      <h4>
        {props.firstName} {props.lastName}
      </h4>
      <p>
        <i className="fa fa-phone"></i> +91 {props.phoneNumber}
      </p>
      <p>
        <i className="fa fa-envelope"></i> {props.email}
      </p>
      <p>
        <i className="fa fa-calendar"></i>{" "}
        {moment(props.created_at).format("MMM DD, YYYY")}
      </p>
    </React.Fragment>
  );
};

export default ProfileImg;
