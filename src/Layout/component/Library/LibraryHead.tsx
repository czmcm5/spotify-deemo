import { Box, Button, styled, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "../../../image/BookmarkIcon.png";

const LibraryHead = () => {
  return (
    <Head>
      <Box display="flex">
        <Icon src={BookmarkIcon} alt="북마크 아이콘" />
        <Typography variant="h2" fontWeight={700}>
          내 라이브러리
        </Typography>
      </Box>

      <Button>
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
