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
import useInfiniteScroll from "../../../hook/local/useInfiniteScroll";
import ErrorMessage from "../../../Layout/ErrorMessage";
import LoadingBar from "../../../style/LoadingBar";
import LoadState, { Observer } from "../../../style/LodingBox";
import PlaylistItmesPC from "./PlaylistItmesPC";
import { countPageNum } from "../../../utils/playlist";

const DetailList = ({ id }: { id: string }) => {
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
  return (
    <Container>
      <Table stickyHeader sx={{ borderCollapse: "collapse" }}>
        <Header>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell colSpan={2}>제목</TableCell>
            <TableCell>앨범</TableCell>
            <Cell>추가한 날짜</Cell>
            <TableCell>시간</TableCell>
          </TableRow>
        </Header>

        <TableBody>
          {playlistItems?.pages.map((page, PIdx) =>
            page.items.map((item, Iidx) => (
              <PlaylistItmesPC
                key={Iidx}
                idx={countPageNum(10, PIdx, Iidx)}
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
`;
const Header = styled(TableHead)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
const Cell = styled(TableCell)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
