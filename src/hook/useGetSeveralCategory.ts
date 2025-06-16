import { useInfiniteQuery } from "@tanstack/react-query";
import { getServeralCategory } from "../api/category";
import { GetServeralCategoryReq } from "../models/category";
import useGetSpoAccessToken from "./useGetSpoAccessToken";

const useGetSeveralCategory = ({ limit }: GetServeralCategoryReq) => {
  const clientToken = useGetSpoAccessToken();

  return useInfiniteQuery({
    queryKey: ["serveral-categories"],
    queryFn: ({ pageParam }) => {
      if (clientToken) {
        return getServeralCategory(clientToken, { limit, offset: pageParam });
      }
      return undefined;
    },
    enabled: !!clientToken,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.categories.next) {
        const url = new URL(lastPage.categories.next);
        const nextOffset = url.searchParams.get("offset");
        return nextOffset ? parseInt(nextOffset) : undefined;
      }
      return undefined;
    },
  });
};

export default useGetSeveralCategory;
