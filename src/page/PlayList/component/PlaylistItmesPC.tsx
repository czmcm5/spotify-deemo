import { styled, TableCell, TableRow } from "@mui/material";
import MusicIcon from "../../../image/music.png";
import { PlaylistTrack } from "../../../models/playlist";
import { formatMinSec, getDaysAgo } from "../../../utils/playlist";
import { isEpisode } from "../../../utils/type";

interface ItemsPropsType {
  item: PlaylistTrack;
  idx: number;
}

const DesktopPlaylistItems = ({ item, idx }: ItemsPropsType) => {
  const imageSrc = isEpisode(item.track)
    ? item.track.imgaes[0].url
    : item.track.album.images?.[0]?.url;

  return (
    <Row>
      <Cell>{idx}</Cell>
      <Cell>
        <PicBox>
          <img src={imageSrc || MusicIcon} alt="track-thumbnail" />
        </PicBox>
      </Cell>
      <Cell>
        <div className="title">{item.track.name || "no title"}</div>
        <div>{isEpisode(item.track) ? "" : item.track.artists[0].name}</div>
      </Cell>
      <Cell>{isEpisode(item.track) ? "-" : item.track.album?.name}</Cell>
      <Cell className="added_at">{getDaysAgo(item.added_at || null)}</Cell>
      <Cell>{formatMinSec(item.track.duration_ms)}</Cell>
    </Row>
  );
};

export default DesktopPlaylistItems;

const Row = styled(TableRow)`
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #333333;
  }
`;
const Cell = styled(TableCell)`
  border: 0;
  padding: 0.5rem;
  && {
    font-size: 16px;
    color: #858585;
  }
  &.added_at {
    ${({ theme }) => theme.breakpoints.down("md")} {
      display: none;
    }
  }
  .title {
    color: white;
  }
`;
const PicBox = styled("div")`
  width: 3rem;
  aspect-ratio: 1/1;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
