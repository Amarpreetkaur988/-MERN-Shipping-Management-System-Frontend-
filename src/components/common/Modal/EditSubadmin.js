import React from "react";
import { Modal, Form } from "react-bootstrap";

import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import Button from "../Button/Button";
import "./styles.scss";

const EditSubadmin = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showEditModal}
        onHide={props.handleEditModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Subadmin Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmitCapture={props.handleSubmit}>
            <div className="row mx-0">
              <div className="col-md-6 px-0">
                <FormInput
                  icon="fa fa-user icon"
                  size="15px"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={props.firstName}
                  handleChange={props.handleChange}
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
                  handleChange={props.handleChange}
                />
              </div>
            </div>

            <div className="row mx-0">
              <div className="col-md-6 px-0">
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
              </div>
              <div className="col-md-6 pr-0">
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

            <div className="form-group">
              <label className="gender-label">Gender</label>
              <VienRadio
                name="gender"
                text="Male"
                checked={props.maleRadioBtn}
                handleChange={props.handleRadioChange}
              />
              <VienRadio
                name="gender"
                text="Female"
                checked={props.femaleRadioBtn}
                handleChange={props.handleRadioChange}
              />
            </div>

            <div className="row mx-0">
              <div className="col-md-6 px-0">
                <FormInput
                  icon="fa fa-globe icon"
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="form-control shadow-none"
                  value={props.country}
                  handleChange={props.handleChange}
                />
              </div>
              <div className="col-md-6 pr-0">
                <FormInput
                  icon="fa fa-street-view icon"
                  type="text"
                  name="state"
                  placeholder="State"
                  className="form-control shadow-none"
                  value={props.state}
                  handleChange={props.handleChange}
                />
              </div>
            </div>

            <div className="row mx-0">
              <div className="col-md-6 px-0">
                <FormInput
                  icon="fa fa-building icon"
                  size="15px"
                  type="text"
                  name="city"
                  placeholder="City"
                  className="form-control shadow-none"
                  value={props.city}
                  handleChange={props.handleChange}
                />
              </div>
              <div className="col-md-6 pr-0">
                <FormInput
                  icon="fa fa-map-pin icon"
                  type="text"
                  name="pin"
                  placeholder="Pin Code"
                  className="form-control shadow-none"
                  value={props.pin}
                  handleChange={props.handleChange}
                />
              </div>
            </div>

            <FormInput
              icon="fa fa-map-marker icon"
              type="text"
              name="address"
              placeholder="Address"
              className="form-control shadow-none"
              value={props.address}
              handleChange={props.handleChange}
            />

            <div className="form-group">
              <label className="status-label">Status</label>
              <VienRadio
                name="status"
                text="Active"
                checked={props.activeRadioBtn}
                handleChange={props.handleStatusChange}
              />
              <VienRadio
                name="status"
                text="Suspend"
                checked={props.suspendRadioBtn}
                handleChange={props.handleStatusChange}
              />
            </div>

            <div className="form-group mb-0">
              <Button
                type="submit"
                value="Update Details"
                className="btn btn-primary btn-block update-details-btn shadow-none"
              />
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default EditSubadmin;
