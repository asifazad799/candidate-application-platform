import React, { useState } from "react";

import "./landing-page.css";

import { staticData } from "./staticData";
import { useInfinityScroll } from "../../api";

import { JobCard, UseJobFilter } from "../../components";
import InfiniteScroll from "react-infinite-scroll-component";

function LandingPage() {
  const { filter, renderFilter } = UseJobFilter();
  const { params, setParams } = useState({ limit: 9, offset: 0 });
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
      {/* <div className="job-list-container"> */}
      <InfiniteScroll
        dataLength={100} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{ width: "100%" }}
        className="job-list-container"
      >
        {staticData?.jdList?.map((jd) => {
          return <JobCard key={jd?.jdUid} jobData={jd} />;
        })}
      </InfiniteScroll>
      {/* </div> */}
    </div>
  );
}

export default LandingPage;
