import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import FormInput from "../../common/Form-Input/FormInput";
import Button from "../../common/Button/Button";
import Textarea from "../../common/Textarea/Textarea";
import VienRadio from "../../common/Radio/Radio";


const Form = (props) => {
  

  return (
    <React.Fragment>
      <form onSubmit={props.handleDetailsUpdate}>
        <div className="row mx-0">
          <div className="col-md-4 pl-0">
            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="username"
              placeholder="Username"
              value={props.username}
              handleChange={(e) => props.setUsername(e.target.value)}
            />
          </div>
          <div className="col-md-4 pl-0">
            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="email"
              placeholder="Email"
              value={props.email}
              handleChange={(e) => props.setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
          <Textarea
            icon="fa fa-file-text icon"
            size="13px"
            name="title"
            rows="3"
            placeholder="Title"
            value={props.title}
            handleChange={(e) => props.setTitle(e.target.value)}
          />
        </div>
         
        </div>

        <div className="row mx-0">
          <div className="col-md-4 pl-0">
            <DatePicker
              selected={props.dob}
              onChange={(date) => props.setDob(date)}
              onSelect={(date) => props.setDob(date)}
              className="form-control shadow-none w-100"
            />
          </div>
          <div className="col-md-4 pl-0">
            <FormInput
              icon="fa fa-envelope icon"
              size="13px"
              type="text"
              name="nickName"
              placeholder="Nick Name"
              className="form-control shadow-none"
              value={props.nickName}
              handleChange={(e) => props.setNickName(e.target.value)}
            />
          </div>
          <div className="col-md-4 pr-0">
            <FormInput
              icon="fa fa-phone icon"
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="form-control shadow-none"
              value={props.phone}
              handleChange={(e) => props.setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-4 pr-0">
            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="citizenNo"
              placeholder="Citizen No"
              value={props.citizenNo}
              handleChange={(e) => props.setCitizenNo(e.target.value)}
            />
          </div>

        
 
        <div className="row mx-0">
          <div className="col-md-3 pl-0">
            <FormInput
              icon="fa fa-globe icon"
              size="13px"
              type="text"
              name="dateOfAssignment"
              placeholder="Date of assignment"
              className="form-control shadow-none"
              value={props.dateOfAssignment}
              handleChange={(e) => props.setDateOfAssignment(e.target.value)}
            />
          </div>
          <div className="col-md-3 pr-0">
            <FormInput
              icon="fa fa-street-view icon"
              type="text"
              name="documentId"
              placeholder="Document Id"
              className="form-control shadow-none"
              value={props.documentId}
              handleChange={(e) => props.setDocumentId(e.target.value)}
            />
          </div>
          <div className="col-md-3 pr-0">
            <FormInput
              icon="fa fa-building icon"
              type="text"
              name="licenseNo"
              placeholder="License No"
              className="form-control shadow-none"
              value={props.licenseNo}
              handleChange={(e) => props.setLicenseNo(e.target.value)}
            />
          </div>
          <div className="col-md-3 pr-0">
            <FormInput
              icon="fa fa-map-pin icon"
              type="text"
              name="nationality"
              placeholder="Nationality"
              className="form-control shadow-none"
              value={props.nationality}
              handleChange={(e) => props.setNationality(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <FormInput
            icon="fa fa-map-marker icon"
            type="text"
            name="placeOfBirth"
            placeholder="Place of birth"
            className="form-control shadow-none"
            value={props.placeOfBirth}
            handleChange={(e) => props.setPlaceOfBirth(e.target.value)}
          />
        </div>
        
        <div className="row mx-0">
          <div className="col-md-4 pl-0">
            <FormInput
              icon="fa fa-user icon"
              size="13px"
              type="text"
              name="staffRole"
              placeholder="Staff Role"
              className="form-control shadow-none"
              value={props.staffRole}
              handleChange={(e) => props.setStaffRole(e.target.value)}
              disabled={true}
              readOnly={true}
            />
          </div>
        </div>

      </form>
    </React.Fragment>
  );
};

export default Form;
