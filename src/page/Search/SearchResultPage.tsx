import { Box, styled } from "@mui/material";
import { SearchFilterProvider } from "../../context/SearchFilterProvider";
import FilterBox from "./component/FilterBox";
import SearchWithKeyword from "./SearchWithKeywordPage";

const SearchResult = () => {
  return (
    <PageBox>
      <SearchFilterProvider>
        <FilterBox />
        <ScrollBox>
          <SearchWithKeyword />
        </ScrollBox>
      </SearchFilterProvider>
    </PageBox>
  );
};

export default SearchResult;

const PageBox = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 100%;
  padding: 1rem;
`;
const ScrollBox = styled(Box)`
  flex-grow: 1;
  padding-bottom: 10rem;
  overflow-y: auto;
`;
