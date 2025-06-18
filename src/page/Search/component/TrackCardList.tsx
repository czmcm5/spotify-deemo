import { Box, styled, Typography } from "@mui/material";
import MusicIcon from "../../../image/music.png";
import { TrackObject } from "../../../models/tracks";
import TrackInfinityList from "./TrackInfinityList";
import { ListResult, TopResult } from "./TrackResult";

const TrackCardList = ({
  tracks,
  pagenum,
  isCurrentMenu,
}: { tracks: TrackObject[] } & { pagenum: number; isCurrentMenu: boolean }) => {
  if (isCurrentMenu) {
    return <TrackInfinityList tracks={tracks} pagenum={pagenum} />;
  }

  return (
    <TrackBox display={"flex"}>
      <Box flex={1}>
        <Typography variant="h1" padding={2} paddingTop={6}>
          상위 결과
        </Typography>
        <TopResult
          img={tracks[0].album.images?.[0]?.url || MusicIcon}
          name={tracks[0].name}
          albumName={tracks[0].album.name}
        />
      </Box>
      <Box flex={1}>
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
      </Box>
    </TrackBox>
  );
};

export default TrackCardList;

const TrackBox = styled(Box)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;
