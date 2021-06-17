import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import "./styles.scss";

const UpdateCoupon = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showUpdateModal}
        onHide={props.handleUpdateModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleUpdateCouponSubmit}>
            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="couponCodeUpdate"
              placeholder="Coupon Code"
              value={props.couponCode}
              handleChange={props.handleChange}
            />

            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="number"
              name="discountPercentUpdate"
              placeholder="Discount Percent"
              value={props.discountPercent}
              handleChange={props.handleChange}
            />

            <div className="form-group">
              <label className="status-label">Status</label>
              <VienRadio
                name="statusUpdate"
                text="Active"
                checked={props.activeBtn}
                handleChange={props.handleRadioChange}
              />
              <VienRadio
                name="statusUpdate"
                text="Inactive"
                checked={props.inactivebtn}
                handleChange={props.handleRadioChange}
              />
            </div>

            <Button
              type="submit"
              value="Update Coupon"
              className="btn btn-primary btn-block add-doctor-btn shadow-none"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default UpdateCoupon;
