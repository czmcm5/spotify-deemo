import styled from "@mui/styled-engine-sc";
import { useParams } from "react-router";
import useGetPlaylist from "../../hook/useGetPlaylist";
import ErrorMessage from "../../Layout/ErrorMessage";
import AuthExpiredMessage from "./component/AuthExpiredMessage";
import DetailHeader from "./component/DetailHeader";
import DetailList from "./component/DetailList";
import SearchPlaylist from "./component/EmptyPlaylist";

const PlayListDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { data: playlist, error } = useGetPlaylist({ playlist_id: id });

  if (error && error.message === "retry") {
    return <AuthExpiredMessage />;
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  return (
    <PageBox>
      <DetailHeader
        image={playlist?.images ? playlist?.images[0].url : null}
        listName={playlist?.name || ""}
        description={playlist?.description || ""}
        ownerName={playlist?.owner?.display_name || "알수없음"}
        count={playlist?.tracks?.items.length || 0}
      />

      {playlist?.tracks?.total === 0 ? (
        <SearchPlaylist />
      ) : (
        <DetailList id={id} />
      )}
    </PageBox>
  );
};
export default PlayListDetailPage;

const PageBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
