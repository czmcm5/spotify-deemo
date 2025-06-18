import { Box, styled } from "@mui/material";
import { TrackSelectedProvider } from "../../../context/useTrackSelection";
import { TrackObject } from "../../../models/tracks";
import TrackInfinityList from "./TrackInfinityList";
import TrackResultList from "./TrackResultList";
import TopResult from "./TrackTopResult";

const TrackCardList = ({
  tracks,
  pagenum,
  isCurrentMenu,
}: { tracks: TrackObject[] } & { pagenum: number; isCurrentMenu: boolean }) => {
  if (isCurrentMenu) {
    return (
      <TrackSelectedProvider>
        <TrackInfinityList tracks={tracks} pagenum={pagenum} />
      </TrackSelectedProvider>
    );
  }

  return (
    <TrackBox display={"flex"}>
      <TopResult
        img={tracks[0].album.images?.[0]?.url}
        name={tracks[0].name}
        albumName={tracks[0].album.name}
      />

      <TrackSelectedProvider>
        <TrackResultList tracks={tracks} />
      </TrackSelectedProvider>
    </TrackBox>
  );
};

export default TrackCardList;

const TrackBox = styled(Box)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;
