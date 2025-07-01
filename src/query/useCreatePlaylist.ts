import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlaylist } from "../api/playlist";
import { CreatePlaylist } from "../models/playlist";
import useGetProfile from "./useGetProfile";
import { getSpotifyLogin } from "../utils/auth";

const useCreatePlaylist = () => {
  const queryClient = useQueryClient();
  const { data: user } = useGetProfile();

  return useMutation({
    mutationFn: (params: CreatePlaylist) => {
      if (user && user.id) {
        return createPlaylist(user?.id, params);
      }
      getSpotifyLogin(); // user정보 없을 시 login
      return Promise.reject(new Error("user is not defined"));
    },
    onSuccess: () => {
      // refetch
      queryClient.invalidateQueries({ queryKey: ["current-user-playlists"] });
    },
  });
};

export default useCreatePlaylist;
