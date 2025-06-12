import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useGetPlaylistItem from "../../../hook/useGetPlaylistItem";
import useInfiniteScroll from "../../../hook/useInfiniteScroll";
import ErrorMessage from "../../../Layout/ErrorMessage";
import LoadingBar from "../../../style/LoadingBar";
import LoadState, { Observer } from "../../../style/LodingBox";
import EmptyPlaylist from "./EmptyPlaylist";
import PlaylistItmesPC from "./PlaylistItmesPC";

const DetailList = ({ id, isShow }: { id: string; isShow: boolean }) => {
  const {
    data: playlistItems,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetPlaylistItem({ playlist_id: id, limit: 10 });

  useInfiniteScroll({
    page: "playlistItems",
    isLoading: isFetchingNextPage,
    isFinished: !hasNextPage,
    onIntersect: fetchNextPage,
  });

  if (isLoading) {
    return <LoadingBar />;
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  return isShow ? (
    <EmptyPlaylist />
  ) : (
    <Container>
      <Table stickyHeader sx={{ borderCollapse: "collapse" }}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell colSpan={2}>제목</TableCell>
            <TableCell>앨범</TableCell>
            <Cell>추가한 날짜</Cell>
            <TableCell>시간</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {playlistItems?.pages.map((page, PIdx) =>
            page.items.map((item, Iidx) => (
              <PlaylistItmesPC
                key={Iidx}
                idx={PIdx * 10 + Iidx + 1}
                item={item}
              />
            ))
          )}
        </TableBody>
      </Table>

      <LoadState isLoading={isFetchingNextPage} isFinished={!hasNextPage} />
      {!isFetchingNextPage && <Observer id="observer-playlistItems" />}
    </Container>
  );
};

export default DetailList;

const Container = styled(TableContainer)`
  flex-grow: 1;
  padding-bottom: 5rem;
  overflow: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Cell = styled(TableCell)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
