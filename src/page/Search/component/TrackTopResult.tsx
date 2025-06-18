import { Box, styled, Typography } from "@mui/material";
import useFouces from "../../../hook/local/useFocuse";
import PlayBtn from "../../Home/component/PlayBtn";
import MusicIcon from "../../../image/music.png";

interface CardProps {
  img?: string;
  name?: string;
  albumName?: string;
}

const TopResult = ({
  img,
  name = "알수없음",
  albumName = "알수없음",
}: CardProps) => {
  const focuse = useFouces();

  return (
    <Box flex={1}>
      <Typography variant="h1" padding={2} paddingTop={6}>
        상위 결과
      </Typography>

      <CardBox onMouseOver={focuse.on} onMouseLeave={focuse.off}>
        <PicBox width={8}>
          <img src={img || MusicIcon} alt={name} className="Thumbnail" />
        </PicBox>
        <Typography variant="h1" fontSize={30} paddingBottom={1} paddingTop={1}>
          {name}
        </Typography>
        <Typography> 앨범 • {albumName}</Typography>
        <PlayBtn isfocuse={focuse.isfocuse} />
      </CardBox>
    </Box>
  );
};

export default TopResult;

const CardBox = styled("div")`
  position: relative;
  flex: 1;
  margin-right: 1rem;
  height: 75%;
  padding: 1rem;
  border-radius: 8px;
  :hover {
    background-color: #272727;
  }
`;
const PicBox = styled("div")<{ width?: number }>`
  width: ${({ width }) => `${width || 3}rem`};
  aspect-ratio: 1/1;
  margin-right: 1rem;
  border-radius: 4px;
  overflow: hidden;

  img.Thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
