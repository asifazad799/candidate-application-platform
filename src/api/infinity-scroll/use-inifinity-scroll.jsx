import axios from "axios";
import { useInfiniteQuery } from "react-query";

const fetchData = async ({ meta, queryKey, pageParam, signal }) => {
  // console.log(meta, queryKey, pageParam, signal, "sshhsh");

  const response = await axios.post(
    `https://api.weekday.technology/${queryKey[0]}`,
    queryKey[1]
  );
  return response.data;
};

export function useInfinityScroll({ url, body }) {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError } =
    useInfiniteQuery([url, body], fetchData, {
      getNextPageParam: (lastPage, pages) => {
        return pages.length + 1;
      },
    });

  console.log(data, hasNextPage, "shsh");

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading: isFetching || isLoading,
    isError,
  };
}
