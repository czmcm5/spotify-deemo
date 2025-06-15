import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemstoPlaylist } from "../api/playlist";
import { AddItemToPlaylist } from "../models/playlist";

const useAddItemToPlaylist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: AddItemToPlaylist) => {
      return addItemstoPlaylist(params);
    },
    onSuccess: () => {
      // playlist-detail refetch
      queryClient.invalidateQueries({ queryKey: ["playlist-detail"] });
    },
  });
};

export default useAddItemToPlaylist;
