import { styled, Typography } from "@mui/material";
import useFouces from "../../../hook/useFocuse";
import MusicIcon from "../../../image/music.png";
import playIcon from "../../../image/playIcon.png";
import { SimplifiedPlaylist } from "../../../models/playlist";

const Playlist = ({
  item,
  goPage,
  isSelect,
}: {
  item: SimplifiedPlaylist;
  goPage: () => void;
  isSelect: boolean;
}) => {
  const focuse = useFouces();

  return (
    <ItemBox
      onClick={goPage}
      className={isSelect ? "select" : ""}
      onMouseOver={focuse.on}
      onMouseLeave={focuse.off}
    >
      <PicBox>
        <PlayIcon src={playIcon} className={focuse.isfocuse} />

        {item.images ? (
          <img src={item.images[0].url} />
        ) : (
          <img className="musicIcon" src={MusicIcon} />
        )}
      </PicBox>

      <div>
        <Typography fontSize={16}>{item.name}</Typography>
        <Typography color="#B3B3B3">
          플레이리스트 • {item?.owner?.display_name || "알수없음"}
        </Typography>
      </div>
    </ItemBox>
  );
};

export default Playlist;

const ItemBox = styled("div")`
  display: flex;
  align-items: center;
  padding: 0.6rem;
  border-radius: 4px;
  cursor: pointer;

  &.select {
    background-color: #404040;
  }
  &:hover {
    background-color: #1c1c1c;
  }
`;
const PicBox = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
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
const PlayIcon = styled("img")`
  display: none;
  position: absolute;
  background-color: #0000007f;
  &.show {
    display: block;
  }
`;
