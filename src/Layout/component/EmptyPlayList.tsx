import { styled, Typography } from "@mui/material";

const EmptyPlayList = () => {
  return (
    <CreactPlaylistBox>
      <Typography variant="h2" fontWeight={700}>
        Create your first playlist
      </Typography>
      <div>It's easy, we'll help you</div>

      <CreateBtn>
        <Typography fontWeight={700}>Create playlist</Typography>
      </CreateBtn>
    </CreactPlaylistBox>
  );
};

export default EmptyPlayList;

const CreactPlaylistBox = styled("div")({
  padding: "1.5rem",
  marginTop: "0.5rem",
  color: "white",
  backgroundColor: "#1a1a1a",
  borderRadius: 8,
});

const CreateBtn = styled("button")({
  padding: "0.5rem 1rem",
  marginTop: "1rem",
  border: 0,
  outline: 0,
  borderRadius: 50,
  cursor: "pointer",

  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#bcbcbc",
  },
});
