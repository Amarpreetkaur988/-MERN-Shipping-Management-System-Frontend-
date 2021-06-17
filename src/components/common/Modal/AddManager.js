import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import "./styles.scss";

const AddManager = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showAddManagerModal}
        onHide={props.handleAddManagerModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleAddManagerSubmit}>
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

            <Button
              type="submit"
              value="Add Manager"
              className="btn btn-primary btn-block add-patient-btn shadow-none"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddManager;
