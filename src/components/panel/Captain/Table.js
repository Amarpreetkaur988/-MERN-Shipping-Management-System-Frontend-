import React, { useState } from "react";
import { Link } from "react-router-dom";

import LazyLoadImage from "../../common/Lazy/Image";
// import ExportDataAsCSV from "../../common/Modal/ExportDataAsCSV";
import { api_url } from "../../../utils/api";

const Table = (props) => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { profile } = props;
  const { doctor } = props;

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleNoBtnClick = () => {
    setShowModal(false);
  };

  const handleYesBtnClick = () => {
    setShowModal(false);
  };

  const saveDataAsCSV = (doctor) => {
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
      ],
      [
        doctor._id,
        doctor.basicInfo.image,
        doctor.basicInfo.firstName,
        doctor.basicInfo.lastName,
        doctor.basicInfo.email,
        doctor.basicInfo.isEmailVerified,
        doctor.basicInfo.phoneNumber,
        doctor.basicInfo.countryCode,
        doctor.basicInfo.isPhoneNumberVerified,
        doctor.basicInfo.dob,
        doctor.basicInfo.gender,
        doctor.height,
        doctor.weight,
        doctor.basicInfo.city,
        doctor.basicInfo.country,
        doctor.basicInfo.pin,
        doctor.basicInfo.address,
      ],
    ];

    setData(csvData);
    setShowModal(true);
  };

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
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {console.log("stffss", props.staffs)}
          {props.staffs &&
            props.staffs.length > 0 &&
            props.staffs.map((el, index) => (
              <tr key={el._id}>
                <td>{index + 1}</td>
                <td>
                  <LazyLoadImage
                    src={el.image || api_url + "/default.png"}
                    alt="staff-image"
                    width="50"
                  />
                </td>
                <td>
                  {el.username}
                </td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>{el.managerId.firstName}</td>
                <td>
                  <span
                    className={
                      el.isUserBlocked ? "suspended" : "active"
                    }
                  >
                    {el.isUserBlocked ? "suspended" : "active"}
                  </span>
                </td>
                <td>
               
                    <Link to={`/admin/captain-details/${el._id}`}>
                      <i className="fa fa-eye"></i>
                    </Link>
               
                    {/* <Link to="#">
                      <i
                        className="fa fa-unlock"
                        onClick={() => props.handleUnblockUser(el._id)}
                      ></i>
                    </Link> */}

              
                    {/* <Link to="#">
                      <i
                        className="fa fa-ban"
                        onClick={() => props.handleBlockUser(el._id)}
                      ></i>
                    </Link> */}

                  <Link to="#">
                    <i
                      className="fa fa-trash"
                      onClick={() => props.deleteUser(el._id)}
                    ></i>
                  </Link>

                  <Link to="#" onClick={() => saveDataAsCSV(el)}>
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
