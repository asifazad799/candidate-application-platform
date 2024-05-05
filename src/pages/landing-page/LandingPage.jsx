import React from "react";

import "./landing-page.css";
import { staticData } from "./staticData";

import { JobCard, UseJobFilter } from "../../components";

function LandingPage() {
  const { filter, renderFilter } = UseJobFilter();

  return (
    <div className="job-list">
      {renderFilter()}
      <div className="job-list-container">
        {staticData?.jdList?.map((jd) => {
          return <JobCard key={jd?.jdUid} jobData={jd} />;
        })}
      </div>
    </div>
  );
}

export default LandingPage;
