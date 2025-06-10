import { useParams } from "react-router";
import useGetPlaylist from "../../hook/useGetPlayList";

const PlayListDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { data: playlist } = useGetPlaylist({ playlist_id: id });

  console.log("playlist   ", playlist);
  return <div>PlayListDetailPage</div>;
};
export default PlayListDetailPage;
