import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UpdateFAQ from "../../common/Modal/UpdateFAQ";
import Pagination from "../../common/Pagination/Pagination";
import Search from "../../common/Search/Search";
import ViewFAQ from "../../common/Modal/ViewFAQ";
import {
  allFAQ,
  deleteFAQ,
  searchFAQ,
  getFAQ,
  updateFAQ,
} from "../../../actions/dashboardActions";
import { validateFAQ } from "../../../validations/faq";
import "./styles.scss";

class ManageFAQ extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      query: "",
      pageLimit: 10,
      currentPage: 1,
      showViewModal: false,
      showUpdateFAQModal: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");

    this.props.allFAQ(token, this.state.currentPage, this.state.pageLimit);
  }


  componentWillReceiveProps(nextProps) {

    if (nextProps.dashboard.faq && nextProps.dashboard.faq.length > 0) {
      let data = nextProps.dashboard.faq;
       console.log("data", data)
      this.setState({
        question: data[0].question,
        answer: data[0].answer,
        tags: data[0].tags,
        status: data[0].status,
        activeBtn: data[0].status === "Active" ? true : false,
        inactiveBtn: data[0].status === "Inactive" ? true : false,
      });
    }
  }

  handleDelete = (id) => {
    const token = localStorage.getItem("jwtToken");

    this.props.deleteFAQ(id, token);
    this.props.allFAQ(token, this.state.currentPage, this.state.pageLimit);
  };

  handleSearch = (query) => {
    const token = localStorage.getItem("jwtToken");

    this.setState({ query });
    this.props.searchFAQ(query, token);
  };

  handlePageClick = (page) => {
    const token = localStorage.getItem("jwtToken");

    this.setState({ currentPage: page });

    this.props.allFAQ(token, page, this.state.pageLimit);
  };

  handleViewModalClose = () => {
    this.setState({ showViewModal: false });
  };

  handleViewModalShow = (id) => {
    this.setState({ showViewModal: true, id });

    const token = localStorage.getItem("jwtToken");
    this.props.getFAQ(id, token);
  };

  handleUpdateFAQ = (id) => {
     console.log("handleUpdateFAQ== called")
    this.setState({ showUpdateFAQModal: true, id });

    const token = localStorage.getItem("jwtToken");
    this.props.getFAQ(id, token);
  };

  handleUpdateFAQModalClose = () => {
    this.setState({ showUpdateFAQModal: false });
  };
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleInit = (editor) => {
    this.setState({ editor });
  };
  handleChange = (event, editor) => {
    const data = editor.getData();
    this.setState({ answer: data });
  };
  handleRadioChange = (status) => {
    if (status === "Active") {
      this.setState({ status, activeBtn: true, inactiveBtn: false });
    } else {
      this.setState({ status, activeBtn: false, inactiveBtn: true });
    }
  };


  handleUpdateFAQSubmit = (e) => {
    e.preventDefault();
   
    let { id, question, answer, status } = this.state;

    let result = validateFAQ(question, answer);
    if (result) return toast.error(result);

    let faq = {
      id,
      question,
      answer,
      status,
    };

    const token = localStorage.getItem("jwtToken");
    this.props.updateFAQ(faq, token);
    this.props.allFAQ(token, this.state.currentPage, this.state.pageLimit);
    this.setState({
      editor: "",
      question: "",
      answer: "",
      status: "",
      activeBtn: false,
      inactiveBtn: false,
      showUpdateFAQModal: false,
    });
  };
  handleTagsChange = (tags) => {
    this.setState({ tags });
  };
  render() {
    const currentPageLength = this.props.dashboard.faq.length;

    const totalFAQ = sessionStorage.getItem("total_faq") || 0;
    const currentRecordsFrom =
      this.state.pageLimit * (this.state.currentPage - 1) + 1;
    const currentRecordsTo = currentRecordsFrom + currentPageLength - 1;

    const profile = this.props.dashboard.adminProfileData;
    const modules = profile && profile.modules ? profile.modules : {};
    const faq = modules && modules.faq ? modules.faq : {};

    return (
      <React.Fragment>
        <div className="manage-faq-wrapper">
          <h5>Manage FAQs</h5>
          <hr />
          <div className="manage-faq custom_class">
            <div className="row mx-0">
              <div className="col-md-7 pl-0"></div>
              <div className="col-md-5 pr-0">
                <Search
                  icon="fa fa-search icon"
                  size="15px"
                  placeholder="Search FAQ"
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
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.dashboard.faq &&
                    this.props.dashboard.faq.length > 0 &&
                    this.props.dashboard.faq.map((f, index) => (
                      <tr key={f._id}>
                        <td>{index + 1}</td>
                        <td>{f.question}</td>
                        <td>{f.answer}</td>
                        <td>
                          <span className={f.status}>{f.status}</span>
                        </td>
                        <td>
                          <Link
                            to="#"
                            onClick={() => this.handleViewModalShow(f._id)}
                          >
                            <i className="fa fa-eye"></i>
                          </Link>

                            <>
                            <Link
                              to="#"
                              onClick={() => this.handleDelete(f._id)}
                            >
                              <i className="fa fa-trash"></i>
                            </Link>

                            <Link
                            to="#"
                            onClick={() => this.handleUpdateFAQ(f._id)}
                            >
                            <i className="fa fa-edit"></i>
                            </Link>
                            </>
                        
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="row mx-0">
              <div className="col-md-6 pr-0">
                {!this.state.query && (
                  <h6 className="results">
                    Showing {currentRecordsFrom} - {currentRecordsTo} results of{" "}
                    {totalFAQ}
                  </h6>
                )}
              </div>
              <div className="col-md-6 pl-0">
                {!this.state.query && (
                  <Pagination
                    count={totalFAQ}
                    pageLimit={this.state.pageLimit}
                    currentPage={this.state.currentPage}
                    handlePageClick={this.handlePageClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <ViewFAQ
          showViewModal={this.state.showViewModal}
          handleViewModalClose={this.handleViewModalClose}
          details={this.props.dashboard.singleFAQ}
        />

        <UpdateFAQ
          showUpdateFAQModal={this.state.showUpdateFAQModal}
          handleUpdateFAQModalClose={this.handleUpdateFAQModalClose}
          handleUpdateFAQSubmit={this.handleUpdateFAQSubmit}
          handleInputChange={this.handleInputChange}
          handleTagsChange={this.handleTagsChange}
          handleInit={this.handleInit}
          handleChange={this.handleChange}
          handleRadioChange={this.handleRadioChange}
          question={this.state.question}
          answer={this.state.answer}
          activeBtn={this.state.activeBtn}
          inactiveBtn={this.state.inactiveBtn}
          tags={this.state.tags}
        />

      </React.Fragment>
    );
  }
}

ManageFAQ.propTypes = {
  dashboard: PropTypes.object.isRequired,
  allFAQ: PropTypes.func.isRequired,
  deleteFAQ: PropTypes.func.isRequired,
  searchFAQ: PropTypes.func.isRequired,
  getFAQ: PropTypes.func.isRequired,
  updateFAQ: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {
  allFAQ,
  deleteFAQ,
  searchFAQ,
  getFAQ,
  updateFAQ,
})(ManageFAQ);
