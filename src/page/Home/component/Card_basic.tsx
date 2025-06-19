import { styled, Typography } from "@mui/material";
import useFouces from "../../../hook/local/useFocuse";
import MusicIcon from "../../../image/music.png";
import PlayBtn from "./PlayBtn";

interface CardBasicProps {
  imgUrl?: string;
  mainTitle?: string;
  subTitle?: string;
}

const Card_basic = ({
  imgUrl = MusicIcon,
  mainTitle = "",
  subTitle = "",
}: CardBasicProps) => {
  const focuse = useFouces();

  return (
    <CardBox onMouseOver={focuse.on} onMouseLeave={focuse.off}>
      <PicBox>
        <img src={imgUrl} alt={mainTitle} className="Thumbnail" />
        <PlayBtn isfocuse={focuse.isfocuse} />
      </PicBox>

      <Title>{mainTitle}</Title>
      <Typography variant="subtitle1">{subTitle}</Typography>
    </CardBox>
  );
};

export default Card_basic;

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
