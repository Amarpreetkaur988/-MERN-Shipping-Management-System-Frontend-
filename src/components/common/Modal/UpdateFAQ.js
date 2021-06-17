import React from "react";
import { Modal } from "react-bootstrap";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import VienRadio from "../../common/Radio/Radio";
import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import "./styles.scss";

const UpdateFAQ = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showUpdateFAQModal}
        onHide={props.handleUpdateFAQModalClose}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update FAQ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleUpdateFAQSubmit}>
                  <FormInput
                    icon="fa fa-user icon"
                    size="15px"
                    type="text"
                    name="question"
                    placeholder="Question"
                    value={props.question}
                    handleChange={(e) => props.handleInputChange(e)}
                  />
                
                  <CKEditor
                    editor={ClassicEditor}
                    data={props.answer}
                    onInit={(editor) => props.handleInit(editor)}
                    onChange={(event, editor) => props.handleChange(event, editor)}
                    /> 
                  

                  <div className="form-group mt-3">
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
                      checked={props.inactiveBtn}
                      handleChange={props.handleRadioChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn submit-btn shadow-none"
                    value="Update"
                    className="btn btn-primary btn-block add-doctor-btn shadow-none"
                  />
             
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default UpdateFAQ;
