import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Modal, ListGroup } from "react-bootstrap";

import { api_url } from "../../../utils/api";
import Textarea from "../Textarea/Textarea";
import "./styles.scss";

const ViewBlog = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showViewModal}
        onHide={props.handleViewModalClose}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Blog Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {props.details && (
              <>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  ID <span>{props.details._id}</span>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Title <span>{props.details.title}</span>
                </ListGroup.Item>

                <ListGroup.Item>
                  <label>Description</label>
                  <Textarea
                    icon="fa fa-sticky-note icon"
                    rows="10"
                    value={props.details.description}
                    className="shadow-none form-control"
                    readOnly={true}
                  ></Textarea>
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

export default ViewBlog;
