import { styled, Typography } from "@mui/material";
import { ArtistsType } from "../../../models/artist";
import PlayBtn from "../../Home/component/PlayBtn";
import useFouces from "../../../hook/local/useFocuse";
import MusicIcon from "../../../image/music.png";

interface CardProps {
  img: string;
  name?: string;
}

const Card = ({ img, name = "알수없음" }: CardProps) => {
  const focuse = useFouces();

  return (
    <CardBox onMouseOver={focuse.on} onMouseLeave={focuse.off}>
      <PicBox>
        <img src={img} alt={name} className="Thumbnail" />
        <PlayBtn isfocuse={focuse.isfocuse} />
      </PicBox>

      <Title>{name}</Title>
      <Typography variant="subtitle1">Artist</Typography>
    </CardBox>
  );
};

const ArtistCardList = ({ artists }: { artists: ArtistsType[] }) => {
  return (
    <List>
      {artists.map((item, i) => {
        return (
          <Card
            key={i}
            img={item.images[0]?.url || MusicIcon}
            name={item.name}
          />
        );
      })}
    </List>
  );
};

export default ArtistCardList;

const List = styled("div")`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr 1fr;
  }
`;
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
