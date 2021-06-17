import React from 'react';
import { Modal } from "react-bootstrap";
import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import "./styles.scss";

const AddCategory = (props) => {
    console.log("props.showAddCaye")
    return (
        <React.Fragment>
          <Modal
            show={props.showAddCategoryModal}
            onHide={props.handleAddModalClose}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Add College</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={props.handleSubmit}>
              <div className="form-group">
                  <label className="status-label">title</label>
                <FormInput
                  icon="fa fa-building icon"
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={props.title}
                  handleChange={(e) => props.handleChange(e)}
                />
                </div>

                <div className="profile-img">
              <img
                src={props.imagePreview}
                alt="profile-pic"
                id="edit-nutrition-img"
              />

              <div className="text-center mx-auto">
                <label className="upload-image" htmlFor="upload-button">
                  Upload Image
                </label>
              </div>

              <input
                id="upload-button"
                name="image"
                type="file"
                accept="image/*"
                //value={props.image}
                onChange={props.handleImageChange}
              />
            </div>
               {/* <div className="form-group">
                  <label className="status-label">Image</label>
                <FormInput
                
                  type="file"
                  name="image"
                  placeholder="Image"
                  value={props.image}
                  handleChange={props.handleImageChange}
                />
                </div> */}
    
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
                  value="Add"
                  className="btn btn-primary btn-block add-specialty-btn shadow-none"
                />
              </form>
            </Modal.Body>
          </Modal>
        </React.Fragment>
      );


}

export default AddCategory;