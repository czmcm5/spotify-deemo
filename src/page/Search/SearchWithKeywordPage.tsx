import { styled } from "@mui/material";
import {
  SearchFilterProvider,
  useSearchFilterContext,
} from "../../context/useMakeSearchKeyword";
import useSearchitems from "../../hook/useSearchitems";
import ErrorMessage from "../../Layout/ErrorMessage";
import { LoadingSpinner } from "../../style/LoadingBar";
import NoSearchResult from "../PlayList/component/search/NoSearchResult";
import FilterBox from "./component/FilterBox";
import {
  renderAlbums,
  renderArtists,
  renderTracks,
} from "./component/renderPages";

const SearchWithKeyword = () => {
  const { keyword, type, limit } = useSearchFilterContext();
  const { data, error, isLoading } = useSearchitems({
    q: keyword,
    type,
    limit,
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
    <>
      {renderTracks(firstPage)}
      {renderArtists(firstPage)}
      {renderAlbums(firstPage)}
    </>
  );
};

const SearchResult = () => {
  return (
    <List>
      <SearchFilterProvider>
        <FilterBox />
        <SearchWithKeyword />
      </SearchFilterProvider>
    </List>
  );
};
export default SearchResult;

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
