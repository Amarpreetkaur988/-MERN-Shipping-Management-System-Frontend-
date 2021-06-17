import React from "react";

import Statistic from "./Statistic";

const Statistics = (props) => {
  const { stats } = props;

  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-md-4 pl-0">
            <Statistic
              value={stats && stats.patients}
              name="Managers"
              icon="user-plus"
              size={35}
              bgColor="#06cbff"
            />
          </div>

          <div className="col-md-4 pl-0">
            <Statistic
              value={stats && stats.doctors}
              name="Captains"
              icon="user-md"
              size={35}
              bgColor="#123148"
            />
          </div>

          {/* <div className="col-md-4 pl-0">
            <Statistic
              value={stats && stats.psychologist}
              name="Psychologists"
              icon="user-md"
              size={35}
              bgColor="#E73D8E"
            />
          </div>

          <div className="col-md-4 pl-0">
            <Statistic
              value={stats && stats.fitnessCoach}
              name="Fitness Coaches"
              icon="male"
              size={35}
              bgColor="#BF67CE"
            />
          </div>

          <div className="col-md-4 pl-0">
            <Statistic
              value={stats && stats.appointments}
              name="Appointments"
              icon="sticky-note"
              size={35}
              bgColor="#3AABCC"
            />
          </div>

          <div className="col-md-4 pl-0">
            <Statistic
              value="0"
              name="Subscriptions"
              icon="ticket"
              size={35}
              bgColor="#9675CE"
            />
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Statistics;
