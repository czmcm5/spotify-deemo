import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PlaylistModal from "../../../component/Playlist/Modal";
import { useTrackSelected } from "../../../context/useTrackSelection";
import useOutsideClick from "../../../hook/local/useOutsideClick";
import MusicIcon from "../../../image/music.png";
import { TrackObject } from "../../../models/tracks";
import TrackListItem from "./TrackListItem";

const TrackResultList = ({ tracks }: { tracks: TrackObject[] }) => {
  const { trackUri, selectTrack, selectPlaylist } = useTrackSelected();
  const ModalRef = useOutsideClick(() => {
    selectTrack(null);
    selectPlaylist(null);
  });

  const handleOpenModal = (uri: string) => {
    selectTrack(uri);
  };

  return (
    <Box flex={1}>
      <Typography variant="h1" padding={2} paddingTop={6}>
        곡
      </Typography>

      {tracks.map((item, i) => {
        if (i > 3) return null;
        return (
          <Box position={"relative"}>
            <TrackListItem
              key={i}
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

export default TrackResultList;
