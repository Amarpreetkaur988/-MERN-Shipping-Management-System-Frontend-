import React from "react";
import { Modal } from "react-bootstrap";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import VienRadio from "../../common/Radio/Radio";
import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import Textarea from '../Textarea/Textarea';
import "./styles.scss";

const UpdateBlog = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showUpdateBlogModal}
        onHide={props.handleUpdateBlogModalClose}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleUpdateBlogSubmit}>
                  <FormInput
                    icon="fa fa-user icon"
                    size="15px"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={props.title}
                    handleChange={(e) => props.handleInputChange(e)}
                  />
                <Textarea
                 icon="fa fa-user icon"
                 size="15px"
                 type="text"
                 name="description"
                 placeholder="Description"
                 value={props.description}
                 handleChange={(e) => props.handleInputChange(e)}
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

export default UpdateBlog;
