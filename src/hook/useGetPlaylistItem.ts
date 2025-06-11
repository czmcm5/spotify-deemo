import { useInfiniteQuery } from "@tanstack/react-query";
import { getPlaylistItems } from "../api/playlist";
import { GetPlaylistItemsReq } from "../models/playlist";

const useGetPlaylistItem = (params: GetPlaylistItemsReq) => {
  return useInfiniteQuery({
    queryKey: ["playlist-items", params],
    queryFn: ({ pageParam }) => {
      return getPlaylistItems({ offset: pageParam, ...params });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const nextOffset = url.searchParams.get("offset");
        return nextOffset ? parseInt(nextOffset) : undefined;
      }
      return undefined;
    },
  });
};

export default useGetPlaylistItem;
