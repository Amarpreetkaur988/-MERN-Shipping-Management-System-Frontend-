import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import TextArea from "../Textarea/Textarea";
import "./styles.scss";

const EditNutrition = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showEditNutritionModal}
        onHide={props.handleEditNutritionModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Nutrition Diet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleEditNutritionSubmit}>
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
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="name"
              placeholder="Diet Name"
              value={props.name}
              handleChange={props.handleChange}
            />

            <div className="row mx-0">
              <div className="col-md-4 pl-0">
                <FormInput
                  icon="fa fa-user icon"
                  size="15px"
                  type="number"
                  name="qty"
                  placeholder="Quantity"
                  value={props.qty}
                  handleChange={props.handleChange}
                />
              </div>
              <div className="col-md-4 px-0">
                <FormInput
                  icon="fa fa-user icon"
                  size="15px"
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={props.age}
                  handleChange={props.handleChange}
                />
              </div>
              <div className="col-md-4 pr-0">
                <FormInput
                  icon="fa fa-user icon"
                  size="15px"
                  type="number"
                  name="calories"
                  placeholder="Calories"
                  value={props.calories}
                  handleChange={props.handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="gender-label">Gender</label>
              <VienRadio
                name="gender"
                text="Male"
                checked={
                  props.maleRadioBtn ||
                  (props.gender && props.gender.toLowerCase() === "male")
                }
                handleChange={props.handleGenderChange}
              />
              <VienRadio
                name="gender"
                text="Female"
                checked={
                  props.femaleRadioBtn ||
                  (props.gender && props.gender.toLowerCase() === "female")
                }
                handleChange={props.handleGenderChange}
              />
            </div>

            <div className="form-group">
              <label className="gender-label">Status</label>
              <VienRadio
                name="status"
                text="Active"
                checked={
                  props.activeRadioBtn ||
                  (props.status && props.status.toLowerCase() === "active")
                }
                handleChange={props.handleStatusChange}
              />
              <VienRadio
                name="status"
                text="Inactive"
                checked={
                  props.inactiveRadioBtn ||
                  (props.status && props.status.toLowerCase() === "inactive")
                }
                handleChange={props.handleStatusChange}
              />
            </div>

            <div className="row mx-0">
              <div className="col-md-6 pl-0">
                <FormInput
                  icon="fa fa-user icon"
                  size="15px"
                  type="number"
                  name="carbs"
                  placeholder="Carbs"
                  value={props.carbs}
                  handleChange={props.handleChange}
                />
              </div>
              <div className="col-md-6 pr-0">
                <FormInput
                  icon="fa fa-user icon"
                  size="15px"
                  type="number"
                  name="protein"
                  placeholder="Protein"
                  value={props.protein}
                  handleChange={props.handleChange}
                />
              </div>
            </div>

            <div className="row mx-0">
              <div className="col-md-6 pl-0">
                <FormInput
                  icon="fa fa-user icon"
                  size="15px"
                  type="number"
                  name="fat"
                  placeholder="Fat"
                  value={props.fat}
                  handleChange={props.handleChange}
                />
              </div>
              <div className="col-md-6 pr-0">
                <FormInput
                  icon="fa fa-user icon"
                  size="15px"
                  type="number"
                  name="calcium"
                  placeholder="Calcium"
                  value={props.calcium}
                  handleChange={props.handleChange}
                />
              </div>
            </div>

            <TextArea
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="description"
              placeholder="Diet Description"
              rows="6"
              value={props.description}
              handleChange={props.handleChange}
            />

            <Button
              type="submit"
              className="btn nutrition-update-btn shadow-none"
              value="Update"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default EditNutrition;
