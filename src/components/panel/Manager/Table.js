import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import LazyLoadImage from "../../common/Lazy/Image";
// import ExportDataAsCSV from "../../common/Modal/ExportDataAsCSV";
import { api_url } from "../../../utils/api";

const Table = (props) => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleNoBtnClick = () => {
    setShowModal(false);
  };

  const handleYesBtnClick = () => {
    setShowModal(false);
  };

  const saveDataAsCSV = (patient) => {
    const csvData = [
      [
        "ID",
        "Image",
        "First Name",
        "Last Name",
        "Email",
        "isEmailVerified",
        "Phone Number",
        "Country Code",
        "isPhoneNumberVerified",
        "DOB",
        "Gender",
        "Height",
        "Weight",
        "City",
        "Country",
        "Pin",
        "Address",
        "Discount",
        "Billing Address",
        "Family Members",
        "My Doctors",
      ],
      [
        patient._id,
        patient.basicInfo.image,
        patient.basicInfo.firstName,
        patient.basicInfo.lastName,
        patient.basicInfo.email,
        patient.basicInfo.isEmailVerified,
        patient.basicInfo.phoneNumber,
        patient.basicInfo.countryCode,
        patient.basicInfo.isPhoneNumberVerified,
        patient.basicInfo.dob,
        patient.basicInfo.gender,
        patient.height,
        patient.weight,
        patient.basicInfo.city,
        patient.basicInfo.country,
        patient.basicInfo.pin,
        patient.basicInfo.address,
        patient.discount,
        patient.billingAddress,
        patient.familyMembers,
        patient.myDoctors,
      ],
    ];

    setData(csvData);
    setShowModal(true);
  };

  const modules = props.data && props.data.modules ? props.data.modules : {};
  const patient = modules && modules.patient ? modules.patient : {};

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Date Registered</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.managers &&
            props.managers.length > 0 &&
            props.managers.map((p, index) => (
              <tr key={p._id}>
                <td>{index + 1}</td>
                <td>
                  <LazyLoadImage
                    src={
                      p.image && p.image
                        ? p.image
                        : api_url + "/default.png"
                    }
                    alt="profile"
                  />
                </td>
                <td>
                  {p.firstName} {p.lastName}
                </td>
                <td>{p.email}</td>
                <td>{p.phoneNumber}</td>
                <td>{moment(p.created_at).format("MMM DD, YYYY")}</td>
                <td>
                  <span
                    className={
                      p.isUserBlocked ? "suspended" : "active"
                    }
                  >
                    {p.isUserBlocked ? "Suspended" : "Active"}
                  </span>
                </td>
                <td>
                    <Link to={`/admin/manager-details/${p._id}`}>
                    <span>  <i className="fa fa-eye"></i></span>
                    </Link>
                    <Link to="#">
                      <i
                        className="fa fa-unlock"
                        onClick={() => props.unblockUser(p._id)}
                      ></i>
                    </Link>
                    <Link to="#">
                      <i
                        className="fa fa-trash"
                        onClick={() => props.deleteModalClicked(p._id)}
                      ></i>
                    </Link>
                    <Link to="#" onClick={() => saveDataAsCSV(p)}>
                    <i className="fa fa-save"></i>
                    </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* <ExportDataAsCSV
        showModal={showModal}
        handleModalClose={handleModalClose}
        title="Export Data as CSV"
        text="Are you sure you want to export data in csv format?"
        data={data}
        handleNoBtnClick={handleNoBtnClick}
        handleYesBtnClick={handleYesBtnClick}
      /> */}
    </React.Fragment>
  );
};

export default Table;
