import { Box, styled, Typography } from "@mui/material";
import { SimplifiedPlaylist } from "../../models/playlist";
import MusicIcon from "../../image/music.png";

const ModalListItem = ({
  item,
  onClick,
  isSelect = false,
}: {
  item: SimplifiedPlaylist;
  onClick: () => void;
  isSelect: boolean;
}) => {
  return (
    <ItemBox onClick={onClick} className={isSelect ? "select" : undefined}>
      <Box display={"flex"} alignItems={"center"}>
        <PicBox>
          <img
            src={item.images?.[0]?.url || MusicIcon}
            className={item.images ? undefined : "musicIcon"}
            alt="music_섬네일"
          />
        </PicBox>
        <Typography fontSize={16}>{item.name}</Typography>
      </Box>

      <input type="checkbox" checked={isSelect} readOnly />
    </ItemBox>
  );
};

export default ModalListItem;

const ItemBox = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem;
  border-radius: 4px;

  &.select {
    color: #10d83f;
  }
  &:hover {
    background-color: #101010;
  }
`;
const PicBox = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  aspect-ratio: 1/1;
  margin-right: 1rem;
  border-radius: 4px;
  overflow: hidden;
  background-color: #313131;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img.musicIcon {
    width: 70%;
    height: 70%;
  }
`;
