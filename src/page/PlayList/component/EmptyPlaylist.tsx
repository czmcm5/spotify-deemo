import { styled, Typography } from "@mui/material";

const EmptyPlaylist = () => {
  return (
    <SearchBox>
      <Typography variant="h1">
        플레이리스트에 추가할 곡을 찾아보세요
      </Typography>
      <input placeholder="곡 또는 에피소드 검색하기" />
    </SearchBox>
  );
};

export default EmptyPlaylist;

const SearchBox = styled("div")`
  margin: 2rem;
  input {
    width: 100%;
    max-width: 23rem;
    padding: 0.7rem;
    margin: 1rem 0;
    font-size: 16px;
    color: white;
    background-color: #333333;
    border: 0;
    outline: 0;
  }
`;
