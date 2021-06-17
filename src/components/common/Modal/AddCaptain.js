import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import "./styles.scss";

const AddCaptain = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showAddDoctorModal}
        onHide={props.handleAddDoctorModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {props.title === "Fitness Coach"
              ? "Add Fitness Coach"
              : props.title === "Psychologist"
              ? "Add Psychologist"
              : "Add Doctor"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleAddDoctorSubmit}>
            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="title"
              placeholder="Title"
              value={props.title}
              handleChange={props.handleChange}
            />
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
              value={
                props.title === "Fitness Coach"
                  ? "Add Fitness Coach"
                  : props.title === "Psychologist"
                  ? "Add Psychologist"
                  : "Add Doctor"
              }
              className="btn btn-primary btn-block add-doctor-btn shadow-none"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddCaptain;
