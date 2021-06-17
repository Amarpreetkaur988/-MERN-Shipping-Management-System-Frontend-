import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import Table from "./Table";
import Pagination from "../../common/Pagination/Pagination";
import Search from "../../common/Search/Search";
import AddCaptain from "../../common/Modal/AddCaptain";
import Button from "../../common/Button/Button";
// import { validateAddCaptain } from "../../../validations/add-doctor";
import {
  getAllCaptains,
  searchCaptains,
} from "../../../actions/dashboardActions";
import "./styles.scss";

class ManageCaptain extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      query: "",
      currentPage: 1,
      pageLimit: 10,
      showDeleteModal: false,
      showAddCaptainModal: false,
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      code: "",
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
   
    this.props.getAllCaptains(
      token,
      this.state.currentPage,
      this.state.pageLimit,
    );
  }

  AddCaptainModalClicked = () => {
    this.setState({ showAddCaptainModal: true });
  };

  handleAddCaptainModalClose = () => {
    this.setState({ showAddCaptainModal: false });
  };

  handleBlockUser = (id) => {
    const token = localStorage.getItem("jwtToken");
   
    this.setState({ showDeleteModal: false });
    this.props.getAllCaptains(
      token,
      this.state.currentPage,
      this.state.pageLimit,
    );
  };

  handleUnblockUser = (id) => {
    const token = localStorage.getItem("jwtToken");
 
    this.setState({ showDeleteModal: false });
    this.props.getAllCaptains(
      token,
      this.state.currentPage,
      this.state.pageLimit,
    );
  };

  handlePageClick = (page) => {
    const token = localStorage.getItem("jwtToken");

    this.setState({ currentPage: page });

    this.props.getAllCaptains(token, page, this.state.pageLimit, "doctor");
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearch = (query) => {
    const token = localStorage.getItem("jwtToken");

    this.setState({ query });
    this.props.searchCaptains(query, token);
  };

  deleteUser = (id) => {
    const token = localStorage.getItem("jwtToken");


    this.props.getAllCaptains(
      token,
      this.state.currentPage,
      this.state.pageLimit,
    );
  };

  handleAddCaptainSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwtToken");

    const {
      title,
      firstName,
      lastName,
      email,
      phoneNumber,
      code,
      currentPage,
      pageLimit,
    } = this.state;

    // const result = validateAddCaptain(
    //   title,
    //   firstName,
    //   lastName,
    //   email,
    //   phoneNumber,
    //   code
    // );
    // if (result) return toast.error(result);

    let doctor = {
      title,
      firstName,
      lastName,
      email,
      phoneNumber,
      code,
      pageLimit,
      page: currentPage,
    };


    this.setState({ showAddCaptainModal: false });
  };

  render() {
    const currentPageLength =
    this.props.dashboard.allStaffs && this.props.dashboard.allStaffs.length;

    const totalWalkers = sessionStorage.getItem("total_staffs") || 0;
    const currentRecordsFrom =
      this.state.pageLimit * (this.state.currentPage - 1) + 1;
    const currentRecordsTo = currentRecordsFrom + currentPageLength - 1;
    return (
      <React.Fragment>
        <div className="manage-doctor-wrapper">
          <h5>Manage Captains</h5>
          <hr />
          <div className="manage-doctor custom_class">
            <div className="row mx-0">
              <div className="col-md-7 pl-0">
                  <Button
                    type="button"
                    className="btn btn-primary add-doctor-btn shadow-none"
                    value="Add Captain"
                    handleClick={this.addCaptainModalClicked}
                  />
              </div>
              <div className="col-md-5 pr-0">
                <Search
                  icon="fa fa-search icon"
                  size="15px"
                  placeholder="Search Captain"
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
            <div className="table-responsive">
              <Table
                staffs={this.props.dashboard.allStaffs}
                handleBlockUser={this.handleBlockUser}
                handleUnblockUser={this.handleUnblockUser}
               
                deleteUser={this.deleteUser}
              />
            </div>
            <div className="row mx-0">
              <div className="col-md-6 pr-0">
                {!this.state.query && (
                  <h6 className="results">
                    Showing {currentRecordsFrom} - {currentRecordsTo} results of{" "}
                    {totalWalkers}
                  </h6>
                )}
              </div>
              <div className="col-md-6 pl-0">
                {!this.state.query && (
                  <Pagination
                    count={totalWalkers}
                    pageLimit={this.state.pageLimit}
                    currentPage={this.state.currentPage}
                    handlePageClick={this.handlePageClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <AddCaptain
          showAddCaptainModal={this.state.showAddCaptainModal}
          handleAddCaptainModalClose={this.handleAddCaptainModalClose}
          handleAddCaptainSubmit={this.handleAddCaptainSubmit}
          handleChange={this.handleChange}
          title={this.state.title}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          code={this.state.code}
        />
      </React.Fragment>
    );
  }
}

ManageCaptain.propTypes = {
  dashboard: PropTypes.object.isRequired,
  getAllCaptains: PropTypes.func.isRequired,
  searchCaptains: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {
  getAllCaptains,
  searchCaptains,
})(ManageCaptain);
