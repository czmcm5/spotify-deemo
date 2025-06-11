import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import LoadState, { Observer } from "../../../style/LodingBox";
import PlaylistItmesPC from "./PlaylistItmesPC";
import useInfiniteScroll from "../../../hook/useInfiniteScroll";
import useGetPlaylistItem from "../../../hook/useGetPlaylistItem";
import LoadingBar from "../../../style/LoadingBar";
import ErrorMessage from "../../../Layout/ErrorMessage";

const SearchPage = () => {
  return (
    <SearchBox>
      <Typography variant="h1">
        플레이리스트에 추가할 곡을 찾아보세요
      </Typography>
      <input placeholder="곡 또는 에피소드 검색하기" />
    </SearchBox>
  );
};

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
  return (
    <ItemsListBox>
      {isShow ? (
        <SearchPage />
      ) : (
        <>
          <Table sx={{ borderCollapse: "collapse" }}>
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
        </>
      )}
    </ItemsListBox>
  );
};

export default DetailList;

const ItemsListBox = styled("div")`
  margin: 0 1rem;
`;
const SearchBox = styled("div")`
  margin: 2rem 0;
  input {
    width: 100%;
    max-width: 23rem;
    padding: 0.7rem;
    margin: 1rem 0;
    font-size: 16px;
    color: white;
    background-color: #333333;
    border: 0;
    outline: 0;
  }
`;
const Cell = styled(TableCell)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
