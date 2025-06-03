import BookmarkIcon from "@mui/icons-material/Bookmark";
import { styled, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmptyPlayList from "./EmptyPlayList";

const LibraryComponent = () => {
  return (
    <Container>
      <LibraryHeaderBox>
        <LibraryHeader>
          <BookmarkIcon />
          <Typography variant="h2" fontWeight={700}>
            Your Library
          </Typography>
        </LibraryHeader>

        <PlustBtn>
          <AddIcon />
        </PlustBtn>
      </LibraryHeaderBox>

      <EmptyPlayList />
    </Container>
  );
};

export default LibraryComponent;

const Container = styled("div")({
  flex: 1,
  width: "100%",
  padding: "1.5rem",
  color: "white",
  backgroundColor: "#121212",
  borderRadius: 8,
});

const LibraryHeaderBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const LibraryHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 20,
  color: "white",
});

const PlustBtn = styled("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "4.5rem",
  height: "2.4rem",
  color: "rgb(30, 215, 96)",
  backgroundColor: "transparent",
  borderRadius: 50,
  cursor: "pointer",

  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgb(25, 42, 32)",
  },
  "&:active": {
    backgroundColor: "rgb(101, 211, 147)",
  },
});
