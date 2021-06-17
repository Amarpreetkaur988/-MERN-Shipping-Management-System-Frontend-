import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import Form from "./Form";
import BasicDetails from "./BasicDetails";
import ManagerHistory from "./ManagerHistory";
import Staffs from "./Staffs";
import AddedArticles from "./AddedArticles";
import Vessels from "./Vessels";
import { validateEditManager } from "../../../validations/add-manager";
import { getManager, updateManager } from "../../../actions/dashboardActions";

const ManagerDetails = (props) => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    props.getManager(id, token);
  }, []);

  useEffect(() => {
     console.log("p======", props.dashboard)
    if (props.dashboard.singleManagerInfo) {
     
      setFirstName(props.dashboard.singleManagerInfo.firstName);
      setLastName(props.dashboard.singleManagerInfo.lastName);
      setEmail(props.dashboard.singleManagerInfo.email);
      setPhone(props.dashboard.singleManagerInfo.phone);
      setCompanyName(props.dashboard.singleManagerInfo.companyName);
      setState(props.dashboard.singleManagerInfo.state);
      setCity(props.dashboard.singleManagerInfo.city);
      setAddress(props.dashboard.singleManagerInfo.address);
      setLat(
        (props.dashboard.singleManagerInfo.coordinates &&
          props.dashboard.singleManagerInfo.coordinates.lat) ||
          0
      );
      setLng(
        (props.dashboard.singleManagerInfo.coordinates &&
          props.dashboard.singleManagerInfo.coordinates.lng) ||
          0
      );
    }
  }, [props]);

  const handleDetailsUpdate = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("jwtToken");

    const result = validateEditManager(
      firstName,
      lastName,
      email,
      phone,
      
    );
    if (result) return toast.error(result);

    const manager = {
      id,
      firstName,
      lastName,
      email,
      phone,
    };

    props.updateManager(manager, token);

    props.getManager(id, token);
  };

  return (
    <React.Fragment>
      <div className="patient-details">
        <h3>Manager Details</h3>

        <hr />

        <div className="row mx-0">
          <div className="col-md-4 pl-0">
            <div className="basic-details">
              <BasicDetails
                details={
                  props.dashboard.singleManagerInfo
                    ? props.dashboard.singleManagerInfo
                    : ""
                }
              />
            </div>
          </div>
          <div className="col-md-8 pr-0">
            <div className="personal-details">
              <h5>Personal Details</h5>
              <Form
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                companyName={companyName}
                setCompanyName={setCompanyName}
                address={address}
                setAddress={setAddress}
                lat={lat}
                setLat={setLat}
                lng={lng}
                setLng={setLng}
              
                handleDetailsUpdate={handleDetailsUpdate}
              />
            </div>
          </div>
        </div>

       

        {/* <div className="row mx-0">
          <div className="col-md-12 px-0">
            <div className="appointment-history">
              <h5>Appointment History</h5>
              <div className="table-responsive">
                {" "}
                <ManagerHistory
                  appointments={
                    props.dashboard.patientAppointments
                      ? props.dashboard.patientAppointments
                      : ""
                  }
                />
              </div>
            </div>
          </div>
        </div> */}

        <div className="row mx-0">
          <div className="col-md-12 px-0">
            <div className="ratings">
              <h5>Staffs</h5>
              <div className="table-responsive">
                {" "}
                <Staffs staffs={props.dashboard.staffs} />
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-md-12 px-0">
            <div className="referred-users">
              <h5>Vessels</h5>
              <div className="table-responsive">
                {" "}
                <Vessels vessels={props.dashboard.vessels} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </React.Fragment>
  );
};

ManagerDetails.propTypes = {
  dashboard: PropTypes.object.isRequired,
  getManager: PropTypes.func.isRequired,
  updateManager: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, { getManager, updateManager })(
  memo(ManagerDetails)
);
