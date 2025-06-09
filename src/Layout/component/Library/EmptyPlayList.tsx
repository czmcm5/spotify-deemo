import { Button, styled, Typography } from "@mui/material";

const EmptyPlayList = () => {
  return (
    <EmptyPlaylistCard>
      <Typography variant="h2" fontWeight={700}>
        첫 번째 플레이리스트를 만드세요.
      </Typography>
      <div>어렵지 않아요. 저희가 도와드릴게요.</div>

      <CreateBtn variant="contained" color="secondary">
        플레이리스트 만들기
      </CreateBtn>
    </EmptyPlaylistCard>
  );
};

export default EmptyPlayList;

const EmptyPlaylistCard = styled("div")`
  padding: 1.5rem;
  margin-top: 0.5rem;
  color: white;
  background-color: #1a1a1a;
  border-radius: 8;
`;

const CreateBtn = styled(Button)`
  margin-top: 1rem;
  font-weight: 700;
`;
