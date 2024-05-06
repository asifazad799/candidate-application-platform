import { useMemo } from "react";

export function useClientSideDataFilter({ data, filter }) {
  const newData = useMemo(() => {
    let newData = data || [];

    let jobRole = filter?.jobRole?.map((role) => role?.value);
    let jobType = filter?.jobType?.map((role) => role?.value);
    let jobLocation = filter?.location?.map((role) => role?.value);
    const regex = new RegExp(filter?.companyName, "i"); // "i" for case-insensitive matching

    if (jobType?.length > 0 && jobType?.length != 2) {
      newData = data?.filter((job) => {
        if (jobType?.includes(job?.location)) {
          return job;
        }

        if (jobType.includes("on-site") && job?.location != "remote") {
          return job;
        }
      });
    }

    if (filter?.companyName) {
      newData = newData?.filter((job) => {
        if (regex.test(job?.companyName)) {
          return job;
        }
      });
    }

    if (jobRole?.length > 0) {
      newData = newData?.filter((job) => {
        if (jobRole?.includes(job?.jobRole)) {
          return job;
        }
      });
    }

    if (jobLocation?.length > 0) {
      newData = newData?.filter((job) => {
        if (jobLocation?.includes(job?.location)) {
          return job;
        }
      });
    }

    if (filter?.minExp?.value) {
      newData = newData?.filter((job) => {
        if (job?.minExp >= filter?.minExp?.value) {
          return job;
        }
      });
    }

    if (filter?.minJdSalary?.value) {
      newData = newData?.filter((job) => {
        if (job?.minJdSalary >= filter?.minJdSalary?.value) {
          return job;
        }
      });
    }

    return newData;
  }, [data?.length, filter]);

  return { newData };
}
