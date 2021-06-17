import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import "./styles.scss";

const AddQualification = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showAddModal}
        onHide={props.handleAddModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Qualification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleSubmit}>
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
              value="Add"
              className="btn btn-primary btn-block add-specialty-btn shadow-none"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddQualification;
