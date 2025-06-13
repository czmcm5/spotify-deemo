import { Box, styled, Typography } from "@mui/material";
import useDebounce from "../../../hook/useDebounce";
import useSearchKeyword from "../../../hook/useSearchKeyword";
import SearchResult from "./search/SearchResult";

const SearchPlaylist = () => {
  const { keyword, updateKeyword } = useSearchKeyword();
  const debouncedKeyword = useDebounce(keyword);

  return (
    <SearchBox>
      <SearchBoxHeader>
        <Typography variant="h1">
          플레이리스트에 추가할 곡을 찾아보세요
        </Typography>
        <SearchInput
          value={keyword}
          onChange={updateKeyword}
          placeholder="곡 또는 에피소드 검색하기"
        />
      </SearchBoxHeader>

      <SearchBoxScroll>
        <SearchResult keyword={debouncedKeyword} />
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

  &::-webkit-scrollbar {
    display: none;
  }
`;
const SearchInput = styled("input")`
  width: 100%;
  max-width: 23rem;
  padding: 0.7rem;
  margin: 1rem 0;
  font-size: 16px;
  color: white;
  background-color: #333333;
  border: 1px solid #333333;
  border-radius: 4px;
  outline: 0;
  &:hover {
    border-color: #606060;
  }
  &:focus {
    border-color: #b1b1b1;
  }
`;
