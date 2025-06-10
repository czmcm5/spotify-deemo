import { useInfiniteQuery } from "@tanstack/react-query";
import { getCurrentUserPlaylists } from "../api/playlist";
import { GetCurrentUserPlaylistReq } from "../models/playlist";

const useGetCurrentUserPlaylists = ({
  limit,
  enabled,
}: GetCurrentUserPlaylistReq & { enabled: boolean }) => {
  return useInfiniteQuery({
    queryKey: ["current-user-playlists"],
    queryFn: ({ pageParam }) => {
      return getCurrentUserPlaylists({ limit, offset: pageParam });
    },
    enabled,
    initialPageParam: 0, // 시작 value
    getNextPageParam: (lastPage) => {
      // infinitQuery 핵심.
      // 해당 함수의 리턴값이 pageParam으로 전달된다
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const nextOffset = url.searchParams.get("offset");
        return nextOffset ? parseInt(nextOffset) : undefined;
      }
      return undefined; // undefined를 호출하면 알아서 멈춘다.
    },
  });
};

export default useGetCurrentUserPlaylists;
