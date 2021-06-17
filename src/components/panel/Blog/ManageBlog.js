import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UpdateBlog from "../../common/Modal/UpdateBlog";
import Pagination from "../../common/Pagination/Pagination";
import Search from "../../common/Search/Search";
import ViewBlog from "../../common/Modal/ViewBlog";
import {
  allBlog,
  deleteBlog,
  searchBlog,
  getBlog,
  updateBlog,
} from "../../../actions/dashboardActions";
import { validateFAQ } from "../../../validations/faq";
import "./styles.scss";

class ManageBlog extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      query: "",
      pageLimit: 10,
      currentPage: 1,
      showViewModal: false,
      showUpdateBlogModal: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");

    this.props.allBlog(token, this.state.currentPage, this.state.pageLimit);
  }


  componentWillReceiveProps(nextProps) {

    if (nextProps.dashboard.blog && nextProps.dashboard.blog.length > 0) {
      let data = nextProps.dashboard.blog;
       console.log("data", data)
      this.setState({
        title: data[0].title,
        description: data[0].description,
        status: data[0].status,
        activeBtn: data[0].status === "Active" ? true : false,
        inactiveBtn: data[0].status === "Inactive" ? true : false,
      });
    }
  }

  handleDelete = (id) => {
    const token = localStorage.getItem("jwtToken");

    this.props.deleteBlog(id, token);
    this.props.allBlog(token, this.state.currentPage, this.state.pageLimit);
  };

  handleSearch = (query) => {
    const token = localStorage.getItem("jwtToken");

    this.setState({ query });
    this.props.searchBlog(query, token);
  };

  handlePageClick = (page) => {
    const token = localStorage.getItem("jwtToken");

    this.setState({ currentPage: page });

    this.props.allBlog(token, page, this.state.pageLimit);
  };

  handleViewModalClose = () => {
    this.setState({ showViewModal: false });
  };

  handleViewModalShow = (id) => {
    this.setState({ showViewModal: true, id });

    const token = localStorage.getItem("jwtToken");
    this.props.getBlog(id, token);
  };

  handleUpdateBlog = (id) => {
    this.setState({ showUpdateBlogModal: true, id });

    const token = localStorage.getItem("jwtToken");
    this.props.getBlog(id, token);
  };

  handleUpdateBlogModalClose = () => {
    this.setState({ showUpdateBlogModal: false });
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


  handleUpdateBlogSubmit = (e) => {
    e.preventDefault();
   
    let { id, title, description, status } = this.state;

    // let result = validateFAQ(question, answer);
    // if (result) return toast.error(result);

    let blog = {
      id,
      title,
      description,
      status,
    };

    const token = localStorage.getItem("jwtToken");
    this.props.updateBlog(blog, token);
    this.props.allBlog(token, this.state.currentPage, this.state.pageLimit);
    this.setState({
      editor: "",
      title: "",
      description: "",
      status: "",
      activeBtn: false,
      inactiveBtn: false,
      showUpdateBlogModal: false,
    });
  };
  handleTagsChange = (tags) => {
    this.setState({ tags });
  };
  render() {
    console.log("dash bord blog", this.props.dashboard)
    const currentPageLength = this.props.dashboard.blog.length;

    const totalBlog = sessionStorage.getItem("total_blog") || 0;
    const currentRecordsFrom =
      this.state.pageLimit * (this.state.currentPage - 1) + 1;
    const currentRecordsTo = currentRecordsFrom + currentPageLength - 1;

    const profile = this.props.dashboard.adminProfileData;
    const modules = profile && profile.modules ? profile.modules : {};
    const blog = modules && modules.faq ? modules.faq : {};

    return (
      <React.Fragment>
        <div className="manage-faq-wrapper">
          <h5>Manage Blogs</h5>
          <hr />
          <div className="manage-faq custom_class">
            <div className="row mx-0">
              <div className="col-md-7 pl-0"></div>
              <div className="col-md-5 pr-0">
                <Search
                  icon="fa fa-search icon"
                  size="15px"
                  placeholder="Search Blog"
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
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.dashboard.blog &&
                    this.props.dashboard.blog.length > 0 &&
                    this.props.dashboard.blog.map((f, index) => (
                      <tr key={f._id}>
                        <td>{index + 1}</td>
                        <td>{f.title}</td>
                        <td>{f.description}</td>
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
                            onClick={() => this.handleUpdateBlog(f._id)}
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
                    {totalBlog}
                  </h6>
                )}
              </div>
              <div className="col-md-6 pl-0">
                {!this.state.query && (
                  <Pagination
                    count={totalBlog}
                    pageLimit={this.state.pageLimit}
                    currentPage={this.state.currentPage}
                    handlePageClick={this.handlePageClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <ViewBlog
          showViewModal={this.state.showViewModal}
          handleViewModalClose={this.handleViewModalClose}
          details={this.props.dashboard.singleBlog}
        />

        <UpdateBlog
          showUpdateBlogModal={this.state.showUpdateBlogModal}
          handleUpdateBlogModalClose={this.handleUpdateBlogModalClose}
          handleUpdateBlogSubmit={this.handleUpdateBlogSubmit}
          handleInputChange={this.handleInputChange}
          handleTagsChange={this.handleTagsChange}
          handleInit={this.handleInit}
          handleChange={this.handleChange}
          handleRadioChange={this.handleRadioChange}
          title={this.state.title}
          description={this.state.description}
          activeBtn={this.state.activeBtn}
          inactiveBtn={this.state.inactiveBtn}
        />

      </React.Fragment>
    );
  }
}

ManageBlog.propTypes = {
  dashboard: PropTypes.object.isRequired,
  allBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  searchBlog: PropTypes.func.isRequired,
  getBlog: PropTypes.func.isRequired,
  updateBlog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {
  allBlog,
  deleteBlog,
  searchBlog,
  getBlog,
  updateBlog,
})(ManageBlog);
