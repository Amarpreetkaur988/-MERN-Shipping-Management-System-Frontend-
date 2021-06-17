import React from "react";
import { Modal } from "react-bootstrap";

import Button from "../Button/Button";
import FormInput from "../Form-Input/FormInput";
import VienRadio from "../Radio/Radio";
import "./styles.scss";

const AddCoupon = (props) => {
  return (
    <React.Fragment>
      <Modal
        show={props.showAddCouponModal}
        onHide={props.handleAddCouponModalClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={props.handleAddCouponSubmit}>
            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="text"
              name="couponCode"
              placeholder="Coupon Code"
              value={props.couponCode}
              handleChange={props.handleChange}
            />

            <FormInput
              icon="fa fa-user icon"
              size="15px"
              type="number"
              name="discountPercent"
              placeholder="Discount Percent"
              value={props.discountPercent}
              handleChange={props.handleChange}
            />

            <div className="form-group">
              <select
                name="planId"
                className="form-control shadow-none"
                value={props.planId}
                onChange={props.handlePlanChange}
              >
                <option value="">Select Plan</option>
                {props.allPlans &&
                  props.allPlans.length > 0 &&
                  props.allPlans.map((a, index) => (
                    <option value={a._id} key={a._id}>
                      {a.planName} ({a.planFor})
                    </option>
                  ))}
              </select>
            </div>

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
              value="Add Coupon"
              className="btn btn-primary btn-block add-doctor-btn shadow-none"
            />
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddCoupon;
