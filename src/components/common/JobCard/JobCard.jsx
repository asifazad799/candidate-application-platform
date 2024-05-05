import React from "react";

import "./job-card.css";

import { Button } from "../Button";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

export function JobCard({ jobData }) {
  return (
    <div className="job-card">
      <div className="job-post-time">
        <HourglassEmptyIcon />
        <p className="job-time-text">Posted 10 days ago</p>
      </div>
      <div className="job-card-company">
        <img
          className="job-card-company-logo"
          src={jobData?.logoUrl}
          loading="lazy"
        />
        <div className="job-card-company-details">
          <p className="job-card-company-name">{jobData?.companyName}</p>
          <p className="job-card-company-position">{jobData?.jobRole}</p>
          <p className="job-card-company-location">{jobData?.location}</p>
        </div>
      </div>
      <p className="job-salary">
        Estimated Salary: ${jobData?.minJdSalary} K - ${jobData?.maxJdSalary} K
      </p>
      <div className="job-about">
        <p className="job-about-title">About Company:</p>
        <p className="job-about-us">About us </p>
        <p className="job-about-paragraph">{jobData?.jobDetailsFromCompany}</p>
        <div className="job-about-gradient-layer">
          <p className="job-about-view-more">View job</p>
        </div>
      </div>
      <p className="job-card-company-name job-min-experience">
        Minimum Experience
      </p>
      <p className="job-jd-experience">
        {jobData?.minExp ? jobData?.minExp + " Years" : "Years not mentioned"}
      </p>
      <div className="job-card-action">
        <Button label={"Easy Apply"} />
        <Button
          label={"Unlock referral asks"}
          className={"common-button-secondary"}
          labelClassName={"common-button-secondary-label"}
        />
      </div>
    </div>
  );
}
