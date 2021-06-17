import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import "./styles.scss";

const UpdateQualification = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showUpdateModal}
        onHide={props.handleUpdateModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Qualification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleUpdateSubmit}>
            <FormInput
              icon="fa fa-user-md icon"
              type="text"
              name="text"
              placeholder="Qualification"
              value={props.text}
              handleChange={props.handleChange}
            />

            <div className="form-group">
              <label className="status-label">Status</label>
              <VienRadio
                name="status"
                text="Active"
                checked={props.activeBtn}
                handleChange={props.handleRadioChange}
              />
              <VienRadio
                name="status"
                text="Inactive"
                checked={props.inactivebtn}
                handleChange={props.handleRadioChange}
              />
            </div>

            <Button
              type="submit"
              value="Update"
              className="btn btn-primary btn-block add-specialty-btn shadow-none"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default UpdateQualification;
