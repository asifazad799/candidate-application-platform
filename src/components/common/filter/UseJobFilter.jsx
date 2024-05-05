import React from "react";

import { useDebouncedValue } from "../../../hooks/common";

import { CustomAutocomplete } from "../../input";

const filterStatic = {
  role: [
    { title: "frontend", category: "engineering" },
    { title: "backend", category: "engineering" },
    { title: "head-hr", category: "hr" },
  ],
};

export function UseJobFilter() {
  const [filter, setFilter] = useDebouncedValue({ role: "", minJdSalary: "" });

  const handleChange = ({ key, value }) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  const renderFilter = () => {
    return (
      <div>
        <CustomAutocomplete
          label="Role"
          onChange={(e, data) => {
            handleChange({ key: "role", value: data });
          }}
          options={filterStatic.role}
          groupBy={(option) => option.category}
        />
      </div>
    );
  };

  return { renderFilter, filter };
}
