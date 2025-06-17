import { styled, Typography } from "@mui/material";
import { useSearchFilterContext } from "../../context/SearchFilterProvider";
import useInfiniteScroll from "../../hook/local/useInfiniteScroll";
import useSearchitems from "../../hook/useSearchitems";
import ErrorMessage from "../../Layout/ErrorMessage";
import { LoadingSpinner } from "../../style/LoadingBar";
import LoadState, { Observer } from "../../style/LodingBox";
import NoSearchResult from "../PlayList/component/search/NoSearchResult";
import ArtistCardList from "./component/ArtistCardList";
import { CardGridList } from "../../style/CardStyled";
import CardList from "../Home/component/Card";
import TrackCardList from "./component/TrackCardList";

const SearchWithKeyword = () => {
  const { keyword, type, limit, menuName } = useSearchFilterContext();
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearchitems({
    q: keyword,
    type,
    limit,
  });

  useInfiniteScroll({
    page: "search-result",
    isLoading: isFetchingNextPage,
    isFinished: !hasNextPage,
    onIntersect: fetchNextPage,
  });

  if (isLoading) {
    return (
      <Loading>
        <LoadingSpinner width={40} height={40} />
      </Loading>
    );
  }

  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }

  const firstPage = data?.pages[0];
  const trackTotal = (firstPage && firstPage.tracks?.total) || 0;
  const albumsTotal = (firstPage && firstPage.albums?.total) || 0;
  const artistsTotal = (firstPage && firstPage.artists?.total) || 0;

  const noResults =
    !firstPage || (trackTotal === 0 && albumsTotal === 0 && artistsTotal === 0);

  if (noResults) {
    return <NoSearchResult keyword={keyword} />;
  }

  return (
    <>
      {trackTotal > 0 && menuName === "곡" && (
        <Typography variant="h1" padding={2} paddingTop={6}>
          곡
        </Typography>
      )}
      {trackTotal > 0 &&
        data.pages.map((page, i) => {
          if (!page?.tracks?.items) return null;
          return (
            <TrackCardList
              key={i}
              pagenum={i}
              tracks={page?.tracks?.items}
              isCurrentMenu={menuName === "곡"}
            />
          );
        })}

      {albumsTotal > 0 && (
        <Typography variant="h1" padding={2} paddingTop={6}>
          앨범
        </Typography>
      )}
      <CardGridList>
        {data.pages.map((page) =>
          page?.albums?.items.map((item, i) => (
            <CardList key={i} albums={item} />
          ))
        )}
      </CardGridList>

      {artistsTotal > 0 && (
        <Typography variant="h1" padding={2} paddingTop={6}>
          아티스트
        </Typography>
      )}
      <CardGridList>
        {data.pages.map((page) =>
          page?.artists?.items.map((item, i) => (
            <ArtistCardList key={i} artists={item} />
          ))
        )}
      </CardGridList>

      {type.length === 1 && (
        <>
          <LoadState isLoading={isFetchingNextPage} isFinished={!hasNextPage} />
          {!isFetchingNextPage && <Observer id="observer-search-result" />}
        </>
      )}
    </>
  );
};

export default SearchWithKeyword;

const Loading = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
