import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import FormInput from "../../common/Form-Input/FormInput";
import Button from "../../common/Button/Button";

const Form = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.handleDetailsUpdate}>
        <div className="row mx-0">
          <div className="col-md-6 pl-0">
            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={props.firstName}
              handleChange={(e) => props.setFirstName(e.target.value)}
            />
          </div>
          <div className="col-md-6 pr-0">
            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={props.lastName}
              handleChange={(e) => props.setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-md-6 pl-0">
            <FormInput
              icon="fa fa-envelope icon"
              size="13px"
              type="email"
              name="email"
              placeholder="Email"
              className="form-control shadow-none"
              value={props.email}
              handleChange={(e) => props.setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6 pr-0">
            <FormInput
              icon="fa fa-phone icon"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="form-control shadow-none"
              value={props.phone}
              handleChange={(e) => props.setPhone(e.target.value)}
            />
          </div>
        </div>


        <div className="row mx-0">
          <div className="col-md-3 pl-0">
            <FormInput
              icon="fa fa-globe icon"
              size="13px"
              type="text"
              name="country"
              placeholder="Country"
              className="form-control shadow-none"
              value={props.companyName}
              handleChange={(e) => props.setCompanyName(e.target.value)}
            />
          </div>
          <div className="col-md-3 pr-0">
            <FormInput
              icon="fa fa-street-view icon"
              type="text"
              name="state"
              placeholder="State"
              className="form-control shadow-none"
            //  value={props.address.state}
              handleChange={(e) => props.setState(e.target.value)}
            />
          </div>
          <div className="col-md-3 pr-0">
            <FormInput
              icon="fa fa-building icon"
              type="text"
              name="city"
              placeholder="City"
              className="form-control shadow-none"
              //value={props.address.city}
              handleChange={(e) => props.setCity(e.target.value)}
            />
          </div>
         
        </div>

        <div className="form-group">
          <FormInput
            icon="fa fa-map-marker icon"
            type="text"
            name="address"
            placeholder="Address"
            className="form-control shadow-none"
            //value={props.address.address}
            handleChange={(e) => props.setAddress(e.target.value)}
          />
        </div>

        <div className="row mx-0">
          <div className="col-md-6 pl-0">
            <FormInput
              icon="fa fa-location-arrow icon"
              size="13px"
              type="text"
              name="lat"
              placeholder="Latitude"
              className="form-control shadow-none"
              value={props.lat}
              handleChange={(e) => props.setLat(e.target.value)}
              disabled={true}
              readOnly={true}
            />
          </div>
          <div className="col-md-6 pr-0">
            <FormInput
              icon="fa fa-location-arrow icon"
              type="text"
              name="lng"
              placeholder="Longitude"
              className="form-control shadow-none"
              value={props.lng}
              handleChange={(e) => props.setLng(e.target.value)}
              disabled={true}
              readOnly={true}
            />
          </div>
        </div>

        
        <div className="form-group mb-0">
          <Button
            value="Update Details"
            className="btn btn-primary btn-block update-details-btn shadow-none"
            type="submit"
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
