import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Statistics from "./Statistics";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import RecentAppointments from "./RecentAppointments";
import {
  dashboardStats,
} from "../../../actions/dashboardActions";
import "./styles.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    this.props.dashboardStats(token);
  }

  render() {
    return (
      <div className="container-fluid dashboard">
        <div className="row mx-0">
          <div className="col-md-12 px-0">
            <h3>Dashboard</h3>
            <hr />

            <Statistics stats={this.props.dashboard.dashboardStats} />

            <div className="row mx-0">
              <div className="col-md-6 pl-0">
                <LineChart />
              </div>
              <div className="col-md-6">
                <BarChart />
              </div>
            </div>

            <div className="row mx-0">
              <div className="col-md-12 px-0">
                <RecentAppointments
                  appointments={this.props.dashboard.appointments}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object.isRequired,
  dashboardStats: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {
  dashboardStats,
})(Dashboard);
