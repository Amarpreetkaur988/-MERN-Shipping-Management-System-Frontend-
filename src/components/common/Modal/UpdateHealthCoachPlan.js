import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import TextArea from "../Textarea/Textarea";
import "./styles.scss";

const UpdateHealthCoachPlans = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showUpdateCoachSubscriptionModal}
        onHide={props.handleUpdateCoachSubscriptionModalClose}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Health Coach Subscription Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleCoachSubmit}>
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

            <div className="form-group">
              <label className="plan-for-label">Plan For</label>
              <VienRadio
                name="plan-for"
                text="Nutritionist"
                checked={props.planForNutritionist}
                handleChange={props.handleCoachPlanForChange}
              />
              <VienRadio
                name="plan-for"
                text="Fitness Trainer"
                checked={props.planForFitnessTrainer}
                handleChange={props.handleCoachPlanForChange}
              />
              <VienRadio
                name="plan-for"
                text="Psychologist"
                checked={props.planForPsychologist}
                handleChange={props.handleCoachPlanForChange}
              />
            </div>

            <div className="row mx-0">
              <div className="col-md-6 px-0">
                <FormInput
                  icon="fa fa-user icon"
                  size="15px"
                  type="number"
                  name="amount"
                  placeholder="Plan Amount"
                  value={props.amount}
                  handleChange={props.handleChange}
                />
              </div>
              <div className="col-md-6 pr-0">
                <FormInput
                  icon="fa fa-user icon"
                  size="15px"
                  type="number"
                  name="duration"
                  placeholder="Plan Duration"
                  value={props.duration}
                  handleChange={props.handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <TextArea
                icon="fa fa-sticky-note icon"
                size="12"
                name="details"
                rows="4"
                placeholder="Details"
                value={props.details}
                handleChange={props.handleChange}
              />
            </div>

            <div className="form-group">
              <label className="status-label">Status</label>
              <VienRadio
                name="status"
                text="Active"
                checked={props.activeBtn}
                handleChange={props.handleStatusChange}
              />
              <VienRadio
                name="status"
                text="Inactive"
                checked={props.inactiveBtn}
                handleChange={props.handleStatusChange}
              />
            </div>

            <label>Plan Limitations</label>

            <div className="row mx-0">
              <div className="col-md-6 pl-0">
                <h6>Total Video Consultations with Personal Coach</h6>
              </div>
              <div className="col-md-6 px-0">
                <FormInput
                  icon="fa fa-user icon"
                  size="15px"
                  type="number"
                  name="videoConsultation"
                  placeholder="Total Video Consultations"
                  value={props.videoConsultation}
                  handleChange={props.handleChange}
                />
              </div>
            </div>

            <div className="row mx-0">
              <div className="col-md-6 pl-0">
                <h6>Schedule Chat Session</h6>
              </div>
              <div className="col-md-6 px-0">
                <VienRadio
                  name="scheduleChats"
                  text="Yes"
                  checked={props.scheduleChatYesBtn}
                  handleChange={props.handleScheduleChatsChange}
                />
                <VienRadio
                  name="scheduleChats"
                  text="No"
                  checked={props.scheduleChatNoBtn}
                  handleChange={props.handleScheduleChatsChange}
                />
              </div>
            </div>

            <div className="row mx-0">
              <div className="col-md-6 pl-0">
                <h6>Discussion with Chat</h6>
              </div>
              <div className="col-md-6 px-0">
                <VienRadio
                  name="discussionWithChat"
                  text="Yes"
                  checked={props.discussionYesBtn}
                  handleChange={props.handleDiscussionChange}
                />
                <VienRadio
                  name="discussionWithChat"
                  text="No"
                  checked={props.discussionNoBtn}
                  handleChange={props.handleDiscussionChange}
                />
              </div>
            </div>

            <div className="row mx-0">
              <div className="col-md-6 pl-0">
                <h6>Dedicated Health Coach</h6>
              </div>
              <div className="col-md-6 px-0">
                <VienRadio
                  name="dedicatedHealthCoach"
                  text="Yes"
                  checked={props.dedicatedCoachYesBtn}
                  handleChange={props.handleDedicatedCoachChange}
                />
                <VienRadio
                  name="dedicatedHealthCoach"
                  text="No"
                  checked={props.dedicatedCoachNoBtn}
                  handleChange={props.handleDedicatedCoachChange}
                />
              </div>
            </div>

            <div className="form-group mb-0">
              <Button
                type="submit"
                value="Update"
                className="btn btn-primary update-plan-btn shadow-none"
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default UpdateHealthCoachPlans;
