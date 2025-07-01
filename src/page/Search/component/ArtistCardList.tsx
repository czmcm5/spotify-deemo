import { styled, Typography } from "@mui/material";
import { ArtistsType } from "../../../models/artist";
import PlayBtn from "../../Home/component/PlayBtn";
import useFouces from "../../../hook/useFocuse";
import MusicIcon from "../../../image/music.png";
import { goSpotify } from "../../../utils/navigate";

const ArtistCardList = ({ artists }: { artists: ArtistsType }) => {
  const focuse = useFouces();

  const handleGoSpotifyWeb = () => {
    if (artists.id) {
      goSpotify({ type: "artist", id: artists.id });
    }
  };

  return (
    <CardBox onMouseOver={focuse.on} onMouseLeave={focuse.off}>
      <PicBox>
        <img
          src={artists.images[0]?.url || MusicIcon}
          alt={artists.name}
          className="Thumbnail"
        />
        <PlayBtn isfocuse={focuse.isfocuse} onClick={handleGoSpotifyWeb} />
      </PicBox>

      <Title>{artists.name}</Title>
      <Typography variant="subtitle1">Artist</Typography>
    </CardBox>
  );
};

export default ArtistCardList;

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
  img.Thumbnail {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
