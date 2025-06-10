import { styled, Typography } from "@mui/material";
import { SimplifiedPlaylist } from "../../../models/playlist";
import { useNavigate } from "react-router";

const Playlist = ({ item }: { item: SimplifiedPlaylist }) => {
  const Navigate = useNavigate();

  const goPlaylistDetail = (id: string) => Navigate(`/playlist/${id}`);

  return (
    <ItemBox onClick={() => goPlaylistDetail(item.id || "")}>
      <PicBox>{item.images && <img src={item.images[0].url} />}</PicBox>

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
  &:hover {
    background-color: #1c1c1c;
    /* background-color: #404040; */
  }
`;
const PicBox = styled("div")`
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
`;
