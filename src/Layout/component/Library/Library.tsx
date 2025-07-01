import styled from "@mui/styled-engine-sc";
import { useNavigate, useParams } from "react-router";
import useInfiniteScroll from "../../../hook/useInfiniteScroll";
import useGetCurrentUserPlaylists from "../../../query/useGetCurrentUserPlaylists";
import useGetProfile from "../../../query/useGetProfile";
import DataStateRender from "../../../share/ui/DataStateRender";
import LoadState, { Observer } from "../../../style/LodingBox";
import EmptyPlayList from "./EmptyPlayList";
import PlaylistItem from "./PlaylistItem";

// 상수 분리
const LiBRARY_PAGE_NAME = {
  mobile: "library-mobile",
  desktop: "library",
};

const Library = ({ isMobile }: { isMobile?: boolean }) => {
  const Navigate = useNavigate();
  const { id = "" } = useParams();
  const { data: user } = useGetProfile();
  const {
    data,
    isLoading,
    error,
    hasNextPage, // 다음페이지 있는지?: boolean
    fetchNextPage, // 다음페이지 가져오는 함수
    isFetchingNextPage, // 다음페이지 가져오는 중인지? : boolean
  } = useGetCurrentUserPlaylists({
    enabled: !!user, // user가 있을 때만 실행
  });

  // 커스텀 무한 스크롤
  const pageName = isMobile
    ? LiBRARY_PAGE_NAME.mobile
    : LiBRARY_PAGE_NAME.desktop;

  useInfiniteScroll({
    page: pageName,
    isLoading: isFetchingNextPage,
    isFinished: !hasNextPage,
    onIntersect: fetchNextPage,
  });

  const goPlaylistDetail = (id: string) => Navigate(`/playlist/${id}`);

  const stateComponent = DataStateRender({
    isEmpty: !user || !data?.pages || data.pages[0].total === 0,
    EmptyComponet: EmptyPlayList,
    isLoading: isLoading,
    isError: error,
  });

  if (stateComponent) return stateComponent;

  return (
    <ListBox>
      {data?.pages.map((page) =>
        page.items.map((item, idx) => (
          <PlaylistItem
            key={idx}
            item={item}
            onClick={() => goPlaylistDetail(item.id || "")}
            isSelect={id === item.id}
          />
        ))
      )}

      <LoadState isLoading={isFetchingNextPage} isFinished={!hasNextPage} />
      {!isFetchingNextPage && <Observer id={`observer-${pageName}`} />}
    </ListBox>
  );
};

export default Library;

const ListBox = styled("div")`
  height: 100%;
  padding-bottom: 7rem;
  overflow: scroll;
`;
