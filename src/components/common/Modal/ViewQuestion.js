import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Modal, ListGroup } from "react-bootstrap";

import { api_url } from "../../../utils/api";
import "./styles.scss";

const ViewQuestion = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showViewModal}
        onHide={props.handleViewModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Question Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {props.details && (
              <>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Question <span>{props.details.question}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Option one <span>{props.details.option1}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Option one Fact<span>{props.details.option1Fact}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Option Two <span>{props.details.option2}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Option Two Fact<span>{props.details.option2Fact}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Option Three <span>{props.details.option3}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Option Three Fact<span>{props.details.option3Fact}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Option Four <span>{props.details.option4}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Option Four Fact<span>{props.details.option4Fact}</span>
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

export default ViewQuestion;
