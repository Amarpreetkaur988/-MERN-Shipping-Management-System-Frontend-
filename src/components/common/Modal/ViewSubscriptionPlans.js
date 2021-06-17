import React from "react";
import { Modal, ListGroup } from "react-bootstrap";
import moment from "moment";

import "./styles.scss";

const ViewSubscriptionPlan = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showViewSubscriptionModal}
        onHide={props.handleViewSubscriptionModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Subscription Plan Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {props.details && (
              <>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Plan Name <span>{props.details.planName}</span>
                </ListGroup.Item>

              

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Amount <span>{props.details.amount}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Duration <span>{props.details.duration + " month(s)"}</span>
                </ListGroup.Item>
              </>
            )}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ViewSubscriptionPlan;
