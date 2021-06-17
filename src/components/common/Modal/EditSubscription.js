import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import Textarea from "../Textarea/Textarea";
import "./styles.scss";

const EditSubscription = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showEditSubscriptionModal}
        onHide={props.handleEditSubscriptionModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Subscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleSubmit}>
            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="planName"
              placeholder="Plan Name"
              value={props.planName}
              handleChange={props.handleChange}
            />

            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="number"
              name="amount"
              placeholder="Plan Amount"
              value={props.amount}
              handleChange={props.handleChange}
            />

            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="number"
              name="duration"
              placeholder="Plan Duration"
              value={props.duration}
              handleChange={props.handleChange}
            />

            <Textarea
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="text"
              rows="5"
              placeholder="Plan Details"
              value={props.text}
              handleChange={props.handleChange}
            />

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

export default EditSubscription;
