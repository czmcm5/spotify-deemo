import { styled, Typography } from "@mui/material";
import useFouces from "../../../hook/local/useFocuse";
import { AlbumItemType } from "../../../models/album";
import PlayBtn from "./PlayBtn";
import { goSpotify } from "../../../utils/navigate";

const CardList = ({ albums }: { albums: AlbumItemType }) => {
  const focuse = useFouces();

  const handleGoSpotifyWeb = () => {
    goSpotify({ type: "album", id: albums.id });
  };

  return (
    <CardBox onMouseOver={focuse.on} onMouseLeave={focuse.off}>
      <PicBox>
        <img
          src={albums.images[0]?.url}
          alt={albums.name}
          className="Thumbnail"
        />
        <PlayBtn isfocuse={focuse.isfocuse} onClick={handleGoSpotifyWeb} />
      </PicBox>

      <Title>{albums.name}</Title>
      <Typography variant="subtitle1">{albums.artists[0].name}</Typography>
    </CardBox>
  );
};

export default CardList;

const CardBox = styled("div")`
  flex: 1;
  padding: 1rem;
  border-radius: 8px;
  :hover {
    background-color: #272727;
  }
`;
const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const PicBox = styled("div")`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  img.Thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
