import { useQuery } from "@tanstack/react-query";
import { GetPlaylistReq } from "../models/playlist";
import { getPlaylist } from "../api/playlist";

const useGetPlaylist = (params: GetPlaylistReq) => {
  return useQuery({
    queryKey: ["playlist-detail", params.playlist_id],
    queryFn: () => {
      return getPlaylist(params);
    },
    enabled: !!params.playlist_id,
  });
};

export default useGetPlaylist;
