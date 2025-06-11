import { useParams } from "react-router";
import useGetPlaylist from "../../hook/useGetPlaylist";
import ErrorMessage from "../../Layout/ErrorMessage";
import LoadingBar from "../../style/LoadingBar";
import DetailHeader from "./component/DetailHeader";
import useGetPlaylistItem from "../../hook/useGetPlaylistItem";
import useInfiniteScroll from "../../hook/useInfiniteScroll";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DesktopPlaylistItems from "./component/DesktopPlaylistItems";
import styled from "@mui/styled-engine-sc";

const PlayListDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const {
    data: playlist,
    isLoading: isPlaylistLoading,
    error: playlistErr,
  } = useGetPlaylist({ playlist_id: id });

  const {
    data: playlistItems,
    isLoading: isPlaylistItemsLoading,
    error: playlistItemsErr,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetPlaylistItem({ playlist_id: id, limit: 10 });

  console.log(playlistItems);
  useInfiniteScroll({
    page: "playlistItems",
    isLoading: isFetchingNextPage,
    isFinished: !hasNextPage,
    onIntersect: fetchNextPage,
  });

  if (isPlaylistLoading) {
    return <LoadingBar />;
  }
  if (playlistErr) {
    return <ErrorMessage errMessage={playlistErr.message} />;
  }
  return (
    <PageBox>
      <DetailHeader
        image={playlist?.images ? playlist?.images[0].url : null}
        listName={playlist?.name || "플레이리스트"}
        description={playlist?.description || ""}
        ownerName={playlist?.owner?.display_name || "알수없음"}
        count={playlist?.tracks?.items.length || 0}
      />

      {playlist?.tracks?.total === 0 ? (
        <div>검색창</div>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
              <TableCell>#</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playlistItems?.pages.map((page, PIdx) =>
              page.items.map((item, Iidx) => (
                <DesktopPlaylistItems
                  key={Iidx}
                  idx={PIdx * 10 + Iidx + 1}
                  item={item}
                />
              ))
            )}
          </TableBody>
        </Table>
      )}
    </PageBox>
  );
};
export default PlayListDetailPage;

const PageBox = styled("div")`
  height: 100%;
  overflow: scroll;
  background-color: red;
`;
