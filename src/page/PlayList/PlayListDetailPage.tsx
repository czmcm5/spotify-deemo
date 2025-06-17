import styled from "@mui/styled-engine-sc";
import { useParams } from "react-router";
import {
  OnSearchProvider,
  useOnSearchContext,
} from "../../context/OnSearchProvider";
import useGetPlaylist from "../../hook/useGetPlaylist";
import ErrorMessage from "../../Layout/ErrorMessage";
import AuthExpiredMessage from "./component/AuthExpiredMessage";
import DetailHeader from "./component/DetailHeader";
import DetailList from "./component/DetailList";
import SearchPlaylist from "./component/SearchPlaylist";
import { useEffect } from "react";

const PlayListDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { data: playlist, error } = useGetPlaylist({ playlist_id: id });
  const { onSearch, updateOnSearch } = useOnSearchContext();

  useEffect(() => {
    updateOnSearch("off");
  }, [id]);

  if (!playlist) return null;
  if (error && error.message === "retry") {
    return <AuthExpiredMessage />;
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  return (
    <PageBox>
      <DetailHeader
        playlist={playlist}
        onSearch={!onSearch && playlist?.tracks?.total !== 0}
      />

      {playlist?.tracks?.total === 0 || onSearch ? (
        <SearchPlaylist />
      ) : (
        <>
          <DetailList id={id} />
        </>
      )}
    </PageBox>
  );
};

const DetailPage = () => {
  return (
    <OnSearchProvider>
      <PlayListDetailPage />
    </OnSearchProvider>
  );
};

export default DetailPage;

const PageBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
