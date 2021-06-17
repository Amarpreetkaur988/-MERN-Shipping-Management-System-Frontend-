import React from "react";

import FormInput from "../../common/Form-Input/FormInput";
import Button from "../../common/Button/Button";
import VienRadio from "../../common/Radio/Radio";

const ProfileDetails = (props) => {
  return (
    <React.Fragment>
      <h4>Basic Details</h4>
      <div className="row mx-0">
        <div className="col-md-6 px-0">
          <FormInput
            icon="fa fa-user icon"
            size="12"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={props.firstName}
            handleChange={(e) => props.handleChange(e)}
          />
        </div>
        <div className="col-md-6 pr-0">
          <FormInput
            icon="fa fa-user icon"
            size="12"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={props.lastName}
            handleChange={(e) => props.handleChange(e)}
          />
        </div>
      </div>

      {/* <div className="row mx-0">
        <div className="col-md-6 px-0">
          <FormInput
            icon="fa fa-tint icon"
            size="12"
            type="text"
            name="bloodGroup"
            placeholder="Blood Group"
            value={props.bloodGroup}
            handleChange={(e) => props.handleChange(e)}
          />
        </div>
        {props.role === "Admin" && (
          <div className="col-md-6 pr-0">
            <select
              name="role"
              placeholder="Select Role"
              className="form-control shadow-none"
              value={props.role}
              onChange={(e) => props.handleRoleChange(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="SubAdmin">SubAdmin</option>
            </select>
          </div>
        )}
      </div> */}

      <FormInput
        icon="fa fa-phone icon"
        size="12"
        type="number"
        name="phoneNumber"
        placeholder="Phone Number"
        value={props.phoneNumber}
        handleChange={(e) => props.handleChange(e)}
      />

      <FormInput
        icon="fa fa-envelope icon"
        size="12"
        type="email"
        name="email"
        placeholder="Email"
        value={props.email}
        handleChange={(e) => props.handleChange(e)}
      />

      <FormInput
        icon="fa fa-map-marker icon"
        size="12"
        type="text"
        name="address"
        placeholder="Address"
        value={props.address}
        handleChange={(e) => props.handleChange(e)}
      />

      <Button
        value="Update Profile"
        type="submit"
        className="btn btn-primary btn-block update-profile-btn shadow-none"
      />
    </React.Fragment>
  );
};

export default ProfileDetails;
