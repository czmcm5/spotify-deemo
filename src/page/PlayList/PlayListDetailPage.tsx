import styled from "@mui/styled-engine-sc";
import { useParams } from "react-router";
import useGetPlaylist from "../../hook/useGetPlaylist";
import ErrorMessage from "../../Layout/ErrorMessage";
import LoadingBar from "../../style/LoadingBar";
import DetailHeader from "./component/DetailHeader";
import DetailList from "./component/DetailList";

const PlayListDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const {
    data: playlist,
    isLoading: isPlaylistLoading,
    error: playlistErr,
  } = useGetPlaylist({ playlist_id: id });

  if (isPlaylistLoading) {
    return <LoadingBar />;
  }
  if (playlistErr) {
    return <ErrorMessage errMessage={playlistErr.message} />;
  }
  return (
    <PageBox>
      <DetailHeader
        image={playlist?.images ? playlist?.images[0].url : null}
        listName={playlist?.name || "플레이리스트"}
        description={playlist?.description || ""}
        ownerName={playlist?.owner?.display_name || "알수없음"}
        count={playlist?.tracks?.items.length || 0}
      />
      <DetailList id={id} isShow={playlist?.tracks?.total === 0} />
    </PageBox>
  );
};
export default PlayListDetailPage;

const PageBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* padding-bottom: 5rem; */
`;
