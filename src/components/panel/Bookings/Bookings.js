import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import Table from "./Table";
import Search from "../../common/Search/Search";
import Button from "../../common/Button/Button";
import Pagination from "../../common/Pagination/Pagination";
import FilterAppointments from "./FilterAppointments";
import FilterAppointmentReport from "./FilterAppointmentReport";
import Datepicker from "../../common/Datepicker/Datepicker";
import MonthPicker from "../../common/MonthPicker/MonthPicker";
import YearPicker from "../../common/YearPicker/YearPicker";
import ViewBookingDetails from "../../common/Modal/ViewBookingDetails";

import "./styles.scss";

class Bookings extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      pageLimit: 20,
      currentPage: 1,
      date: new Date(),
      month: new Date(),
      year: new Date(),
      appointmentDetails: {},
      showViewModal: false,
      appointmentType: "All Bookings",
      filterAppointments: {
        by: "",
        value: new Date(),
      },
      isFiltered: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
   
  }

  handleAppointmentChange = (appointment) => {
    let filterAppointments = { ...this.state.filterAppointments };
    filterAppointments.by = "";

    this.setState({ appointmentType: appointment, filterAppointments });
  };

  handleAppointmentReportChange = (filter) => {
    let filterAppointments = { ...this.state.filterAppointments };
    filterAppointments.by = filter;

    this.setState({ filterAppointments });
  };

  handleDateChange = (date) => {
    let filterAppointments = { ...this.state.filterAppointments };
    filterAppointments.value = date;

    this.setState({ date, filterAppointments });
  };

  handleMonthChange = (month) => {
    let filterAppointments = { ...this.state.filterAppointments };
    filterAppointments.value = month;

    this.setState({ month, filterAppointments });
  };

  handleYearChange = (year) => {
    let filterAppointments = { ...this.state.filterAppointments };
    filterAppointments.value = year;

    this.setState({ year, filterAppointments });
  };

  showAppointmentDetails = (details) => {
    this.setState({ appointmentDetails: details, showViewModal: true });
  };

  handleViewModalClose = () => {
    this.setState({ showViewModal: false });
  };

  handleFilter = (e) => {
    e.preventDefault();

    if (this.state.filterReportsBy) {
      if (!this.state.date && !this.state.month && !this.state.year) {
        return toast.error("Please select date type to filter bookings");
      }
    }

    const token = localStorage.getItem("jwtToken");

   

    this.setState({ isFiltered: true });
  };

  handleSearch = (query) => {
    this.setState({ query });

    const token = localStorage.getItem("jwtToken");
  };

  handlePageClick = (page) => {
    this.setState({ currentPage: page });

    const token = localStorage.getItem("jwtToken");
  
  };

  handleReload = () => {
    const token = localStorage.getItem("jwtToken");
   

    this.setState({ appointmentType: "All Bookings", isFiltered: false });
  };

  render() {
    const currentPageLength = this.props.dashboard.appointments.length;

    const totalAppointments = sessionStorage.getItem("total_appointments") || 0;
    const currentRecordsFrom =
      this.state.pageLimit * (this.state.currentPage - 1) + 1;
    const currentRecordsTo = currentRecordsFrom + currentPageLength - 1;

    return (
      <React.Fragment>
        <div className="appointments-wrapper">
          <h5>All Bookings</h5>

          <hr />

          <div className="appointments custom_class">
            <div className="row mx-0">
              <div className="col-md-7 pl-0"></div>
              <div className="col-md-5 pr-0 custom_search">
                <Search
                  icon="fa fa-search icon"
                  size="15px"
                  placeholder="Search Bookings"
                  styles={{
                    marginBottom: "20px",
                    fontSize: "15px",
                    paddingLeft: "35px",
                  }}
                  search={this.state.query}
                  handleSearch={this.handleSearch}
                />
              </div>
            </div>

            <form onSubmit={this.handleFilter}>
              <div className="row mx-0 mb-4">
                <div className="col-md-3 pl-0">
                  <FilterAppointments
                    handleAppointmentChange={this.handleAppointmentChange}
                  />
                </div>

                <div className="col-md-2 pl-0 padding-t">
                  {this.state.appointmentType !== "New Bookings" && (
                    <FilterAppointmentReport
                      handleAppointmentReportChange={
                        this.handleAppointmentReportChange
                      }
                    />
                  )}
                </div>

                {this.state.filterAppointments.by && (
                  <div className="col-md-2">
                    {this.state.filterAppointments.by === "Day" && (
                      <Datepicker
                        startDate={this.state.date}
                        handleDateChange={this.handleDateChange}
                      />
                    )}

                    {this.state.filterAppointments.by === "Month" && (
                      <MonthPicker
                        startDate={this.state.month}
                        handleMonthChange={this.handleMonthChange}
                      />
                    )}

                    {this.state.filterAppointments.by === "Year" && (
                      <YearPicker
                        startDate={this.state.year}
                        handleYearChange={this.handleYearChange}
                      />
                    )}
                  </div>
                )}

                <div className="col-md-1 p-none">
                  <Button
                    type="submit"
                    value="Submit"
                    className="btn appointments-filter-submit-btn shadow-none"
                  />
                </div>

                <div className="col-md-2">
                  {this.state.isFiltered && (
                    <span className="reload-btn" onClick={this.handleReload}>
                      <i className="fa fa-refresh"></i>
                    </span>
                  )}
                </div>
              </div>
            </form>
            <div className="table-responsive">
              <Table
                appointments={this.props.dashboard.appointments}
                showAppointmentDetails={this.showAppointmentDetails}
              />
            </div>

            <div className="row mx-0">
              <div className="col-md-6 pr-0">
                {!this.state.query && !this.state.isFiltered && (
                  <h6 className="results">
                    Showing {currentRecordsFrom} - {currentRecordsTo} results of{" "}
                    {totalAppointments}
                  </h6>
                )}
              </div>
              <div className="col-md-6 pl-0">
                {!this.state.query && !this.state.isFiltered && (
                  <Pagination
                    count={totalAppointments}
                    pageLimit={this.state.pageLimit}
                    currentPage={this.state.currentPage}
                    handlePageClick={this.handlePageClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <ViewBookingDetails
          showViewModal={this.state.showViewModal}
          setShowViewModal={this.handleViewModalClose}
          details={this.state.appointmentDetails}
        />
      </React.Fragment>
    );
  }
}

Bookings.propTypes = {
  dashboard: PropTypes.object.isRequired,
 
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {

})(Bookings);
