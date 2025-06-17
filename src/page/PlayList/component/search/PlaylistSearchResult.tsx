import { styled, Table, TableBody } from "@mui/material";
import { searchConfig } from "../../../../configs/search";
import useInfiniteScroll from "../../../../hook/local/useInfiniteScroll";
import useSearchitems from "../../../../hook/useSearchitems";
import ErrorMessage from "../../../../Layout/ErrorMessage";
import { SEARCH_TYPE, SearchRes } from "../../../../models/search";
import { LoadingSpinner } from "../../../../style/LoadingBar";
import LoadState, { Observer } from "../../../../style/LodingBox";
import { countPageNum } from "../../../../utils/playlist";
import NoSearchResult from "./NoSearchResult";
import React from "react";

interface SearchResultProps {
  keyword: string;
  searchType: SEARCH_TYPE;
}

const PlaylistSearchResult = ({ keyword, searchType }: SearchResultProps) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearchitems({
    q: keyword,
    type: [searchType],
  });

  useInfiniteScroll({
    page: "search-result",
    isLoading: isFetchingNextPage,
    isFinished: !hasNextPage,
    onIntersect: fetchNextPage,
  });

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

  const currentConfig = searchConfig[searchType];
  const { dataKey, Component, renderProps } = currentConfig;

  if (data.pages[0]?.[dataKey as keyof SearchRes]?.total === 0) {
    return <NoSearchResult keyword={keyword} />;
  }

  return (
    <>
      <Table sx={{ borderCollapse: "collapse" }}>
        <TableBody>
          {data.pages.map((page, PIdx) => {
            return page?.[dataKey as keyof SearchRes]?.items.map(
              (item, Iidx) => {
                return (
                  <Component
                    key={`${dataKey}-${PIdx}-${Iidx}`}
                    idx={countPageNum(20, PIdx, Iidx)}
                    {...renderProps(item as any)}
                  />
                );
              }
            );
          })}
        </TableBody>
      </Table>

      <LoadState isLoading={isFetchingNextPage} isFinished={!hasNextPage} />
      {!isFetchingNextPage && <Observer id="observer-search-result" />}
    </>
  );
};

export default React.memo(PlaylistSearchResult);

const Loding = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
