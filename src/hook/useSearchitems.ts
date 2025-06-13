import { useInfiniteQuery } from "@tanstack/react-query";
import { searchitems } from "../api/searchApi";
import { SearchReq } from "../models/search";
import useGetSpoAccessToken from "./useGetSpoAccessToken";

const useSearchitems = (params: SearchReq) => {
  const clientToken = useGetSpoAccessToken();

  return useInfiniteQuery({
    queryKey: ["search", params.q, params.type],
    queryFn: ({ pageParam = 0 }) => {
      if (clientToken) {
        return searchitems(clientToken, {
          ...params,
          offset: pageParam,
        });
      }
      return undefined;
    },
    enabled: !!params.q,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage) return undefined;

      const nextPageUrl =
        lastPage.tracks?.next ||
        lastPage.artists?.next ||
        lastPage.albums?.next ||
        lastPage.playlists?.next ||
        lastPage.shows?.next ||
        lastPage.episodes?.next ||
        lastPage.audiobooks?.next;

      if (nextPageUrl) {
        const url = new URL(nextPageUrl);
        const nextOffset = url.searchParams.get("offset");
        return nextOffset ? parseInt(nextOffset) : undefined;
      }
    },
  });
};

export default useSearchitems;
