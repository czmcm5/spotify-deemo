import styled from "@mui/styled-engine-sc";
import useGetCurrentUserPlaylists from "../../../hook/useGetCurrentUserPlaylists";
import useGetProfile from "../../../hook/useGetProfile";
import useInfiniteScroll from "../../../hook/useInfiniteScroll";
import LoadingBar from "../../../style/LoadingBar";
import ErrorMessage from "../../ErrorMessage";
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
    <>
      {data.pages.map((page, idx) => (
        <PlaylistItem key={idx} list={page.items} />
      ))}

      <Loding>
        {isFetchingNextPage ? (
          <div className="loading" />
        ) : !hasNextPage ? (
          <div>마지막 입니다.</div>
        ) : (
          <></>
        )}
      </Loding>

      {!isFetchingNextPage && <Observer id="observer" />}
    </>
  );
};

export default Library;

const Loding = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  font-size: 14px;
  color: #858585;

  div.loading {
    box-sizing: border;
    width: 30px;
    height: 30px;
    border: 4px solid #25c56a54;
    border-top-color: #25c56a;
    border-radius: 100%;

    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Observer = styled("div")`
  height: 1rem;
  /* background-color: yellow; */
`;
