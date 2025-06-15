import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemstoPlaylist } from "../api/playlist";
import { useAlertMessage } from "../context/AlertProvider";
import { useOnSearchContext } from "../context/OnSearchProvider";
import { AddItemToPlaylist } from "../models/playlist";

const useAddItemToPlaylist = () => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlertMessage();
  const { updateOnSearch } = useOnSearchContext();

  return useMutation({
    mutationFn: (params: AddItemToPlaylist) => {
      return addItemstoPlaylist(params);
    },
    onSuccess: () => {
      // playlist-detail refetch
      queryClient.invalidateQueries({ queryKey: ["playlist-detail"] });
      showAlert("트랙이 성공적으로 추가되었습니다.");
      updateOnSearch("off");
    },
  });
};

export default useAddItemToPlaylist;
