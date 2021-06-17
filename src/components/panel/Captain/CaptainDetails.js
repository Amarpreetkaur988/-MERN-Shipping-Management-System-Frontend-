import React, { memo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import BasicDetails from "./BasicDetails";
import Form from "./Form";
import VesselHistory from "./VesselHistory";
import OtherDetails from "./OtherDetails";
import { validateEditDoctor } from "../../../validations/add-doctor";
import { getCaptain } from "../../../actions/dashboardActions";

const CaptainDetails = (props) => {
  console.log("captain details call")
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState(new Date());
  const [citizenNo, setCitizenNo] = useState("");
  const [dateOfAssignment, setDateOfAssignment] = useState("");
  const [isVerified, setIsVerified] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [nationality, setNationality] = useState("");
  const [nickName, setNickName] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [staffRole, setStaffRole] = useState(false);
  const [vessels, setVessels] = useState([]);
  const [documentId, setDocumentId] = useState("");
  const [image, setImage] = useState("");

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    props.getCaptain(id, token);
  }, []);

  useEffect(() => {
    console.log("props.dashboard", props.dashboard)
    if (props.dashboard.singleCaptain) {
      console.log("props.dashboard.singleCaptain", props.dashboard.singleCaptain)
      let {
        citizenNo,
        dateOfAssignment,
        dob,
        documentId,
        image,
        username,
        email,
        isVerified,
        licenseNo,
        nationality, 
        nickName,
        phone,
        placeOfBirth,
        staffRole,
        title,
        vessels,
      } = props.dashboard.singleCaptain;
     
      setUsername(username ? username : '');
      setEmail(email ? email : '');
      setPhone(phone ? phone : '');
      setDob(dob ? new Date(dob) : '');
      setCitizenNo(citizenNo ? citizenNo : '');
      setDateOfAssignment(dateOfAssignment ? dateOfAssignment : '');
      setIsVerified(isVerified ? isVerified : '');
      setLicenseNo(licenseNo ? licenseNo : '');
      setNationality(nationality ? nationality : '');
      setNickName(nickName ? nickName : '');
      setTitle(title ? title : '');
      setPlaceOfBirth(placeOfBirth ? placeOfBirth : '');
      setStaffRole(staffRole ? staffRole: '');
      setVessels(vessels ? vessels: '');
      setDocumentId(documentId ? documentId : '');
      setImage(image ? image : '');
    }
  }, [props]);

  const handleDetailsUpdate = (e) => {
    e.preventDefault();

    // const result = validateEditDoctor(
    //   fullName,
    //   dob,
    //   email,
    //   phoneNumber,
    //   bio,
    //   address,
    //   country,
    //   state,
    //   city,
    //   pin,
    //   title
    // );
    // if (result) return toast.error(result);

    const doctor = {
      id,
      citizenNo,
      dateOfAssignment,
      dob,
      documentId,
      image,
      username,
      email,
      isVerified,
      licenseNo,
      nationality, 
      nickName,
      phone,
      placeOfBirth,
      staffRole,
      title,
      vessels,
    };


    props.getCaptain(id, "", token);
  };

  return (
    <React.Fragment>
      <div className="doctor-details">
        <h3>Walker Details</h3>
        <hr />

        <div className="row mx-0">
          <div className="col-md-3 pl-0">
            <div className="basic-details">
              <BasicDetails data={props.dashboard.singleCaptain} />
            </div>
          </div>
          <div className="col-md-9 pr-0">
            <div className="personal-details">
              <h5>Personal Details</h5>
               <Form
               citizenNo = {citizenNo}
               setCitizenNo = {setCitizenNo}
               dateOfAssignment = {dateOfAssignment}
               setDateOfAssignment = {setDateOfAssignment}
               dob={dob}
               setDob={setDob}
               documentId={documentId}
               setDocumentId={setDocumentId}
               image={image}
               setImage={setImage}
               username={username}
               setUsername={setUsername}
               email={email}
               setEmail={setEmail}
               isVerified={isVerified}
               setIsVerified={setIsVerified}
               licenseNo={licenseNo}
               setLicenseNo={setLicenseNo}
               nationality={nationality}
               setNationality={setNationality}
               nickName={nickName}
               setNickName={setNickName}
               phone={phone}
               setPhone={setPhone}
               placeOfBirth={placeOfBirth}
               setPlaceOfBirth={setPlaceOfBirth}
               staffRole={staffRole}
               setStaffRole={setStaffRole}
               title={title}
               setTitle={setTitle}
               vessels={vessels}
               setVessels={setVessels}
              /> 
            </div>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-md-12 px-0">
            <div className="appointment-history">
              <h5>Vessel History</h5>
              <div className="table-responsive">
                {" "}
                <VesselHistory data={vessels} />
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </React.Fragment>
  );
};

CaptainDetails.propTypes = {
  dashboard: PropTypes.object.isRequired,
  getCaptain: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, { getCaptain })(
  memo(CaptainDetails)
);
