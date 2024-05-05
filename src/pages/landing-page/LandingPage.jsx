import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./landing-page.css";

import { staticData } from "./staticData";
import { useInfinityScroll } from "../../api";

import { JobCard, UseJobFilter } from "../../components";

function LandingPage() {
  const { filter, renderFilter } = UseJobFilter();
  const [params, setParams] = useState({ limit: 9, offset: 0 });

  const { data, fetchNextPage, hasNextPage, isLoading, total } =
    useInfinityScroll({
      url: "adhoc/getSampleJdJSON",
      body: { limit: 9, offset: 0 },
    });

  const handleNextPageCall = () => {
    return new Promise((resolve, reject) => {
      try {
        setParams((prev) => ({ ...prev, offset: prev.offset + 9 }));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <div className="job-list">
      {renderFilter()}
      <InfiniteScroll
        dataLength={data?.length}
        next={() => {
          handleNextPageCall().then(() => {
            fetchNextPage({ pageParam: { offset: params.offset + 9 } });
          });
        }}
        hasMore={hasNextPage}
        loader={isLoading && <h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <h4>Yay! You have seen it all</h4>
          </p>
        }
        style={{ width: "100%" }}
        className="job-list-container"
        // height={"800px"}
      >
        {data?.map((jd) => {
          return <JobCard key={jd?.jdUid} jobData={jd} />;
        })}
      </InfiniteScroll>
    </div>
  );
}

export default LandingPage;
