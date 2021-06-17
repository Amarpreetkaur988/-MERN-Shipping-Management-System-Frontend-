import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import ProfileDetails from "./ProfileDetails";
import ProfileImg from "./ProfileImg";
import { getProfile, submitProfile } from "../../../actions/dashboardActions";
import { validateProfile } from "../../../validations/profile";
import { api_url } from "../../../utils/api";
import "./styles.scss";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      gender: "",
      city: "",
      state: "",
      country: "",
      pin: "",
      address: "",
      created_at: "",
      maleRadioBtn: false,
      femaleRadioBtn: false,
      imagePreviewUrl: "",
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    if (token) this.props.getProfile(token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dashboard.adminProfileData) {
      this.setState({
        firstName: nextProps.dashboard.adminProfileData.firstName,
        lastName: nextProps.dashboard.adminProfileData.lastName,
        email: nextProps.dashboard.adminProfileData.email,
        phoneNumber: nextProps.dashboard.adminProfileData.phoneNumber,
        gender: nextProps.dashboard.adminProfileData.gender,
        city: nextProps.dashboard.adminProfileData.city,
        state: nextProps.dashboard.adminProfileData.state,
        country: nextProps.dashboard.adminProfileData.country,
        pin: nextProps.dashboard.adminProfileData.pin,
        address: nextProps.dashboard.adminProfileData.address,
        created_at: nextProps.dashboard.adminProfileData.created_at,
        image: nextProps.dashboard.adminProfileData.image,
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRoleChange = (role) => {
    this.setState({ role });
  };

  handleRadioChange = (gender) => {
    gender === "Male"
      ? this.setState({
          maleRadioBtn: true,
          femaleRadioBtn: false,
          gender,
        })
      : this.setState({
          femaleRadioBtn: true,
          maleRadioBtn: false,
          gender,
        });
  };

  handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validate = validateProfile(this.state);
    if (validate) return toast.error(validate);

    const token = localStorage.getItem("jwtToken");

    const profile = new FormData();

    profile.append("image", this.state.image);
    profile.append("firstName", this.state.firstName);
    profile.append("lastName", this.state.lastName);
    profile.append("phoneNumber", this.state.phoneNumber);
    profile.append("email", this.state.email);
    profile.append("gender", this.state.gender);
    profile.append("city", this.state.city);
    profile.append("state", this.state.state);
    profile.append("country", this.state.country);
    profile.append("pin", this.state.pin);
    profile.append("address", this.state.address);

    this.props.submitProfile(profile, token);
    this.props.getProfile(token);
  };

  render() {
    let imagePreview = api_url + "/default.png";

    if (this.state.image) imagePreview = `${this.state.image}`;
    if (this.state.imagePreviewUrl) imagePreview = this.state.imagePreviewUrl;

    return (
      <React.Fragment>
        <div className="profile-wrapper">
          <div className="row mx-0">
            <div className="col-md-12 px-0">
              <h5>Manage Profile</h5>
              <hr />
            </div>

            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
              <div className="row mx-0 p-custom">
                <div className="col-md-3 pl-0">
                  <div className="profile-img">
                    <ProfileImg
                      imagePreview={imagePreview}
                      handleImageChange={this.handleImageChange}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      email={this.state.email}
                      phoneNumber={this.state.phoneNumber}
                      created_at={this.state.created_at}
                    />
                  </div>
                </div>
                <div className="col-md-9 pr-0">
                  <div className="profile-details">
                    <ProfileDetails
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      email={this.state.email}
                      phoneNumber={this.state.phoneNumber}
                      country={this.state.country}
                      state={this.state.state}
                      city={this.state.city}
                      pin={this.state.pin}
                      address={this.state.address}
                      gender={this.state.gender}
                      handleChange={this.handleChange}
                      handleRadioChange={this.handleRadioChange}
                      handleSubmit={this.handleSubmit}
                      handleDateChange={this.handleDateChange}
                      handleRoleChange={this.handleRoleChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  dashboard: PropTypes.object.isRequired,
  submitProfile: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, { getProfile, submitProfile })(Profile);
