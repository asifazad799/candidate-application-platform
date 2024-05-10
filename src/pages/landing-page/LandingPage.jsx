import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./landing-page.css";

import { useInfinityScroll } from "../../api";
import { useClientSideDataFilter } from "../../hooks";

import { JobCard, UseJobFilter } from "../../components";

function LandingPage() {
  const [params, setParams] = useState({ limit: 9, offset: 0 });

  const { data, fetchNextPage, hasNextPage, isLoading, latestData } =
    useInfinityScroll({
      url: "/adhoc/getSampleJdJSON",
      body: { limit: 9, offset: 0 },
      currentOffset: params?.offset + 9,
    });
  const { filter, renderFilter } = UseJobFilter({});

  const { newData } = useClientSideDataFilter({
    data: data,
    filter: filter,
    latestData: latestData,
  });

  return (
    <div className="job-list">
      {renderFilter()}
      <InfiniteScroll
        dataLength={data?.length || 0}
        next={() => {
          fetchNextPage({ pageParam: { offset: params.offset + 9 } }).then(
            () => {
              setParams((prev) => ({ ...prev, offset: prev.offset + 9 }));
            }
          );
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
        // height={"800px"} use height to customize the height
      >
        {newData?.map((jd) => {
          return <JobCard key={jd?.jdUid} jobData={jd} />;
        })}
      </InfiniteScroll>
    </div>
  );
}

export default LandingPage;
