import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { api_url } from "../../../utils/api";
import "./styles.scss";

class Appointments extends Component {
  constructor() {
    super();
    this.state = {
      file: "",
    };
  }

  componentDidMount() {
    const { doc_file } = this.props.match.params;
    this.setState({ file: doc_file });
  }

  render() {
    return (
      <React.Fragment>
        <div className="doc-image-bg">
          <img src={`${api_url}/${this.state.file}`} alt="doc_file" />
        </div>
      </React.Fragment>
    );
  }
}

Appointments.propTypes = {
  dashboard: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {})(Appointments);
