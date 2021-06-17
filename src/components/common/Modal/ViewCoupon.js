import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Modal, ListGroup } from "react-bootstrap";

import { api_url } from "../../../utils/api";
import "./styles.scss";

const ViewCoupon = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showViewModal}
        onHide={props.handleViewModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Coupon Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {props.details && (
              <>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Coupon Code <span>{props.details.couponCode}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Discount Percent <span>{props.details.discountPercent}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Plan Id{" "}
                  <span>
                    {props.details.planId && props.details.planId._id}
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Plan Name{" "}
                  <span>
                    {props.details.planId && props.details.planId.planName}
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Plan For{" "}
                  <span>
                    {props.details.planId && props.details.planId.planFor}
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Plan Duration{" "}
                  <span>
                    {props.details.planId &&
                      props.details.planId.duration + " month(s)"}
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Plan Amount{" "}
                  <span>
                    {props.details.planId && props.details.planId.amount}
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Status{" "}
                  <span className={props.details.status}>
                    {props.details.status}
                  </span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Created On{" "}
                  <span>
                    {moment(props.details.created_at).format("MMM DD, YYYY")}
                  </span>
                </ListGroup.Item>
              </>
            )}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ViewCoupon;
