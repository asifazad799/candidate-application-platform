import React from "react";

import { useDebouncedValue } from "../../../hooks";

import "./job-filter-container.css";

import { CustomAutocomplete, TextInput } from "../../common";

const filterStatic = {
  jobRole: [
    { title: "frontend", value: "frontend", category: "engineering" },
    { title: "backend", value: "backend", category: "engineering" },
    { title: "head-hr", value: "head-hr", category: "hr" },
  ],
  minExp: [
    { title: "0", value: 0 },
    { title: "1", value: 1 },
    { title: "2", value: 2 },
    { title: "3", value: 3 },
  ],
  minJdSalary: [
    { title: "10k", value: 10 },
    { title: "20k", value: 20 },
    { title: "30k", value: 30 },
    { title: "40k", value: 40 },
    { title: "50k", value: 50 },
    { title: "60k", value: 60 },
    { title: "100k", value: 100 },
    { title: "80k", value: 80 },
  ],
  jobType: [
    { title: "Remote", value: "remote" },
    { title: "On-site", value: "on-site" },
  ],
  location: [
    { title: "Chennai", value: "chennai" },
    { title: "Bangalore", value: "bangalore" },
  ],
};

export function UseJobFilter({ data }) {
  const [filter, setFilter] = useDebouncedValue({
    initValue: {
      role: [],
      minExp: null,
      minJdSalary: null,
      jobType: [],
      location: [],
      companyName: "",
    },
  });

  const handleChange = ({ key, value }) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  const renderFilter = () => {
    return (
      <div className="job-filter-container">
        <CustomAutocomplete
          label="Role"
          onChange={(e, data) => {
            handleChange({ key: "jobRole", value: data });
          }}
          options={filterStatic.jobRole}
          groupBy={(option) => option.category}
          style={{ width: "380px" }}
        />
        <CustomAutocomplete
          label="Experience"
          onChange={(e, data) => {
            handleChange({ key: "minExp", value: data });
          }}
          options={filterStatic.minExp}
          multiple={false}
        />
        <CustomAutocomplete
          label="Min Base Pay"
          onChange={(e, data) => {
            handleChange({ key: "minJdSalary", value: data });
          }}
          options={filterStatic.minJdSalary}
          multiple={false}
        />
        <CustomAutocomplete
          label="Remote/On-site"
          onChange={(e, data) => {
            handleChange({ key: "jobType", value: data });
          }}
          options={filterStatic.jobType}
          style={{ width: "280px" }}
        />
        <CustomAutocomplete
          label="Location"
          onChange={(e, data) => {
            handleChange({ key: "location", value: data });
          }}
          options={filterStatic.location}
          style={{ width: "200px" }}
        />
        <TextInput
          label="Company Name"
          // value={filter?.companyName}
          onChange={(e) => {
            handleChange({ key: "companyName", value: e?.target?.value });
          }}
        />
      </div>
    );
  };

  return { renderFilter, filter };
}
