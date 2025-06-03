import { Button, styled, Typography } from "@mui/material";

const EmptyPlayList = () => {
  return (
    <EmptyPlaylistCard>
      <Typography variant="h2" fontWeight={700}>
        Create your first playlist
      </Typography>
      <div>It's easy, we'll help you</div>

      <CreateBtn variant="contained" color="secondary">
        Create playlist
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
