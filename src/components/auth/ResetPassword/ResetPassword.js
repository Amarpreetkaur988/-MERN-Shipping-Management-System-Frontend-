import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

import FormInput from "../../common/Form-Input/FormInput";
import { adminResetPassword } from "../../../actions/authActions";
import { validateResetPassword } from "../../../validations/login";
import "./styles.scss";

const ResetPassword = (props) => {
  const [otp, setOTP] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("jwtToken"))
      props.history.push("/admin/dashboard");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = validateResetPassword(otp, password, confirmPassword);
    if (result) return toast.error(result);

    let data = {
      id: localStorage.getItem("admin_id") || "",
      otp,
      newPassword: password,
    };

    props.adminResetPassword(data, props.history);
  };

  return (
    <React.Fragment>
      <div className="admin-reset-password">
        <div className="container px-0">
          <div className="row mx-0">
            <div className="col-md-5 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5>Admin Reset Password</h5>
                  <form onSubmit={handleSubmit}>
                    <FormInput
                      icon="fa fa-key icon"
                      type="number"
                      name="otp"
                      placeholder="OTP"
                      value={otp}
                      handleChange={(e) => setOTP(e.target.value)}
                    />

                    <FormInput
                      icon="fa fa-key icon"
                      type="password"
                      name="password"
                      placeholder="New Password"
                      value={password}
                      handleChange={(e) => setPassword(e.target.value)}
                    />

                    <FormInput
                      icon="fa fa-key icon"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      handleChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <div className="form-group mb-0 mt-4">
                      <input
                        type="submit"
                        value="Reset Password"
                        className="btn btn-dark btn-block reset-password-btn shadow-none"
                      />
                    </div>

                    <div className="form-group mt-3 mb-0">
                      <Link to="/admin/login">Back to Login</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

ResetPassword.propTypes = {
  auth: PropTypes.object.isRequired,
  adminResetPassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { adminResetPassword })(
  withRouter(ResetPassword)
);
