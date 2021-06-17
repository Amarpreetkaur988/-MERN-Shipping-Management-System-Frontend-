import React, { Component } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FormInput from "../../common/Form-Input/FormInput";
import VienRadio from "../../common/Radio/Radio";
import Button from "../../common/Button/Button";
import Textarea from "../../common/Textarea/Textarea";
import { validateAddSubscription } from "../../../validations/add-subscription";
import { addSubscription } from "../../../actions/dashboardActions";
import "./styles.scss";

class AddSubscription extends Component {
  constructor() {
    super();
    this.state = {
      planName: "",
      status: "Active",
      activeBtn: true,
      inactiveBtn: false,
      amount: "",
      duration: "1",
      oneBtn: true,
      sixBtn: false,
      twelveBtn: false,
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleStatusChange = (status) => {
    if (status === "Active") {
      this.setState({ status: status, activeBtn: true, inactiveBtn: false });
    } else {
      this.setState({ status: status, activeBtn: false, inactiveBtn: true });
    }
  };

  handlePlanForChange = (plan) => {
    if (plan === "Individual") {
      this.setState({
        planFor: plan,
        planForIndividual: true,
        planForFamily: false,
      });
    } else {
      this.setState({
        planFor: plan,
        planForIndividual: false,
        planForFamily: true,
      });
    }
  };

  handleDurationChange = (duration) => {
    if (duration === "1") {
      this.setState({
        duration,
        oneBtn: true,
        sixBtn: false,
        twelveBtn: false,
      });
    }

    if (duration === "6") {
      this.setState({
        duration,
        oneBtn: false,
        sixBtn: true,
        twelveBtn: false,
      });
    }

    if (duration === "12") {
      this.setState({
        duration,
        oneBtn: false,
        sixBtn: false,
        twelveBtn: true,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // const result = validateAddSubscription(this.state);
    // if (result) return toast.error(result);

    const subscriptionPlan = {
      planName: this.state.planName,
      planAmount: this.state.amount,
      planFor: this.state.planFor,
      duration: this.state.duration,
      status: this.state.status,
      text: this.state.text,
      familyMembers: this.state.familyMembers || 0,
      
    };

    const token = localStorage.getItem("jwtToken");

    this.props.addSubscription(subscriptionPlan, token);

    this.setState({
      planName: "",
      status: "Active",
      activeBtn: true,
      inactiveBtn: false,
      amount: "",
      duration: "1",
      oneBtn: true,
      sixBtn: false,
      twelveBtn: false,
      planFor: "Individual",
      planForIndividual: true,
      planForFamily: false,
      conWithGenPrac: "",
      conWithSpec: "",
      followUpAppoin: "",
      healthPlan: "introductory plan",
      text: "",
      familyMembers: "",
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="add-subscription-wrapper">
          <h5>Add Subscription Plan</h5>
          <hr />

          <div className="add-subscription custom_class">
            <form onSubmit={this.handleSubmit}>
              

              <div className="row mx-0">
                <div className="col-md-6 px-0">
                  <FormInput
                    icon="fa fa-user icon"
                    size="15px"
                    type="text"
                    name="planName"
                    placeholder="Plan Name"
                    value={this.state.planName}
                    handleChange={this.handleChange}
                  />
                </div>
                <div className="col-md-3 pr-0">
                  <FormInput
                    icon="fa fa-user icon"
                    size="15px"
                    type="number"
                    name="amount"
                    placeholder="Plan Amount"
                    value={this.state.amount}
                    handleChange={this.handleChange}
                  />
                </div>
                {this.state.planForFamily && (
                  <div className="col-md-3 pr-0">
                    <FormInput
                      icon="fa fa-user icon"
                      size="15px"
                      type="number"
                      name="familyMembers"
                      placeholder="Family Members"
                      value={this.state.familyMembers}
                      handleChange={this.handleChange}
                    />
                  </div>
                )}
              </div>

              <Textarea
                icon="fa fa-user icon"
                size="15px"
                type="text"
                name="text"
                rows="5"
                placeholder="Plan Details"
                value={this.state.text}
                handleChange={this.handleChange}
              />

              <div className="form-group">
                <label className="duration-label">
                  Plan Duration (in months)
                </label>
                <VienRadio
                  name="duration"
                  text="1"
                  checked={this.state.oneBtn}
                  handleChange={this.handleDurationChange}
                />
                <VienRadio
                  name="duration"
                  text="6"
                  checked={this.state.sixBtn}
                  handleChange={this.handleDurationChange}
                />
                <VienRadio
                  name="duration"
                  text="12"
                  checked={this.state.twelveBtn}
                  handleChange={this.handleDurationChange}
                />
              </div>

              <div className="form-group">
                <label className="status-label">Status</label>
                <VienRadio
                  name="status"
                  text="Active"
                  checked={this.state.activeBtn}
                  handleChange={this.handleStatusChange}
                />
                <VienRadio
                  name="status"
                  text="Inactive"
                  checked={this.state.inactiveBtn}
                  handleChange={this.handleStatusChange}
                />
              </div>

              

              

              <div className="form-group mb-0">
                <Button
                  type="submit"
                  value="Add"
                  className="btn btn-primary create-plan-btn shadow-none"
                />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AddSubscription.propTypes = {
  addSubscription: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addSubscription })(
  AddSubscription
);
