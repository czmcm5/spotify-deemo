import { useParams } from "react-router";
import useGetPlaylist from "../../hook/useGetPlaylist";
import ErrorMessage from "../../Layout/ErrorMessage";
import LoadingBar from "../../style/LoadingBar";
import DetailHeader from "./component/DetailHeader";

const PlayListDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const {
    data: playlist,
    error,
    isLoading,
  } = useGetPlaylist({ playlist_id: id });

  // console.log("playlist   ", playlist);

  if (isLoading) {
    return <LoadingBar />;
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  return (
    <div>
      <DetailHeader
        image={playlist?.images ? playlist?.images[0].url : null}
        listName={playlist?.name || "플레이리스트"}
        description={playlist?.description || ""}
        ownerName={playlist?.owner?.display_name || "알수없음"}
        count={playlist?.tracks?.items.length || 0}
      />
    </div>
  );
};
export default PlayListDetailPage;
