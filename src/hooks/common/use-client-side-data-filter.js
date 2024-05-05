import { useMemo } from "react";

import { staticData } from "../../pages/landing-page/staticData";

export function useClientSideDataFilter({ data, filter }) {
  const newData = useMemo(() => {
    console.log(data, filter, "sjssj");
  }, [data?.length, filter]);

  return { newData };
}
