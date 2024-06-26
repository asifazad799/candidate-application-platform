import { useInfiniteQuery } from "react-query";

import { API } from "../config";

const fetchData = async ({ queryKey, pageParam }) => {
  const data = queryKey[1];
  if (pageParam?.offset) {
    data.offset = pageParam.offset;
  }

  const response = await API.post(`${queryKey[0]}`, data);
  return response.data;
};

export function useInfinityScroll({ url, body, currentOffset }) {
  let latestData;

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError } =
    useInfiniteQuery([url, body], fetchData, {
      getNextPageParam: (lastPage, pages) => {
        latestData = lastPage?.jdList;
        if (currentOffset > lastPage?.totalCount) {
          return false;
        } else {
          return true;
        }
      },
      //TODO: enable this when the api is ready
      // enabled: false,
    });

  const _data = [];
  data?.pages?.map((data) => {
    _data.push(...data.jdList);
  });

  return {
    data: _data || [],
    fetchNextPage,
    hasNextPage,
    isLoading: isFetching || isLoading,
    isError,
    total: _data?.totalCount,
    latestData: latestData,
  };
}
