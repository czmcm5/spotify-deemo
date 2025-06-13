import {
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import useSearchitems from "../../../../hook/useSearchitems";
import MusicIcon from "../../../../image/music.png";
import ErrorMessage from "../../../../Layout/ErrorMessage";
import { SEARCH_TYPE } from "../../../../models/search";
import { LoadingSpinner } from "../../../../style/LoadingBar";
import NoSearchResult from "./NoSearchResult";
import useInfiniteScroll from "../../../../hook/useInfiniteScroll";
import { countPageNum } from "../../../../utils/playlist";
import LoadState, { Observer } from "../../../../style/LodingBox";

interface SearchResultProps {
  keyword: string;
}

const SearchResult = ({ keyword }: SearchResultProps) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearchitems({
    q: keyword,
    type: [SEARCH_TYPE.Track, SEARCH_TYPE.Album],
  });

  useInfiniteScroll({
    page: "search-result",
    isLoading: isFetchingNextPage,
    isFinished: !hasNextPage,
    onIntersect: fetchNextPage,
  });

  // if (keyword !== "") console.log("어랍셔 ", data?.pages);

  if (keyword === "" || !data?.pages) {
    return null;
  }
  if (isLoading) {
    return (
      <Loding>
        <LoadingSpinner width={40} height={40} />
      </Loding>
    );
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  if (data.pages[0]?.tracks?.total === 0) {
    return <NoSearchResult keyword={keyword} />;
  }
  return (
    <>
      <Table sx={{ borderCollapse: "collapse" }}>
        <TableBody>
          {data.pages.map((page, PIdx) => {
            return page?.tracks?.items.map((item, Iidx) => {
              const imageSrc = item.album.images?.[0]?.url;

              return (
                <Row key={Iidx}>
                  <Cell>{countPageNum(20, PIdx, Iidx)}</Cell>
                  <Cell>
                    <PicBox>
                      <img src={imageSrc || MusicIcon} alt="track-thumbnail" />
                    </PicBox>
                  </Cell>
                  <Cell>
                    <div className="title">{item.name}</div>
                    <div>{item.artists[0].name}</div>
                  </Cell>
                  <Cell>{item.album.name}</Cell>
                  <Cell>
                    <AddTrackBtn>추가하기</AddTrackBtn>
                  </Cell>
                </Row>
              );
            });
          })}
        </TableBody>
      </Table>

      <LoadState isLoading={isFetchingNextPage} isFinished={!hasNextPage} />
      {!isFetchingNextPage && <Observer id="observer-search-result" />}
    </>
  );
};

export default SearchResult;

const Loding = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Row = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: #333333;
  }
`;
const Cell = styled(TableCell)`
  border: 0;
  padding: 0.5rem;
  && {
    font-size: 16px;
    color: #858585;
  }
  .title {
    color: white;
  }
`;
const PicBox = styled("div")`
  width: 3rem;
  aspect-ratio: 1/1;
  border-radius: 4px;
  overflow: hidden;
  background-color: #2a2a2a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const AddTrackBtn = styled(Button)`
  white-space: nowrap;
  color: white;
  border: 1px solid #858585;
  cursor: pointer;

  &:hover {
    border-color: white;
  }
`;
