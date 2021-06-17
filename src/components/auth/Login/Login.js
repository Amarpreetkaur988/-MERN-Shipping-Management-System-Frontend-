import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";

import FormInput from "../../common/Form-Input/FormInput";
import VienRadio from "../../common/Radio/Radio";
import { adminLogin } from "../../../actions/authActions";
import { validateLogin } from "../../../validations/login";
import "./styles.scss";

const Login = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
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

    const result = validateLogin(id, password);
    if (result) return toast.error(result);

    const admin = {
      id,
      password,
      role: user,
    };

    props.adminLogin(admin, props.history);
  };

  return (
    <React.Fragment>
      <div className="admin-login">
        <div className="container px-0">
          <div className="row mx-0">
            <div className="col-md-5 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5>Admin Login</h5>
                  <form onSubmit={handleSubmit}>
                    <FormInput
                      icon="fa fa-envelope icon"
                      type="text"
                      name="email"
                      placeholder="Email or Phone Number"
                      value={id}
                      handleChange={(e) => setId(e.target.value)}
                    />

                    <FormInput
                      icon="fa fa-key icon"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      handleChange={(e) => setPassword(e.target.value)}
                    />

                    {/* <div className="form-group">
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
                        value="Login"
                        className="btn btn-dark btn-block login-btn shadow-none"
                      />
                    </div>

                    <div className="form-group mt-3 mb-0">
                      <Link to="/admin/forgot/password">Forgot Password?</Link>
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

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  adminLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { adminLogin })(withRouter(Login));
