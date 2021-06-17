import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getProfile } from "../../../actions/dashboardActions";
import { logoutUser } from "../../../actions/authActions";
import { api_url } from "../../../utils/api";
import "./styles.scss";

const Navbar = (props) => {
  const token = localStorage.getItem("jwtToken");
  const [notificationPopup, setNotificationPopup] = useState(null);
  const [authPopup, setAuthPopup] = useState(null);

  useEffect(() => {
    props.getProfile(token);
  }, []);

  const auth_dropdown_handler = () => {
    if(!authPopup){
      setAuthPopup('show')
    }else{
      setAuthPopup(null)
    }
  }

  const notification_dropdown_handler = () => {
    if(!notificationPopup){
      setNotificationPopup('show')
    }else{
      setNotificationPopup(null)
    }
  }

  const handleLogout = () => {
    props.logoutUser(token, props.history);
  };

  let image = api_url + "/default.png";

  if (props.dashboard.adminProfileData) {
    if (props.dashboard.adminProfileData.image) {
      image = `${props.dashboard.adminProfileData.image}`;
    }
  }

  const name = props.dashboard.adminProfileData
    ? props.dashboard.adminProfileData.firstName
    : "";

  return (
    <React.Fragment>
      <nav className="navbar sticky-top">
        <span
          className="toggle-sidebar-menu"
          onClick={() => props.handleToggle("collapsed")}
          style={props.collapsed ? { left: "50px" } : { left: "330px" }}
        >
          <i className="fa fa-bars"></i>
        </span>

        <span
          className="toggle-sidebar-mobile-menu"
          onClick={() => props.handleToggle("toggled")}
        >
          <i className="fa fa-bars"></i>
        </span>
     
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="dropdown">
              <Link
                to="#"
                className="btn shadow-none"
                id="notification-bell"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-bell"></i>{" "}
                <sup className="badge badge-danger">0</sup>
              </Link>

              <div
                className="dropdown-menu dropdown-menu-notifications"
                aria-labelledby="notification-bell"
              >
                <p>
                  Notifications{" "}
                  <span>
                    <Link to="#">Mark all as read</Link>
                  </span>
                </p>
                <div className="dropdown-divider"></div>
                <Link to="#" className="dropdown-item px-0 py-2">
                  <div className="row mx-0">
                    <div className="col-md-2 px-0">
                      <img
                        src="../img/default.png"
                        id="notification-img"
                        alt="img"
                      />
                    </div>
                    <div className="col-md-10">
                      <p className="notification-text">Test Message</p>
                      <p className="notification-time">Oct 02, 2020</p>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  to="/all-notifications"
                  className="dropdown-item text-center text-secondary"
                >
                  All Notifications
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <img src={image} id="navbar-user-img" alt="img" />
          </li>

          <li className="nav-item">
            <div className="dropdown">
              <Link
                className="btn shadow-none"
                to="#"
                id="auth-user-dropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={auth_dropdown_handler}
              >
                Hello {name} <i className="fa fa-caret-down"></i>
              </Link>
              <div
                className={`dropdown-menu user-shortcut-controls ${authPopup ? 'show' : null}`}
                aria-labelledby="auth-user-dropdown"
              >
                <Link className="dropdown-item" to="/admin/dashboard">
                  Dashboard
                </Link>
               
                <Link className="dropdown-item" to="/admin/profile">
                  Profile
                </Link>
                <Link className="dropdown-item" to="/admin/settings">
                  Settings
                </Link>
                <Link className="dropdown-item" to="#" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  dashboard: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfile, logoutUser })(
  withRouter(Navbar)
);
