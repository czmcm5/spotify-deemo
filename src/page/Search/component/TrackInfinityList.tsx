import { Box } from "@mui/material";
import MusicIcon from "../../../image/music.png";
import { TrackObject } from "../../../models/tracks";
import { countPageNum } from "../../../utils/playlist";
import { ListResult } from "./TrackResult";

const TrackInfinityList = ({
  tracks,
  pagenum,
}: { tracks: TrackObject[] } & { pagenum: number }) => {
  return (
    <Box>
      {tracks.map((item, i) => {
        return (
          <ListResult
            key={i}
            idx={countPageNum(20, pagenum, i)}
            img={item.album.images?.[0]?.url || MusicIcon}
            name={item.name}
            artistName={item.artists[0].name}
            duration_ms={item.duration_ms}
          />
        );
      })}
    </Box>
  );
};

export default TrackInfinityList;
