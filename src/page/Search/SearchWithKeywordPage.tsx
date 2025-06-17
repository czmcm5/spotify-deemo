import { styled } from "@mui/material";
import { useLocation } from "react-router";
import useSearchitems from "../../hook/useSearchitems";
import ErrorMessage from "../../Layout/ErrorMessage";
import { SEARCH_TYPE } from "../../models/search";
import { LoadingSpinner } from "../../style/LoadingBar";
import NoSearchResult from "../PlayList/component/search/NoSearchResult";
import {
  renderAlbums,
  renderArtists,
  renderTracks,
} from "./component/renderPages";

const SearchWithKeywordPage = () => {
  const { pathname } = useLocation();
  const keyword = decodeURIComponent(pathname.replace("/search/", ""));

  const { data, error, isLoading } = useSearchitems({
    q: keyword,
    type: [SEARCH_TYPE.Track, SEARCH_TYPE.Album, SEARCH_TYPE.Artist],
    limit: 6,
  });

  if (isLoading) {
    return (
      <Loading>
        <LoadingSpinner width={40} height={40} />
      </Loading>
    );
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }

  const firstPage = data?.pages[0];
  const noResults =
    !firstPage ||
    (firstPage.tracks?.total === 0 &&
      firstPage.albums?.total === 0 &&
      firstPage.artists?.total === 0);

  if (noResults) {
    return <NoSearchResult keyword={keyword} />;
  }

  return (
    <List>
      {renderTracks(firstPage)}
      {renderArtists(firstPage)}
      {renderAlbums(firstPage)}
    </List>
  );
};
export default SearchWithKeywordPage;

const List = styled("div")`
  box-sizing: border-box;
  width: 100%;
  max-height: 100%;
  padding: 1rem;
  padding-bottom: 10rem;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Loading = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
