import { Box, Button, styled } from "@mui/material";
import { RefObject, useEffect } from "react";
import { useAlertMessage } from "../../context/AlertProvider";
import { useTrackSelected } from "../../context/useTrackSelection";
import useAddItemToPlaylist from "../../hook/useAddItemToPlaylist";
import useGetCurrentUserPlaylists from "../../hook/useGetCurrentUserPlaylists";
import useGetProfile from "../../hook/useGetProfile";
import ModalListItem from "./ModalListItem";

const PlaylistModal = ({
  itemRef,
}: {
  itemRef: RefObject<HTMLDivElement | null>;
}) => {
  const { data: user } = useGetProfile();
  const { showAlert } = useAlertMessage();
  const { trackUri, playlist_id, selectPlaylist, selectTrack } =
    useTrackSelected();
  const { data: playlists, error } = useGetCurrentUserPlaylists({
    limit: 10,
    enabled: !!user,
  });
  const {
    mutate: AddItemToPlaylist,
    isPending,
    error: ErrorToAddtoItem,
  } = useAddItemToPlaylist({ afterFn: () => handleCloseModal() });

  const handleAddItemToPlaylist = (id: string) => {
    selectPlaylist(id);
  };

  const handleAddtoPlaylist = () => {
    if (isPending) return;
    if (playlist_id && trackUri) {
      AddItemToPlaylist({ playlist_id, uris: [trackUri] });
    }
  };

  const handleCloseModal = () => {
    selectTrack(null);
    selectPlaylist(null);
  };

  useEffect(() => {
    if (!user) {
      showAlert("로그인을 해주세요.", handleCloseModal);
      return;
    }

    if (error || ErrorToAddtoItem) {
      const errMessage = error?.message || ErrorToAddtoItem?.message;
      showAlert(errMessage || "실패", handleCloseModal);
      return;
    }

    if (playlists && (!playlists.pages || playlists.pages[0].total === 0)) {
      showAlert("내 플레이리스트가 없습니다.", handleCloseModal);
      return;
    }
  }, [user, error, ErrorToAddtoItem, playlists]);

  if (
    !user ||
    error ||
    ErrorToAddtoItem ||
    !playlists?.pages ||
    playlists.pages[0].total === 0
  ) {
    return null;
  }

  return (
    <ModalBox ref={itemRef}>
      <div>플레이리스트에 추가</div>

      <ScrollBox>
        {playlists.pages.map((page) =>
          page.items.map((item, idx) => (
            <ModalListItem
              key={idx}
              item={item}
              isSelect={playlist_id === item.id}
              onClick={() => handleAddItemToPlaylist(item.id || "")}
            />
          ))
        )}
      </ScrollBox>

      <Box display={"flex"} justifyContent={"flex-end"} marginTop={1}>
        <Button onClick={handleCloseModal}>취소</Button>
        {playlist_id && (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleAddtoPlaylist}
          >
            저장
          </Button>
        )}
      </Box>
    </ModalBox>
  );
};

export default PlaylistModal;

const ModalBox = styled("div")`
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  right: 0%;
  margin-right: 5rem;
  width: 20rem;
  height: 30rem;
  padding: 1rem;
  background-color: #1d1d1d;
  border: 1px solid #101010;
  border-radius: 4px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    top: 100%;
    width: 15rem;
    height: 20rem;
    padding: 0.5rem;
    margin: 0;
  }
`;
const ScrollBox = styled("div")`
  flex: 1;
  height: 100%;
  overflow: auto;
`;
