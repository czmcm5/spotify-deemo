import { Box, Button, styled, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "../../../image/BookmarkIcon.png";
import useCreatePlaylist from "../../../query/useCreatePlaylist";

const LibraryHead = () => {
  const { mutate: createPlaylist } = useCreatePlaylist();
  const handleCreatePlaylist = () => {
    createPlaylist({ name: "내 풀레이리스트" });
  };

  return (
    <Head>
      <Box display="flex">
        <Icon src={BookmarkIcon} alt="북마크 아이콘" />
        <Typography variant="h2" fontWeight={700}>
          내 라이브러리
        </Typography>
      </Box>

      <Button onClick={handleCreatePlaylist}>
        <AddIcon />
      </Button>
    </Head>
  );
};

export default LibraryHead;

const Head = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;
const Icon = styled("img")`
  width: 25px;
  margin-right: 20px;
`;
