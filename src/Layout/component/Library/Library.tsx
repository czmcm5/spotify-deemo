import useGetCurrentUserPlaylists from "../../../hook/useGetCurrentUserPlaylists";
import EmptyPlayList from "./EmptyPlayList";
import PlaylistItem from "./PlaylistItem";

const Library = () => {
  const { data } = useGetCurrentUserPlaylists({ limit: 20, offset: 0 });

  if (data?.items && data.items.length > 0) {
    return data.items.map((item, idx) => (
      <PlaylistItem key={idx} item={item} />
    ));
  }

  return <EmptyPlayList />;
};

export default Library;
