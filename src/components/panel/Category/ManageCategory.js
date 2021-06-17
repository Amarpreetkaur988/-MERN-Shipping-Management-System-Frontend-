import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UpdateFAQ from "../../common/Modal/UpdateFAQ";
import Pagination from "../../common/Pagination/Pagination";
import Search from "../../common/Search/Search";
import ViewFAQ from "../../common/Modal/ViewFAQ";
import AddCategory from "../../common/Modal/AddCategory";
import {
  allFAQ,
  deleteFAQ,
  searchFAQ,
  getFAQ,
  updateFAQ,
  addCategory,
} from "../../../actions/dashboardActions";
import { api_url } from "../../../utils/api";
import Button from "../../common/Button/Button";
import { validateFAQ } from "../../../validations/faq";
import "./styles.scss";

class ManageCategory extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      query: "",
      pageLimit: 10,
      currentPage: 1,
      showViewModal: false,
      showUpdateCategoryModal: false,
      showAddCategoryModal: false,
      image: '',
      imagePreviewUrl: '',
      title: ''
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

  handleAddcategory = () => {
      console.log("add category")
   this.setState({showAddCategoryModal: true});
  };

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
  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleRadioChange = (status) => {
    if (status === "Active") {
      this.setState({ status, activeBtn: true, inactiveBtn: false });
    } else {
      this.setState({ status, activeBtn: false, inactiveBtn: true });
    }
  };
  handleImageChange = (e) => {
  // e.preventDefault();
    let reader = new FileReader();
    console.log(e.target.files[0].name)
    let file = e.target.files[0];
    reader.onloadend = () => {
        console.log("redaer.result", reader.result)
      this.setState({
        image: file || '',
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };


  handleSubmit = (e) => {
    e.preventDefault();

    // let result = validateFAQ(question, answer);
    // if (result) return toast.error(result);

   console.log("this.state.imade",  this.state.image)
    const category = new FormData();
    category.append("title", this.state.title);
    category.append("image", this.state.image);
    category.append("status", this.state.status);
    category.append("pageLimit", this.state.pageLimit);
    category.append("page", this.state.currentPage);

    const token = localStorage.getItem("jwtToken");
    this.props.addCategory(category, token);
 
  };
  handleTagsChange = (tags) => {
    this.setState({ tags });
  };
  render() {
    const currentPageLength = this.props.dashboard.faq.length;
    let imagePreview = api_url + "/default.png";

    if (this.state.image) imagePreview = `${this.state.image}`;
    if (this.state.imagePreviewUrl) imagePreview = this.state.imagePreviewUrl;
    return (
      <React.Fragment>
        <div className="manage-faq-wrapper">
          <h5>Manage Categories</h5>
          <hr />
          <div className="manage-faq custom_class">
            <div className="row mx-0">
              <div className="col-md-7 pl-0">
              <Link
                to="#"
                onClick={() => this.handleAddcategory()}
                >
                Add Category
                </Link> 
                
              </div>
              <div className="col-md-5 pr-0">
                <Search
                  icon="fa fa-search icon"
                  size="15px"
                  placeholder="Search Category"
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
                    <th>Category</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* <tbody>
                  {this.props.dashboard.categories &&
                    this.props.dashboard.categories.length > 0 &&
                    this.props.dashboard.categories.map((f, index) => (
                      <tr key={f._id}>
                        <td>{index + 1}</td>
                        <td>{f.title}</td>
                        <td>{f.image}</td>
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
                            onClick={() => this.handleUpdateCategory(f._id)}
                            >
                            <i className="fa fa-edit"></i>
                            </Link>
                            </>
                        </td>
                      </tr>
                    ))}
                </tbody> */}
              </table>
            </div>
            <div className="row mx-0">
              {/* <div className="col-md-6 pr-0">
                {!this.state.query && (
                  <h6 className="results">
                    Showing {currentRecordsFrom} - {currentRecordsTo} results of{" "}
                    {totalFAQ}
                  </h6>
                )}
              </div> */}
              <div className="col-md-6 pl-0">
                {!this.state.query && (
                  <Pagination
                    // count={totalFAQ}
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
        <AddCategory 
            showAddCategoryModal={this.state.showAddCategoryModal}
            handleSubmit={this.handleSubmit}
            activeBtn={this.state.activeBtn}
            inactiveBtn={this.state.inactiveBtn}
            handleChange={this.handleChange}
            handleImageChange={this.handleImageChange}
            imagePreviewUrl={this.state.imagePreviewUrl}
            imagePreview={imagePreview}
            image={this.state.image}
            title={this.state.title}
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

ManageCategory.propTypes = {
  dashboard: PropTypes.object.isRequired,
  allFAQ: PropTypes.func.isRequired,
  deleteFAQ: PropTypes.func.isRequired,
  searchFAQ: PropTypes.func.isRequired,
  getFAQ: PropTypes.func.isRequired,
  updateFAQ: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
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
  addCategory,
})(ManageCategory);
