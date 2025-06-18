import { Box, styled, Typography } from "@mui/material";
import useSearchKeyword from "../../../hook/useSearchKeyword";
import SearchResult from "./search/PlaylistSearchResult";
import { SEARCH_TYPE } from "../../../models/search";
import useDebounce from "../../../hook/local/useDebounce";

const SearchPlaylist = () => {
  const { keyword, searchType } = useSearchKeyword();
  const debouncedKeyword = useDebounce(keyword.value);

  return (
    <SearchBox>
      <SearchBoxHeader>
        <Typography variant="h1">
          플레이리스트에 추가할 곡을 찾아보세요
        </Typography>
        <SearchTypeSelect
          value={searchType.value}
          onChange={searchType.onchange}
        >
          <option value={SEARCH_TYPE.Track}>트랙</option>
          <option value={SEARCH_TYPE.Album}>앨범</option>
        </SearchTypeSelect>
        <SearchInput
          value={keyword.value}
          onChange={keyword.onchange}
          placeholder="곡 또는 에피소드 검색하기"
        />
      </SearchBoxHeader>

      <SearchBoxScroll>
        <SearchResult
          keyword={debouncedKeyword}
          searchType={searchType.value}
        />
      </SearchBoxScroll>
    </SearchBox>
  );
};

export default SearchPlaylist;

const SearchBox = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 1rem;
`;
const SearchBoxHeader = styled(Box)`
  flex-shrink: 0;
  padding: 1rem;
`;
const SearchBoxScroll = styled(Box)`
  flex-grow: 1;
  padding: 0 1rem 5rem 1rem;
  overflow-y: auto;
`;
const SearchTypeSelect = styled("select")`
  box-sizing: border-box;
  padding: 0.7rem;
  height: 3rem;
  font-size: 16px;
  color: white;
  background-color: #333333;
  border: 1px solid #333333;
  border-radius: 4px 0 0 4px;
  outline: 0;
  cursor: pointer;
  &:hover {
    border-color: #606060;
  }
  &:focus {
    border-color: #b1b1b1;
  }
`;
const SearchInput = styled("input")`
  box-sizing: border-box;
  width: 100%;
  max-width: 23rem;
  height: 3rem;
  padding: 0.7rem;
  margin: 1rem 0;
  font-size: 16px;
  color: white;
  background-color: #333333;
  border: 1px solid #333333;
  border-radius: 0 4px 4px 0;
  outline: 0;
  &:hover {
    border-color: #606060;
  }
  &:focus {
    border-color: #b1b1b1;
  }
`;
