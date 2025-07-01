import { useQuery } from "@tanstack/react-query";
import { getPlaylistItems_home } from "../../../api/playlist";
import useGetSpoAccessToken from "../../../query/useGetSpoAccessToken";

const useGetPlaylistItem = (playlist_id: string) => {
  const clientToken = useGetSpoAccessToken();

  return useQuery({
    queryKey: ["my-playlist", playlist_id],
    queryFn: async () => {
      if (!clientToken) throw new Error("No token available");

      return getPlaylistItems_home({
        token: clientToken,
        params: { playlist_id, limit: 12 },
      });
    },
  });
};

export default useGetPlaylistItem;
