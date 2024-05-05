import React from "react";

import "./landing-page.css";

import { staticData } from "./staticData";
import { useInfinityScroll } from "../../api";

import { JobCard, UseJobFilter } from "../../components";

function LandingPage() {
  const { filter, renderFilter } = UseJobFilter();
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfinityScroll({
    url: "adhoc/getSampleJdJSON",
    body: {
      limit: 9,
      offset: 0,
    },
  });

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
