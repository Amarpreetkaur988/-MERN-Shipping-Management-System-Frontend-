import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import "./styles.scss";

const DeleteModal = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showDeleteModal}
        onHide={props.handleDeleteModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}</Modal.Body>
        <Modal.Footer>
          <Button
            value="Yes"
            className="btn btn-danger shadow-none yes-btn"
            type="button"
            handleClick={props.handleYesBtnClick}
          />
          <Button
            value="No Thanks"
            className="btn shadow-none no-btn"
            type="button"
            handleClick={props.handleNoBtnClick}
          />
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteModal;
