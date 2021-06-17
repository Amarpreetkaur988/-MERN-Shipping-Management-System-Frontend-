import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import Table from "./Table";
import Pagination from "../../common/Pagination/Pagination";
import Search from "../../common/Search/Search";
import DeleteModal from "../../common/Modal/DeleteModal";
import AddManagerModal from "../../common/Modal/AddManager";
import Button from "../../common/Button/Button";
import { validateAddManager } from "../../../validations/add-manager";
import {
  getAllManagers,
  createManager,
  searchManagers,
  deleteManager,
  unblockManager,
} from "../../../actions/dashboardActions";
import "./styles.scss";

class ManageManager extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      showDeleteModal: false,
      showAddManagerModal: false,
      manager: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        code: "",
      },
      query: "",
      pageLimit: 20,
      currentPage: 1,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    const page = 1;
    this.props.getAllManagers(token, page, this.state.pageLimit);
  }

  deleteModalClicked = (id) => {
    this.setState({ showDeleteModal: true, id });
  };

  addManagerModalClicked = () => {
    this.setState({ showAddManagerModal: true });
  };

  handleDeleteModalClose = () => {
    this.setState({ showDeleteModal: false });
  };

  handleAddManagerModalClose = () => {
    this.setState({ showAddManagerModal: false });
  };

  handleYesBtnClick = () => {
    const token = localStorage.getItem("jwtToken");
    this.props.deleteManager(this.state.id, token);
    this.setState({ showDeleteModal: false });
    this.props.getAllManagers(
      token,
      this.state.currentPage,
      this.state.pageLimit
    );
  };

  handleNoBtnClick = () => {
    this.setState({ showDeleteModal: false });
  };

  unblockUser = (id) => {
    const token = localStorage.getItem("jwtToken");
    this.props.unblockManager(id, token);
    this.props.getAllManagers(
      token,
      this.state.currentPage,
      this.state.pageLimit
    );
  };

  handleChange = (e) => {
    const manager = { ...this.state.manager };
    manager[e.target.name] = e.target.value;
    this.setState({ manager });
  };

  handleAddManagerSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwtToken");

    const {
      code,
      firstName,
      lastName,
      email,
      phoneNumber,
    } = this.state.manager;

    const result = validateAddManager(
      firstName,
      lastName,
      email,
      phoneNumber,
      code
    );
    if (result) return toast.error(result);

    let data = {
      ...this.state.manager,
      pageLimit: this.state.pageLimit,
      page: this.state.currentPage,
    };

    this.props.createManager(data, token);

    this.setState({ showAddManagerModal: false });
  };

  handleSearch = (query) => {
    const token = localStorage.getItem("jwtToken");

    this.setState({ query });
    this.props.searchManagers(query, token);
  };

  handlePageClick = (page) => {
    const token = localStorage.getItem("jwtToken");

    this.setState({ currentPage: page });

    this.props.getAllManagers(token, page, this.state.pageLimit);
  };

  // deleteUser = (id) => {
  //   const token = localStorage.getItem("jwtToken");

  //   this.props.deleteManager(id, token);

  //   this.props.getAllManagers(
  //     token,
  //     this.state.currentPage,
  //     this.state.pageLimit
  //   );
  //};

  render() {
    const currentPageLength =
      this.props.dashboard.allManagers &&
      this.props.dashboard.allManagers.length;

    const totalPatients = sessionStorage.getItem("total_patients") || 0;
    const currentRecordsFrom =
      this.state.pageLimit * (this.state.currentPage - 1) + 1;
    const currentRecordsTo = currentRecordsFrom + currentPageLength - 1;

    const profile = this.props.dashboard.adminProfileData;
    const modules = profile && profile.modules ? profile.modules : {};
    const patient = modules && modules.patient ? modules.patient : {};

    return (
      <React.Fragment>
        <div className="manage-patient-wrapper">
          <h5>Manage Managers</h5>
          <hr />
          <div className="manage-patient">
            <div className="row mx-0">
              <div className="col-md-7 pl-0">
                  <Button
                    type="button"
                    className="btn btn-primary add-new-patient-btn shadow-none"
                    value="Add Manager"
                    handleClick={this.addManagerModalClicked}
                  />
             
              </div>
              <div className="col-md-5 pr-0">
                <Search
                  icon="fa fa-search icon"
                  size="15px"
                  placeholder="Search Manager"
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

            <div class="table-responsive">
              {" "}
              <Table
                deleteModalClicked={this.deleteModalClicked}
                managers={this.props.dashboard.allManagers}
                unblockUser={this.unblockUser}
                data={profile}
                // deleteUser={this.deleteUser}
              />
            </div>
            <div className="row mx-0">
              <div className="col-md-6 pr-0">
                {!this.state.query && (
                  <h6 className="results">
                    Showing {currentRecordsFrom} - {currentRecordsTo} results of{" "}
                    {totalPatients}
                  </h6>
                )}
              </div>
              <div className="col-md-6 pl-0">
                {!this.state.query && (
                  <Pagination
                    count={totalPatients}
                    pageLimit={this.state.pageLimit}
                    currentPage={this.state.currentPage}
                    handlePageClick={this.handlePageClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <DeleteModal
          showDeleteModal={this.state.showDeleteModal}
          handleDeleteModalClose={this.handleDeleteModalClose}
          title="Delete Account"
          text="Are you sure you want to delete this manager's account?"
          handleYesBtnClick={this.handleYesBtnClick}
          handleNoBtnClick={this.handleNoBtnClick}
        />

        <AddManagerModal
          showAddManagerModal={this.state.showAddManagerModal}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          code={this.state.code}
          handleAddManagerModalClose={this.handleAddManagerModalClose}
          handleAddManagerSubmit={this.handleAddManagerSubmit}
          handleChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

ManageManager.propTypes = {
  dashboard: PropTypes.object.isRequired,
  getAllManagers: PropTypes.func.isRequired,
  createManager: PropTypes.func.isRequired,
  searchManagers: PropTypes.func.isRequired,
  deleteManager: PropTypes.func.isRequired,
  unblockManager: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {
  getAllManagers,
  createManager,
  searchManagers,
  deleteManager,
  unblockManager,
})(ManageManager);
