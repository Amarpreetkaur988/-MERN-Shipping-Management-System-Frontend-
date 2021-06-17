import React from "react";
import { Modal } from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import TextArea from "../Textarea/Textarea";
import VienRadio from "../Radio/Radio";
import "./styles.scss";

const UpdateTemplate = (props) => {
  const predefinedVars =
    "{{patient_name}}   {{patient_email}}   {{patient_phone_number}}   {{otp}}    {{doctor_name}}    {{doctor_email}}    {{doctor_phone_number}}   {{subtype}}   {{doctor_clinic_name}}   {{doctor_website_url}}   {{health_coach_name}}   {{health_coach_email}}   {{health_coach_phone_number}}   {{link}}   {{date}}   {{time}}   {{plan_name}}   {{duration}}";

  return (
    <React.Fragment>
      <Modal
        show={props.showUpdateModal}
        onHide={props.handleUpdateModalClose}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleTemplateSubmit}>
            <div className="form-group">
              <label className="type-label">Template For</label>
              <VienRadio
                name="type"
                text="SMS"
                checked={props.smsRadioBtn}
                handleChange={props.handleRadioChange}
              />
              <VienRadio
                name="type"
                text="Email"
                checked={props.emailRadioBtn}
                handleChange={props.handleRadioChange}
              />
            </div>

            <div className="form-group">
              <select
                name="templateName"
                className="form-control shadow-none"
                value={props.templateName}
                onChange={props.handleSelectChange}
              >
                <option value="">Select Template Name</option>
                {props.emailRadioBtn && (
                  <>
                    <option value="Mail Sent To Patient After Doctor Add Offline Appointment">
                      Mail Sent To Patient After Doctor Add Offline Appointment
                    </option>
                    <option value="Mail Sent To User After Subscription Purchased">
                      Mail Sent To User After Subscription Purchased
                    </option>
                    <option value="Mail Sent To User For Email Verification">
                      Mail Sent To User For Email Verification
                    </option>
                    <option value="Mail Sent To User For OTP">
                      Mail Sent To User For OTP
                    </option>
                  </>
                )}
                {props.smsRadioBtn && (
                  <>
                    <option value="Send OTP">Send OTP</option>
                    <option value="SMS Sent To User After Subscription Purchased">
                      SMS Sent To User After Subscription Purchased
                    </option>
                  </>
                )}
              </select>
            </div>

            <div className="form-group">
              <TextArea
                icon="fa fa-tag icon"
                size="12"
                name="preVar"
                rows="3"
                value={predefinedVars}
                readOnly={true}
              />
            </div>

            {props.emailRadioBtn && (
              <FormInput
                icon="fa fa-book icon"
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control shadow-none"
                value={props.subject}
                handleChange={props.handleChange}
              />
            )}

            <CKEditor
              editor={ClassicEditor}
              data={props.text}
              onInit={(editor) => props.handleInit(editor)}
              onChange={(event, editor) =>
                props.handleEditorChange(event, editor)
              }
            />

            <div className="form-group">
              <label className="status-label">Status</label>
              <VienRadio
                name="statusUpdate"
                text="Active"
                checked={props.activeBtn}
                handleChange={props.handleStatusChange}
              />
              <VienRadio
                name="statusUpdate"
                text="Inactive"
                checked={props.inactiveBtn}
                handleChange={props.handleStatusChange}
              />
            </div>

            <Button
              type="submit"
              value="Update"
              className="btn btn-primary btn-block add-doctor-btn shadow-none"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default UpdateTemplate;
