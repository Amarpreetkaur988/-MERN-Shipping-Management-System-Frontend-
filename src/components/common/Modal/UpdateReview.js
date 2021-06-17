import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import "./styles.scss";

const UpdateSpecialty = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showEditModal}
        onHide={props.handleShowEditModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleSubmit}>
            <FormInput
              icon="fa fa-star icon"
              type="text"
              name="rating"
              placeholder="Rating"
              value={props.rating}
              handleChange={props.handleChange}
            />

            <FormInput
              icon="fa fa-user icon"
              type="text"
              name="review"
              placeholder="Review"
              value={props.review}
              handleChange={props.handleChange}
            />

            <div className="form-group">
              <label className="recommended-label">Is Recommended ?</label>
              <VienRadio
                name="recommended"
                text="Yes"
                checked={props.yesBtn}
                handleChange={props.handleRecommendedChange}
              />
              <VienRadio
                name="recommended"
                text="No"
                checked={props.noBtn}
                handleChange={props.handleRecommendedChange}
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

export default UpdateSpecialty;
