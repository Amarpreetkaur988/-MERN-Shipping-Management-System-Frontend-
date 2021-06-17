import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import Textarea from "../Textarea/Textarea";
import "./styles.scss";

const AddSpecialty = (props) => {
  return (
    <React.Fragment>
      <Modal show={props.showModal} onHide={props.handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Specialty</Modal.Title>
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
              name="specialty"
              placeholder="Specialty"
              value={props.value}
              handleChange={props.handleChange}
            />

            {props.healthCoachBtn && (
              <Textarea
                icon="fa fa-info icon"
                name="info"
                type="text"
                rows="4"
                placeholder="Info"
                value={props.info}
                handleChange={props.handleInfoChange}
              />
            )}

            <div className="form-group">
              <label className="type-label">Type</label>
              <VienRadio
                name="type"
                text="Doctor"
                checked={props.doctorBtn}
                handleChange={props.handleTypeChange}
              />
              <VienRadio
                name="type"
                text="Health Coach"
                checked={props.healthCoachBtn}
                handleChange={props.handleTypeChange}
              />
            </div>

            <div className="form-group">
              <label className="sub-type-label">Sub-type</label>
              <VienRadio
                name="sub-type"
                className="d-block mt-3"
                text="None"
                checked={props.noneBtn}
                handleChange={props.handleSubTypeChange}
              />
              <VienRadio
                name="sub-type"
                className="d-block mt-3"
                text="Psychologist"
                checked={props.psychologistBtn}
                handleChange={props.handleSubTypeChange}
              />
              <VienRadio
                name="sub-type"
                className="d-block mt-3"
                text="Fitness Coach"
                checked={props.fitnessCoachBtn}
                handleChange={props.handleSubTypeChange}
              />
              <VienRadio
                name="sub-type"
                className="d-block mt-3"
                text="Nutritionist"
                checked={props.nutritionistBtn}
                handleChange={props.handleSubTypeChange}
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
              className="btn btn-primary btn-block add-specialty-btn shadow-none"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddSpecialty;
