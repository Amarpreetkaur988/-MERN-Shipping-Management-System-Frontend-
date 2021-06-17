import React from "react";
import { ListGroup } from "react-bootstrap";
import moment from "moment";

import NavItem from "../../common/NavTab/NavItem";
import TabContent from "../../common/NavTab/TabContent";
import { api_url } from "../../../utils/api";

const OtherDetails = (props) => {
  let speciality = props.data && props.data.speciality;
  let qualification = props.data && props.data.qualification;
  let offlinePatients = props.data && props.data.offlinePatients;
  let clinicDetails = props.data && props.data.clinicDetails;
  let consultationSchedule = props.data && props.data.consultationSchedule;

  return (
    <React.Fragment>
      <div className="other-details">
        <h5>Other Details</h5>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <NavItem
            className={props.specialityActive ? "active" : ""}
            id="speciality-tab"
            href="speciality"
            selected={true}
            value="Speciality"
            handleClick={props.handleSpecialityClick}
          />
          <NavItem
            className={props.qualificationActive ? "active" : ""}
            id="qualification-tab"
            href="qualification"
            selected={true}
            value="Qualification"
            handleClick={props.handleQualificationClick}
          />
          <NavItem
            className={props.offlinePatientsActive ? "active" : ""}
            id="offline-patients-tab"
            href="offlinePatients"
            selected={true}
            value="Offline Patients"
            handleClick={props.handleOfflinePatientsClick}
          />
          <NavItem
            className={props.clinicDetailsActive ? "active" : ""}
            id="clinic-details-tab"
            href="clinicDetails"
            selected={true}
            value="Clinic Details"
            handleClick={props.handleClinicDetailsClick}
          />
          <NavItem
            className={props.regDetailsActive ? "active" : ""}
            id="reg-details-tab"
            href="regDetails"
            selected={true}
            value="Reg. Details"
            handleClick={props.handleRegDetailsClick}
          />
          <NavItem
            className={props.docsActive ? "active" : ""}
            id="docs-tab"
            href="docs"
            selected={true}
            value="Docs Details"
            handleClick={props.handleDocsClick}
          />
          <NavItem
            className={props.consultationActive ? "active" : ""}
            id="consultation-schedule-tab"
            href="consultation-schedule"
            selected={true}
            value="Consultation Schedule"
            handleClick={props.handleConsultationScheduleClick}
          />
        </ul>

        <div class="tab-content" id="myTabContent">
          {/* Speciality Content */}

          <TabContent
            className={props.specialityActive ? "show active" : ""}
            id="speciality"
            label="speciality-tab"
          >
            {speciality
              ? speciality.map((s) => <li>{s}</li>)
              : "No Specialities found"}
          </TabContent>

          {/* Qualification Content */}

          <TabContent
            className={props.qualificationActive ? "show active" : ""}
            id="qualification"
            label="qualification-tab"
          >
            <div className="row mx-0">
              {qualification &&
                qualification.length > 0 &&
                qualification.map((q) => (
                  <div className="col-md-4 mb-4">
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Degree <span>{q.degree || "-"}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      College <span>{q.college || "-"}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                      Year <span>{q.year || "-"}</span>
                    </ListGroup.Item>
                  </div>
                ))}
            </div>
          </TabContent>

          {/* Offline Patients Content */}

          <TabContent
            className={props.offlinePatientsActive ? "show active" : ""}
            id="offlinePatients"
            label="offline-patients-tab"
          >
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Appointments</th>
                  <th>Date Added</th>
                </tr>
              </thead>
              <tbody>
                {offlinePatients &&
                  offlinePatients.length > 0 &&
                  offlinePatients.map((op, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={op.image || api_url + "/default.png"}
                          alt="img"
                          className="profile-img"
                        />
                      </td>
                      <td>{op.firstName}</td>
                      <td>{op.email}</td>
                      <td>{op.mobileNumber}</td>
                      <td>{op.gender}</td>
                      <td>{op.age}</td>
                      <td>{op.country}</td>
                      <td>{op.city}</td>
                      <td>{op.appointments.length}</td>
                      <td>{moment(op.created_at).format("MMM DD, YYYY")}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </TabContent>

          {/* Clinic Patients Content */}

          <TabContent
            className={props.clinicDetailsActive ? "show active" : ""}
            id="clinicDetails"
            label="clinic-details-tab"
          >
            <div className="row mx-0">
              <div className="col-md-12 px-0">
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Clinic Name{" "}
                  <span>
                    {(clinicDetails && clinicDetails.clinicName) || "-"}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Website URL{" "}
                  <span>
                    {(clinicDetails && clinicDetails.websiteURL) || "-"}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Address{" "}
                  <span>{(clinicDetails && clinicDetails.address) || "-"}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Contact Person{" "}
                  <span>
                    {(clinicDetails && clinicDetails.contactPerson) || "-"}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Phone Number{" "}
                  <span>
                    {(clinicDetails && clinicDetails.phoneNumber) || "-"}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Created On{" "}
                  <span>
                    {moment(clinicDetails && clinicDetails.created_at).format(
                      "MMM DD, YYYY"
                    ) || "-"}
                  </span>
                </ListGroup.Item>
              </div>
            </div>
          </TabContent>

          {/* Reg Details Content */}

          <TabContent
            className={props.regDetailsActive ? "show active" : ""}
            id="regDetails"
            label="reg-details-tab"
          >
            <div className="row mx-0">
              <div className="col-md-12 px-0">
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Registration Council{" "}
                  <span>
                    {(props.data && props.data.registrationCouncil) || "-"}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Registration Number{" "}
                  <span>
                    {(props.data && props.data.registrationNumber) || "-"}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Registration Year{" "}
                  <span>
                    {(props.data && props.data.registrationYear) || "-"}
                  </span>
                </ListGroup.Item>
              </div>
            </div>
          </TabContent>

          {/* Docs Content */}

          <TabContent
            className={props.docsActive ? "show active" : ""}
            id="docsDetails"
            label="docs-tab"
          >
            <div className="row mx-0">
              <div className="col-md-4">
                <ListGroup.Item>
                  <p className="d-block">Clinic Ownership Document</p>
                  <img
                    src={
                      (props.data &&
                        props.data.clinicOwnershipDoc &&
                        props.data.clinicOwnershipDoc.location) ||
                      api_url + "/default.png"
                    }
                    alt="img"
                    width="100%"
                    height="300px"
                  />
                </ListGroup.Item>
              </div>
              <div className="col-md-4">
                <ListGroup.Item>
                  <p className="d-block">Doctor Registration Document</p>
                  <img
                    src={
                      (props.data &&
                        props.data.doctorRegDoc &&
                        props.data.doctorRegDoc.location) ||
                      api_url + "/default.png"
                    }
                    alt="img"
                    width="100%"
                    height="300px"
                  />
                </ListGroup.Item>
              </div>
              <div className="col-md-4">
                <ListGroup.Item>
                  <p className="d-block">Photo ID</p>
                  <img
                    src={
                      (props.data &&
                        props.data.photoID &&
                        props.data.photoID.location) ||
                      api_url + "/default.png"
                    }
                    alt="img"
                    width="100%"
                    height="300px"
                  />
                </ListGroup.Item>
              </div>
            </div>
          </TabContent>

          {/* Consultation Schedule Content */}

          <TabContent
            className={props.consultationActive ? "show active" : ""}
            id="consultation-schedule"
            label="consultation-schedule-tab"
          >
            <div className="row mx-0">
              {consultationSchedule && (
                <div className="col-md-12 px-0 mb-3">
                  <ListGroup.Item>
                    <span className="d-block mb-2">Available On</span>
                    <div>
                      {consultationSchedule.availableOn.map((ao) => (
                        <li>{ao}</li>
                      ))}
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="d-block mb-2">Consultation Type</span>
                    <div>
                      {consultationSchedule.consultationType.map((ct) => (
                        <li>{ct}</li>
                      ))}
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Is Same for Weekends?{" "}
                    <span>
                      {consultationSchedule.isSameForWeekends ? "Yes" : "No"}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    Time Slot Duration{" "}
                    <span>{consultationSchedule.timeSlotDuration}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className="d-block mb-2">Sessions</span>
                    <div>
                      {consultationSchedule.sessions.map((s) => (
                        <li>
                          {s.startTime} to {s.endTime}
                        </li>
                      ))}
                    </div>
                  </ListGroup.Item>
                </div>
              )}
            </div>
          </TabContent>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OtherDetails;
