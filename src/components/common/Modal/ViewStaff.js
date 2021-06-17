import React from "react";
import { Modal, ListGroup } from "react-bootstrap";
import moment from "moment";

import "./styles.scss";

const ViewStaff = (props) => {
  const { details } = props;
  const doctor = details && details.doctor_id && details.doctor_id.basicInfo;
  const appointment = details && details.appointment_id;

  return (
    <React.Fragment>
      <Modal
        show={props.showViewModal}
        onHide={() => props.setShowViewModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Staff Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {props.details && (
              <>
                <h6>Vessel Details</h6>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Category <span>{appointment && appointment.category}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Fee <span>{appointment && appointment.consultation_fee}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Type{" "}
                  <span>{appointment && appointment.consultation_type}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Date/Time <span>{appointment && appointment.date}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Reason <span>{appointment && appointment.reason}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Duration <span>{appointment && appointment.duration}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Session <span>{appointment && appointment.session}</span>
                </ListGroup.Item>
</>
            )}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ViewStaff;
