import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { verifyEmail } from "../../../actions/dashboardActions";
import "./styles.scss";

const VerifyEmail = (props) => {
  let { id } = props.match.params;

  useEffect(() => {
    props.verifyEmail(id);
  }, []);

  let message = "";
  let { verifyError, verifySuccess } = props.dashboard;

  if (verifySuccess) message = verifySuccess;
  if (verifyError) message = verifyError;

  return (
    <React.Fragment>
      <div className="row mx-0 custom_bg_Sec">
        <div className="col-md-6 mx-auto">
          <div className="msg-container">
            {verifySuccess && <i className="fa fa-check-circle"></i>}
            {verifyError && <i className="fa fa-times"></i>}
            <h1 className={verifySuccess ? "success" : "error"}>{message}</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

VerifyEmail.propTypes = {
  dashboard: PropTypes.object.isRequired,
  verifyEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, { verifyEmail })(VerifyEmail);
