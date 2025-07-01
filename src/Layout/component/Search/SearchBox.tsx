import { styled } from "@mui/material";
import useMoveSearchUrl from "../../../hook/useMoveSearchUrl";

const SearchBox = () => {
  const { keyword, updateKeyword } = useMoveSearchUrl();
  return (
    <SearchInput
      value={keyword}
      onChange={updateKeyword}
      placeholder="어떤 콘텐츠를 감상하고 싶으세요?"
    />
  );
};

export default SearchBox;

const SearchInput = styled("input")`
  box-sizing: border-box;
  width: 100%;
  margin: 0 1rem;
  max-width: 25rem;
  height: 2.5rem;
  padding: 1rem;
  font-size: 16px;
  color: white;
  background-color: #2a2a2a;
  outline: 0;
  border: 1px solid #2a2a2a;
  border-radius: 50px;
  transition: border 0.3s ease;

  ::placeholder {
    color: #b0b0b0;
  }
  &:hover {
    border: 1px solid #626262;
  }
  &:focus {
    border: 2px solid #b0b0b0;
  }
`;
