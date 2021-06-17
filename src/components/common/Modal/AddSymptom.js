import React from "react";
import { Modal } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import "./styles.scss";

const AddSymptom = (props) => {
  return (
    <React.Fragment>
      <Modal show={props.showModal} onHide={props.handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Symptom</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleSubmit}>
            <div className="profile-img">
              <img
                src={props.imagePreview}
                alt="profile-pic"
                id="edit-nutrition-img"
              />

              <div className="text-center mx-auto">
                <label className="upload-image" htmlFor="upload-button">
                  Upload Image
                </label>
              </div>

              <input
                id="upload-button"
                name="image"
                type="file"
                accept="image/*"
                onChange={props.handleImageChange}
              />
            </div>

            <FormInput
              icon="fa fa-user-md icon"
              type="text"
              name="symptom"
              placeholder="Symptom"
              value={props.value}
              handleChange={props.handleChange}
            />

            <div className="form-group">
              <Multiselect
                options={props.specialities}
                onSelect={props.handleSpecialitySelect}
                placeholder="Select Specialities"
                displayValue="name"
              />
            </div>

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
              className="btn btn-primary btn-block add-symptom-btn shadow-none"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddSymptom;
