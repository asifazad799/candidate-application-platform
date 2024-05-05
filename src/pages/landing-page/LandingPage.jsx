import React from "react";

import "./landing-page.css";
import { staticData } from "./staticData";

import { Button, UseJobFilter } from "../../components";

//cards
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

function LandingPage() {
  const { filter, renderFilter } = UseJobFilter();

  return (
    <div>
      {renderFilter()}
      <div className="job-list-container">
        <div className="job-card">
          <div className="job-post-time">
            <HourglassEmptyIcon />
            <p className="job-time-text">Posted 10 days ago</p>
          </div>
          <div className="job-card-company">
            <div className="job-card-company-logo"></div>
            <div className="job-card-company-details">
              <p className="job-card-company-name">Company name</p>
              <p className="job-card-company-position">Job Position</p>
              <p className="job-card-company-location">Location</p>
            </div>
          </div>
          <p className="job-salary">Estimated Salary: $18 - 35 LPA</p>
          <div className="job-about">
            <p className="job-about-title">About Company:</p>
            <p className="job-about-us">About us </p>
            <p className="job-about-paragraph">
              This is a sample job and you must have displayed it to understand
              that its not just some random lorem ipsum text but something which
              was manually written. Oh well, if random text is what you were
              looking for then here it is: Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages and now in this
              assignment.
            </p>
            <div className="job-about-gradient-layer">
              <p className="job-about-view-more">View job</p>
            </div>
          </div>
          <p className="job-card-company-name job-min-experience">
            Minimum Experience
          </p>
          <p className="job-jd-experience">2 Years</p>
          <div className="job-card-action">
            <Button label={"Easy Apply"} />
            <Button
              label={"Unlock referral asks"}
              className={"common-button-secondary"}
              labelClassName={"common-button-secondary-label"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
