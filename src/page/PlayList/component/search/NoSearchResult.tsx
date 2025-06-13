import { styled, Typography } from "@mui/material";

const NoSearchResult = ({ keyword }: { keyword: string }) => {
  return (
    <NoResult>
      <Typography variant="h1" marginBottom={"0.5rem"}>
        "{keyword}"과(와) 일치하는 결과 없음
      </Typography>
      <Typography variant="h2" color="#999999" marginBottom={"1rem"}>
        입력한 단어의 철자가 맞는지 확인하거나 짧은 키워드 또는 다른 키워드를
        사용하세요.
      </Typography>
    </NoResult>
  );
};

export default NoSearchResult;

const NoResult = styled("div")`
  margin-top: 2rem;
  text-align: center;
`;
