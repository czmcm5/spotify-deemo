import { Box, Button, styled, Typography } from "@mui/material";
import MusicIcon from "../../../image/music.png";
import { TrackObject } from "../../../models/tracks";
import { formatMinSec } from "../../../utils/playlist";
import useFouces from "../../../hook/local/useFocuse";
import PlayBtn from "../../Home/component/PlayBtn";

interface CardProps {
  img: string;
  name?: string;
  albumName?: string;
  artistName?: string;
  duration_ms?: number;
}

const TopResult = ({
  img,
  name = "알수없음",
  albumName = "알수없음",
}: CardProps) => {
  const focuse = useFouces();

  return (
    <CardBox onMouseOver={focuse.on} onMouseLeave={focuse.off}>
      <PicBox width={8}>
        <img src={img} alt={name} className="Thumbnail" />
      </PicBox>
      <Typography variant="h1" fontSize={30} paddingBottom={1} paddingTop={1}>
        {name}
      </Typography>
      <Typography> 앨범 • {albumName}</Typography>
      <PlayBtn isfocuse={focuse.isfocuse} />
    </CardBox>
  );
};

const ListResult = ({
  img,
  name = "알수없음",
  artistName = "알수없음",
  duration_ms = 0,
}: CardProps) => {
  const focuse = useFouces();

  return (
    <Row onMouseOver={focuse.on} onMouseLeave={focuse.off}>
      <Box display={"flex"} alignItems={"center"}>
        <PicBox>
          <img src={img} alt={name} className="Thumbnail" />
        </PicBox>
        <div>
          <Title>{name}</Title>
          <Typography variant="subtitle1">{artistName}</Typography>
        </div>
      </Box>
      <AddBox
        display={"flex"}
        alignItems={"center"}
        className={focuse.isfocuse}
      >
        <Typography marginRight={1}>{formatMinSec(duration_ms)}</Typography>
        <Button>+</Button>
      </AddBox>
    </Row>
  );
};

const TrackCardList = ({ tracks }: { tracks: TrackObject[] }) => {
  return (
    <TrackBox>
      <section>
        <Typography variant="h1" padding={2} paddingTop={6}>
          상위 결과
        </Typography>
        <TopResult
          img={tracks[0].album.images?.[0]?.url || MusicIcon}
          name={tracks[0].name}
          albumName={tracks[0].album.name}
        />
      </section>
      <section>
        <Typography variant="h1" padding={2} paddingTop={6}>
          곡
        </Typography>

        {tracks.map((item, i) => {
          if (i > 3) return null;
          return (
            <ListResult
              key={i}
              img={item.album.images?.[0]?.url || MusicIcon}
              name={item.name}
              artistName={item.artists[0].name}
              duration_ms={item.duration_ms}
            />
          );
        })}
      </section>
    </TrackBox>
  );
};

export default TrackCardList;

const TrackBox = styled("div")`
  display: flex;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }

  section {
    flex: 1;
  }
`;
const Row = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
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

const AddBox = styled(Box)`
  position: absolute;
  right: -3rem;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.4s ease;
  pointer-events: none;

  &.show {
    right: 1rem;
    pointer-events: auto;
  }
`;
