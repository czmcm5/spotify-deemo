import styled from "@mui/styled-engine-sc";
import useGetCurrentUserPlaylists from "../../../hook/useGetCurrentUserPlaylists";
import useGetProfile from "../../../hook/useGetProfile";
import useInfiniteScroll from "../../../hook/useInfiniteScroll";
import LoadingBar from "../../../style/LoadingBar";
import ErrorMessage from "../../ErrorMessage";
import LoadState from "../LodingBox";
import EmptyPlayList from "./EmptyPlayList";
import PlaylistItem from "./PlaylistItem";

const Library = () => {
  const { data: user } = useGetProfile();
  const {
    data,
    isLoading,
    error,
    hasNextPage, // 다음페이지 있는지?: boolean
    fetchNextPage, // 다음페이지 가져오는 함수
    isFetchingNextPage, // 다음페이지 가져오는 중인지? : boolean
  } = useGetCurrentUserPlaylists({
    limit: 10,
    enabled: !!user, // user가 있을 때만 실행
  });

  // 커스텀 무한 스크롤
  useInfiniteScroll({
    isLoading: isFetchingNextPage,
    isFinished: !hasNextPage,
    onIntersect: fetchNextPage,
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
  return (
    <ListBox>
      {data.pages.map((page) =>
        page.items.map((item, idx) => <PlaylistItem key={idx} item={item} />)
      )}

      <LoadState isLoading={isFetchingNextPage} isFinished={!hasNextPage} />
      {!isFetchingNextPage && <Observer id="observer" />}
    </ListBox>
  );
};

export default Library;

const ListBox = styled("div")`
  height: 100%;
  padding-bottom: 7rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #636363;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Observer = styled("div")`
  height: 1rem;
  /* background-color: yellow; */
`;
