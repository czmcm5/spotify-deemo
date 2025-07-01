import { Box } from "@mui/material";
import PlaylistModal from "../../../component/Playlist/Modal";
import { useTrackSelected } from "../../../context/useTrackSelection";
import useOutsideClick from "../../../hook/useOutsideClick";
import MusicIcon from "../../../image/music.png";
import { TrackObject } from "../../../models/tracks";
import { countPageNum } from "../../../utils/playlist";
import TrackListItem from "./TrackListItem";

const TrackInfinityList = ({
  tracks,
  pagenum,
}: { tracks: TrackObject[] } & { pagenum: number }) => {
  const { trackUri, selectTrack, selectPlaylist } = useTrackSelected();
  const ModalRef = useOutsideClick(() => {
    selectTrack(null);
    selectPlaylist(null);
  });

  const handleOpenModal = (uri: string) => {
    selectTrack(uri);
  };

  return (
    <Box>
      {tracks.map((item, i) => {
        return (
          <Box position={"relative"} key={i}>
            <TrackListItem
              idx={countPageNum(20, pagenum, i)}
              img={item.album.images?.[0]?.url || MusicIcon}
              name={item.name}
              artistName={item.artists[0].name}
              duration_ms={item.duration_ms}
              isSelect={trackUri === item.uri}
              onClick={() => handleOpenModal(item.uri)}
            />

            {trackUri && trackUri === item.uri && (
              <PlaylistModal itemRef={ModalRef} />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default TrackInfinityList;
