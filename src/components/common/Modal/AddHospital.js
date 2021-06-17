import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import "./styles.scss";

const AddHospital = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showAddHospitalModal}
        onHide={props.handleAddHospitalModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Hospital</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleAddHospitalSubmit}>
            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={props.firstName}
              handleChange={props.handleChange}
            />
            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={props.lastName}
              handleChange={props.handleChange}
            />

            <FormInput
              icon="fa fa-envelope icon"
              size="13px"
              type="email"
              name="email"
              placeholder="Email"
              className="form-control shadow-none"
              value={props.email}
              handleChange={props.handleChange}
            />

            <div className="row mx-0">
              <div className="col-md-5 pl-0">
                <FormInput
                  icon="fa fa-phone icon"
                  type="text"
                  name="code"
                  placeholder="Code eg. +91"
                  className="form-control shadow-none"
                  value={props.code}
                  handleChange={props.handleChange}
                />
              </div>
              <div className="col-md-7 px-0">
                <FormInput
                  icon="fa fa-phone icon"
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="form-control shadow-none"
                  value={props.phoneNumber}
                  handleChange={props.handleChange}
                />
              </div>
            </div>

            <Button
              type="submit"
              value="Add Hospital"
              className="btn btn-primary btn-block add-doctor-btn shadow-none"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddHospital;
