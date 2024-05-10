import { useEffect, useMemo, useState } from "react";

const filterData = ({ data, filter }) => {
  const filteredData = data?.filter((job) => {
    // Apply all filtering conditions in a single iteration
    const meetsJobRole =
      !filter?.jobRole?.length ||
      filter?.jobRole?.map((item) => item?.value)?.includes(job?.jobRole);
    const meetsJobType =
      !filter.jobType?.length ||
      filter.jobType.map((item) => item?.value).includes(job.location) ||
      (filter.jobType.map((item) => item?.value).includes("on-site") &&
        job.location !== "remote");
    const meetsCompanyName =
      !filter?.companyName ||
      new RegExp(filter?.companyName, "i").test(job?.companyName);
    const meetsJobLocation =
      !filter?.location?.length ||
      filter?.location?.map((item) => item?.value).includes(job?.location);
    const meetsMinExp = !filter?.minExp || job?.minExp >= filter?.minExp?.value;
    const meetsMinJdSalary =
      !filter?.minJdSalary || job?.minJdSalary >= filter?.minJdSalary.value;

    return (
      meetsJobRole &&
      meetsCompanyName &&
      meetsJobLocation &&
      meetsJobType &&
      meetsMinExp &&
      meetsMinJdSalary
    );
  });

  return filteredData;
};

export function useClientSideDataFilter({ data, filter, latestData = [] }) {
  const [oldData, setOldData] = useState([]);

  useEffect(() => {
    // if (!data || data.length === 0) {
    // Return empty array if data is not available

    const filteredData = filterData({ data, filter });

    setOldData(filteredData || data || []);
    // }

    // return filteredData || data;
  }, [filter]);

  useEffect(() => {
    // if (!data) return []; // Return empty array if data is not available

    if (latestData) {
      console.log("new data came", latestData);

      const filteredData = filterData({ data: latestData, filter });

      setOldData((prev) => [...prev, ...(filteredData || latestData || [])]);
    }

    // return filteredData || data;
  }, [latestData]);

  return { newData: oldData };
}
