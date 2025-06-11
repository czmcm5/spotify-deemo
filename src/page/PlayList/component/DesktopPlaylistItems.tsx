import { TableCell, TableRow } from "@mui/material";
import { PlaylistTrack } from "../../../models/playlist";
import { EpisodeObject, TrackObject } from "../../../models/tracks";

interface ItemsPropsType {
  item: PlaylistTrack;
  idx: number;
}

const isEpisode = (
  track: TrackObject | EpisodeObject
): track is EpisodeObject => {
  return "description" in track;
};

const DesktopPlaylistItems = ({ item, idx }: ItemsPropsType) => {
  return (
    <TableRow>
      <TableCell>{idx}</TableCell>
      <TableCell>{item.track.name || "no title"}</TableCell>
      <TableCell>
        {isEpisode(item.track) ? "-" : item.track.album?.name}
      </TableCell>
      <TableCell>{item.added_at}</TableCell>
      <TableCell>{item.track.duration_ms || "-"}</TableCell>
    </TableRow>
  );
};

export default DesktopPlaylistItems;
