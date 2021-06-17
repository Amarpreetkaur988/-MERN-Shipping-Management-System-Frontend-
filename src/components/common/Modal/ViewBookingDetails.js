import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Modal, ListGroup } from "react-bootstrap";
// import ReactAudioPlayer from "react-audio-player";

import { api_url } from "../../../utils/api";
import "./styles.scss";

const ViewBookingDetails = (props) => {
  const patient_details =
    (props.details.ownerId && props.details.ownerId.basicInfo) || {};

  const doctor_details =
    (props.details.walkerId && props.details.walkerId.basicInfo) || {};

  const details = (props.details && props.details) || {};

  return (
    <React.Fragment>
      <Modal
        show={props.showViewModal}
        onHide={() => props.setShowViewModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>BookingHistory Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {console.log("props.details", props.details)}
            {props.details && (
              <>
                <h6>Owner Details</h6>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Name{" "}
                  <span>
                    {patient_details && patient_details.fullName}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Email <span>{patient_details && patient_details.email}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Phone Number{" "}
                  <span>{patient_details && patient_details.phoneNumber}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Gender{" "}
                  <span>{patient_details && patient_details.gender}</span>
                </ListGroup.Item>

                <h6>Walker Details</h6>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Name{" "}
                  <span>
                    {doctor_details && doctor_details.fullName}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Email <span>{doctor_details && doctor_details.email}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Phone Number{" "}
                  <span>{doctor_details && doctor_details.phoneNumber}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Gender <span>{doctor_details && doctor_details.gender}</span>
                </ListGroup.Item>

                <h6>Booking Details</h6>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  BookingID
                  <span>{details && details.bookingId}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Date
                  <span>{details && details.date}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Duration
                  <span>{details && details.duration}</span>
                </ListGroup.Item>
               
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Status
                  <span>{details && details.status}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Time Slot
                  <span>{details && details.time}</span>
                </ListGroup.Item>
               
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  isFeePaid
                  <span>{details && details.isFeePaid ? "yes" : "no"}</span>
                </ListGroup.Item>
               
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Status{" "}
                  <span className={details.status}>{details.status}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Created On{" "}
                  <span>
                    {moment(details.created_at).format("MMM DD, YYYY")}
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

export default ViewBookingDetails;
