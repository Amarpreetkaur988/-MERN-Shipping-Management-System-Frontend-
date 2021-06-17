import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

import FormInput from "../../common/Form-Input/FormInput";
import VienRadio from "../../common/Radio/Radio";
import { adminForgotPassword } from "../../../actions/authActions";
import "./styles.scss";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [adminRadioBtn, setAdminRadioBtn] = useState(true);
  const [subadminRadioBtn, setSubadminRadioBtn] = useState(false);
  const [user, setUser] = useState("Admin");

  useEffect(() => {
    if (localStorage.getItem("jwtToken"))
      props.history.push("/admin/dashboard");
  }, []);

  const handleRadioChange = (value) => {
    if (value === "admin") {
      setAdminRadioBtn(true);
      setSubadminRadioBtn(false);
      setUser("Admin");
    } else {
      setSubadminRadioBtn(true);
      setAdminRadioBtn(false);
      setUser("SubAdmin");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") return toast.error("Please enter your email");

    props.adminForgotPassword(email, user, props.history);
  };

  return (
    <React.Fragment>
      <div className="admin-forgot-password">
        <div className="container px-0">
          <div className="row mx-0">
            <div className="col-md-5 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5>Admin Forgot Password</h5>
                  <form onSubmit={handleSubmit}>
                    <FormInput
                      icon="fa fa-envelope icon"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      handleChange={(e) => setEmail(e.target.value)}
                    />
{/* 
                    <div className="form-group">
                      <label className="admin">Who are you ?</label>
                      <VienRadio
                        name="admin"
                        text="Admin"
                        checked={adminRadioBtn}
                        handleChange={() => handleRadioChange("admin")}
                      />
                      <VienRadio
                        name="admin"
                        text="Subadmin"
                        checked={subadminRadioBtn}
                        handleChange={() => handleRadioChange("subadmin")}
                      />
                    </div> */}

                    <div className="form-group mb-0 mt-4">
                      <input
                        type="submit"
                        value="Send OTP"
                        className="btn btn-dark btn-block forgot-password-btn shadow-none"
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

ForgotPassword.propTypes = {
  auth: PropTypes.object.isRequired,
  adminForgotPassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { adminForgotPassword })(
  withRouter(ForgotPassword)
);
