import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import "./styles.scss";

const AddCollege = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showAddModal}
        onHide={props.handleAddModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add College</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleSubmit}>
            <FormInput
              icon="fa fa-building icon"
              type="text"
              name="name"
              placeholder="College Name"
              value={props.name}
              handleChange={props.handleChange}
            />

            <FormInput
              icon="fa fa-globe icon"
              type="text"
              name="country"
              placeholder="Country"
              value={props.country}
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

export default AddCollege;
