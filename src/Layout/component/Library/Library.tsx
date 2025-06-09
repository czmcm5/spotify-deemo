import useGetCurrentUserPlaylists from "../../../hook/useGetCurrentUserPlaylists";
import useGetProfile from "../../../hook/useGetProfile";
import LoadingBar from "../../../style/LoadingBar";
import ErrorMessage from "../../ErrorMessage";
import EmptyPlayList from "./EmptyPlayList";
import PlaylistItem from "./PlaylistItem";

const Library = () => {
  const { data: user } = useGetProfile();
  const { data, isLoading, error } = useGetCurrentUserPlaylists({
    limit: 3,
    offset: 0,
  });

  if (!user) {
    return <EmptyPlayList />;
  }
  if (isLoading) {
    return <LoadingBar />;
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  if (!data?.pages || data.pages[0].total === 0) {
    return <EmptyPlayList />;
  }
  return data?.pages[0].items.map((item, idx) => (
    <PlaylistItem key={idx} item={item} />
  ));
};

export default Library;
