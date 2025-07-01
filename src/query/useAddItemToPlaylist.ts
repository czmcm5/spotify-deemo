import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemstoPlaylist } from "../api/playlist";
import { useAlertMessage } from "../context/AlertProvider";
import { AddItemToPlaylist } from "../models/playlist";

const useAddItemToPlaylist = ({ afterFn }: { afterFn?: () => void }) => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlertMessage();

  return useMutation({
    mutationFn: (params: AddItemToPlaylist) => {
      return addItemstoPlaylist(params);
    },
    onSuccess: () => {
      // playlist-detail refetch
      queryClient.invalidateQueries({ queryKey: ["playlist-detail"] });
      showAlert("트랙이 성공적으로 추가되었습니다.");
      if (afterFn) afterFn();
    },
  });
};

export default useAddItemToPlaylist;
