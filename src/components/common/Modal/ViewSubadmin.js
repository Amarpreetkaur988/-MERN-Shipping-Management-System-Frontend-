import React from "react";
import { Modal, ListGroup } from "react-bootstrap";
import moment from "moment";

import "./styles.scss";

const ViewSubadmin = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showViewModal}
        onHide={props.handleViewModalClose}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Subadmin Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {props.details && (
              <>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  First Name <span>{props.details.firstName}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Last Name <span>{props.details.lastName}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Email <span>{props.details.email}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Phone Number <span>{props.details.phoneNumber}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Gender <span>{props.details.gender}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  City{" "}
                  <span
                    style={{
                      width:
                        props.details.city &&
                        props.details.city.length > 60 &&
                        "50%",
                    }}
                  >
                    {props.details.city}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  State{" "}
                  <span
                    style={{
                      width:
                        props.details.state &&
                        props.details.state.length > 20 &&
                        "50%",
                    }}
                  >
                    {props.details.state}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Country <span>{props.details.country}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Postal Code <span>{props.details.pin}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Address{" "}
                  <span
                    style={{
                      width:
                        props.details.address &&
                        props.details.address.length > 20 &&
                        "50%",
                    }}
                  >
                    {props.details.address}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Account Status{" "}
                  <span
                    className={
                      props.details.isUserBlocked ? "suspended" : "active"
                    }
                  >
                    {props.details.isUserBlocked ? "suspended" : "active"}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Account Created On{" "}
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

export default ViewSubadmin;
