import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Toggle from "react-toggle";

import FormInput from "../../common/Form-Input/FormInput";
import Button from "../../common/Button/Button";
import { validatePassChange } from "../../../validations/settings";
import {
  changePassword,
} from "../../../actions/dashboardActions";
import "./styles.scss";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
  }

 
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePasswordChange = (e) => {
    e.preventDefault();

    const { oldPassword, newPassword, confirmPassword } = this.state;

    const result = validatePassChange(
      oldPassword,
      newPassword,
      confirmPassword
    );
    if (result) return toast.error(result);

    const token = localStorage.getItem("jwtToken");
    this.props.changePassword(
      oldPassword,
      newPassword,
      token,
      this.props.history
    );
  };

  handleDiscountChange = (e) => {
    e.preventDefault();

    if (this.state.discount === "") return toast.error("Please enter discount");

    const token = localStorage.getItem("jwtToken");
    this.props.discount(this.state.discount, token);
  };

  

  render() {
    return (
      <div className="container-fluid settings">
        <div className="row mx-0">
          <div className="col-md-12 px-0">
            <h3>Settings</h3>
            <hr />
          </div>
        </div>

        <div className="change-password">
          <h4>Change Password</h4>

          <form onSubmit={this.handlePasswordChange}>
            <FormInput
              icon="fa fa-key icon"
              type="password"
              name="oldPassword"
              placeholder="Old Password"
              value={this.state.oldPassword}
              handleChange={this.handleChange}
            />

            <FormInput
              icon="fa fa-key icon"
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={this.state.newPassword}
              handleChange={this.handleChange}
            />

            <FormInput
              icon="fa fa-key icon"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              handleChange={this.handleChange}
            />

            <Button
              type="submit"
              value="Submit"
              className="btn btn-dark shadow-none change-pass-btn"
            />
          </form>
        </div>

        
      </div>
    );
  }
}

Settings.propTypes = {
  dashboard: PropTypes.object.isRequired,
  changePassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {
  changePassword,
})(withRouter(Settings));
