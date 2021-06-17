import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Navbar from "../common/Navbar/Navbar";
import Sidebar from "../common/Sidebar/Sidebar";
import Loader from "../common/Loader/Loader";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      toggled: false,
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("jwtToken")) {
      this.props.history.push("/admin/login");
    }
  }

  handleToggle = (value) => {
    if (value === "collapsed")
      this.setState({ collapsed: !this.state.collapsed });

    if (value === "toggled") this.setState({ toggled: !this.state.toggled });
  };

  render() {
    const { collapsed, toggled } = this.state;

    return (
      <React.Fragment>
        {this.props.dashboard.loading && <Loader />}

        <Navbar
          handleToggle={this.handleToggle}
          collapsed={collapsed}
          toggled={toggled}
        />
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          handleToggle={this.handleToggle}
        />
        <div className="row mx-0">
          <div className="col-md-12 px-0">
            <div
              className="main"
              style={{ paddingLeft: collapsed ? "40px" : "310px" }}
            >
              {this.props.children(this.state.toggled)}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Admin.propTypes = {
  dashboard: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {})(Admin);
