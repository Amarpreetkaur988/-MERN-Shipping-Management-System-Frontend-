import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import "./styles.scss";

const UpdateQuestion = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showUpdateModal}
        onHide={props.handleUpdateModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleUpdateQuestionSubmit}>
            <FormInput
              icon="fa fa-question icon"
              size="15px"
              type="text"
              name="question"
              placeholder="Question"
              value={props.question.question}
              handleChange={props.handleChange("question")}
            />

            <FormInput
              icon="fa fa-folder-open-o icon"
              size="15px"
              type="text"
              placeholder="Option 1"
              value={props.question.option1}
              handleChange={props.handleChange("option1")}
            />
             <FormInput
              icon="fa fa-info icon"
              size="15px"
              type="text"
              name="option1Fact"
              placeholder="Option 1 fact"
              value={props.question.option1Fact}
              handleChange={props.handleChange("option1Fact")}
            />
            <FormInput
              icon="fa fa-folder-open-o icon"
              size="15px"
              type="text"
              name="option2"
              placeholder="Option 2"
              value={props.question.option2}
              handleChange={props.handleChange("option2")}
            />
             <FormInput
              icon="fa fa-info icon"
              size="15px"
              type="text"
              name="option2Fact"
              placeholder="Option 2 fact"
              value={props.question.option2Fact}
              handleChange={props.handleChange("option2Fact")}
            />
            <FormInput
              icon="fa fa-folder-open-o icon"
              size="15px"
              type="text"
              name="option3"
              placeholder="Option 3"
              value={props.question.option3}
              handleChange={props.handleChange("option3")}
            />
             <FormInput
              icon="fa fa-info icon"
              size="15px"
              type="text"
              name="option3Fact"
              placeholder="Option 3 fact"
              value={props.question.option3Fact}
              handleChange={props.handleChange("option3Fact")}
            />
             <FormInput
              icon="fa fa-folder-open-o icon "
              size="15px"
              type="text"
              name="option4"
              placeholder="Option 4"
              value={props.question.option4}
              handleChange={props.handleChange("option4")}
            />
             <FormInput
              icon="fa fa-info icon"
              size="15px"
              type="text"
              name="option4Fact"
              placeholder="Option 4 fact"
              value={props.question.option4Fact}
              handleChange={props.handleChange("option4Fact")}
            />

            
            <div className="form-group">
              <label className="status-label">Status</label>
              <VienRadio
                name="status"
                text="Active"
                checked={props.activeBtn}
                handleChange={props.handleRadioChange}
              />
              <VienRadio
                name="status"
                text="Inactive"
                checked={props.inactivebtn}
                handleChange={props.handleRadioChange}
              />
            </div>

            <Button
              type="submit"
              value="Update Question"
              className="btn btn-primary btn-block add-doctor-btn shadow-none"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default UpdateQuestion;
