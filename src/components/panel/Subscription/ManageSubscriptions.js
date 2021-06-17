import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Search from "../../common/Search/Search";
import EditSubscription from "../../common/Modal/EditSubscription";
import ViewSubscriptionPlan from "../../common/Modal/ViewSubscriptionPlans";
import { validateEditSubscription } from "../../../validations/add-subscription";
import { api_url } from "../../../utils/api";
import {
  allSubscriptions,
  getSubscription,
  updateSubscription,
  searchSubscription,
  deleteSubscription,
} from "../../../actions/dashboardActions";
import "./styles.scss";

class ManageSubscriptions extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      pageLimit: 10,
      currentPage: 1,
      showEditSubscriptionModal: false,
      id: "",
      type: "",
      planName: "",
      status: "",
      activeBtn: false,
      inactiveBtn: false,
      amount: "",
      duration: "",
      details: "",
      text: "",
      showViewSubscriptionModal: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    this.props.allSubscriptions(
      token,
      this.state.currentPage,
      this.state.pageLimit
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps.dashboard.singleSubscription", nextProps.dashboard.singleSubscription)
    if (
      nextProps.dashboard.singleSubscription
    ) {
      const sub = nextProps.dashboard.singleSubscription;

      this.setState({
        planName: sub.planName,
        status: sub.status,
        activeBtn: sub.status === "Active" ? true : false,
        inactiveBtn: sub.status === "Inactive" ? true : false,
        amount: sub.amount,
        duration: sub.duration,
        text: sub.text,
       
      });
    }
  }

  handleEditSubscriptionModalShow = (id) => {
    this.setState({ showEditSubscriptionModal: true, id });

    const token = localStorage.getItem("jwtToken");
    this.props.getSubscription(id, token);
  };

  handleEditSubscriptionModalClose = () => {
    this.setState({
      showEditSubscriptionModal: false,
      planName: "",
      status: "",
      activeBtn: false,
      inactiveBtn: false,
      amount: "",
      duration: "",
    
      text: "",
    });
  };


  handleSearch = (query) => {
    this.setState({ query });

    const token = localStorage.getItem("jwtToken");

      this.props.searchSubscription(query, token);
    
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleStatusChange = (status) => {
    if (status === "Active") {
      this.setState({ status: status, activeBtn: true, inactiveBtn: false });
    } else {
      this.setState({ status: status, activeBtn: false, inactiveBtn: true });
    }
  };


  handleDelete = (id) => {
    const token = localStorage.getItem("jwtToken");

      this.props.deleteSubscription(id, token);
      this.props.allSubscriptions(
        token,
        this.state.currentPage,
        this.state.pageLimit
      );
  };

  handleViewSubscriptionModalShow = (id) => {
    this.setState({ showViewSubscriptionModal: true, id });

    const token = localStorage.getItem("jwtToken");
    this.props.getSubscription(id, token);
  };

  handleViewSubscriptionModalClose = () => {
    this.setState({ showViewSubscriptionModal: false });
  };


  handleSubmit = (e) => {
    e.preventDefault();

    // const result = validateEditSubscription(this.state);
    // if (result) return toast.error(result);

    const subscriptionPlan = {
      id: this.state.id,
      planName: this.state.planName,
      planAmount: this.state.amount,
      duration: this.state.duration,
      text: this.state.text,
      status: this.state.status,
    };

    const token = localStorage.getItem("jwtToken");
    this.props.updateSubscription(subscriptionPlan, token);

    this.setState({ showEditSubscriptionModal: false });
    this.props.allSubscriptions(
      token,
      this.state.currentPage,
      this.state.pageLimit
    );
  };

  render() {
    const {

      query,
    } = this.state;
    return (
      <React.Fragment>
        <div className="manage-subscription-wrapper">
          <h5>Manage Subscriptions</h5>
          <hr />

          <div className="manage-subscription custom_class">
            <div className="row mx-0">
              
              <div className="col-md-5 pr-0 custom_width_search">
                <Search
                  icon="fa fa-search icon"
                  size="15px"
                  placeholder="Search Plans"
                  styles={{
                    marginBottom: "20px",
                    fontSize: "15px",
                    paddingLeft: "35px",
                  }}
                  search={query}
                  handleSearch={this.handleSearch}
                />
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Plan Name</th>
                      <th>Duration</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
          
                <tbody>
                  {
                    this.props.dashboard.Subscriptions &&
                    this.props.dashboard.Subscriptions.length > 0 &&
                    this.props.dashboard.Subscriptions.map((s, index) => (
                      <tr key={s._id}>
                        <td>{index + 1}</td>
                        <td>{s.planName}</td>
                        <td>{s.duration}</td>
                        <td>{s.amount}</td>
                        <td>
                          <span className={s.status}>{s.status}</span>
                        </td>
                        <td>
                          <Link
                            to="#"
                            onClick={() =>
                              this.handleViewSubscriptionModalShow(s._id)
                            }
                          >
                            <i className="fa fa-eye"></i>
                          </Link>
                            <Link
                              to="#"
                              onClick={() =>
                                this.handleEditSubscriptionModalShow(s._id)
                              }
                            >
                              <i className="fa fa-edit"></i>
                            </Link>
                        
                            <Link
                              to="#"
                              onClick={() => this.handleDelete(s._id)}
                            >
                              <i className="fa fa-trash"></i>
                            </Link>
                        </td>
                      </tr>
                    ))}

                  
                </tbody>
              </table>
            </div>
            <div className="row mx-0">
              <div className="col-md-6 pr-0">
              
              </div>
              <div className="col-md-6 pl-0">
              
              </div>
            </div>
          </div>
        </div>

        <EditSubscription
          showEditSubscriptionModal={this.state.showEditSubscriptionModal}
          handleEditSubscriptionModalClose={
            this.handleEditSubscriptionModalClose
          }
          handleSubmit={this.handleSubmit}
          planName={this.state.planName}
          handleChange={this.handleChange}
          amount={this.state.amount}
          duration={this.state.duration}
          text={this.state.text}
          activeBtn={this.state.activeBtn}
          inactiveBtn={this.state.inactiveBtn}
          handlePlanForChange={this.handlePlanForChange}
          handleStatusChange={this.handleStatusChange}
        />

       
        <ViewSubscriptionPlan
          showViewSubscriptionModal={this.state.showViewSubscriptionModal}
          handleViewSubscriptionModalClose={this.handleViewSubscriptionModalClose}
          details={this.props.dashboard.singleSubscription}
        />

       
      </React.Fragment>
    );
  }
}

ManageSubscriptions.propTypes = {
  dashboard: PropTypes.object.isRequired,
  allSubscriptions: PropTypes.func.isRequired,
  getSubscription: PropTypes.func.isRequired,
  updateSubscription: PropTypes.func.isRequired,
  searchSubscription: PropTypes.func.isRequired,
  deleteSubscription: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, {
  allSubscriptions,
  getSubscription,
  updateSubscription,
  searchSubscription,
  deleteSubscription,
})(ManageSubscriptions);
