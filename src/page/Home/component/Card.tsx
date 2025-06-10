import { styled, Typography } from "@mui/material";
import useFouces from "../../../hook/useFocuse";
import { AlbumItemType } from "../../../models/album";
import PlayBtn from "./PlayBtn";

interface CardProps {
  img: string;
  name: string;
  artist?: string;
}

const Card = ({ img, name, artist = "알수없음" }: CardProps) => {
  const focuse = useFouces();

  return (
    <CardBox onMouseOver={focuse.on} onMouseLeave={focuse.off}>
      <PicBox>
        <img src={img} alt={name} className="Thumbnail" />
        <PlayBtn isfocuse={focuse.isfocuse} />
      </PicBox>

      <Title>{name}</Title>
      <Typography variant="subtitle1">{artist}</Typography>
    </CardBox>
  );
};

const CardList = ({ albums }: { albums: AlbumItemType[] }) => {
  return (
    <List>
      {albums.map((item, i) => {
        return (
          <Card
            key={i}
            img={item.images[0].url}
            name={item.name}
            artist={item.artists[0].name}
          />
        );
      })}
    </List>
  );
};

export default CardList;

const List = styled("div")`
  display: flex;
  margin-top: 2rem;
  overflow: auto;
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const CardBox = styled("div")`
  flex: 1;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: #272727;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    max-width: 11.5rem;
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
