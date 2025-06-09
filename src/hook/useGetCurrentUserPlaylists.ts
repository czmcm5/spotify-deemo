import { useQuery } from "@tanstack/react-query";
import { getCurrentUserPlaylists } from "../api/playlist";
import { GetCurrentUserPlaylistReq } from "../models/playlist";

const useGetCurrentUserPlaylists = ({
  limit,
  offset,
}: GetCurrentUserPlaylistReq) => {
  return useQuery({
    queryKey: ["current-user-playlists"],
    queryFn: () => {
      return getCurrentUserPlaylists({ limit, offset });
    },
  });
};

export default useGetCurrentUserPlaylists;
