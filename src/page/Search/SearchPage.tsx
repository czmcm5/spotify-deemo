import { styled, Typography } from "@mui/material";
import ErrorMessage from "../../Layout/ErrorMessage";
import useGetSeveralCategory from "../../hook/useGetSeveralCategory";
import LoadingBar from "../../style/LoadingBar";
import { getBgolor } from "../../utils/category";
import useInfiniteScroll from "../../hook/local/useInfiniteScroll";
import LoadState, { Observer } from "../../style/LodingBox";
import CategoryItemBox from "./component/CategoryItem";

const SearchPage = () => {
  const {
    data: categoryList,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetSeveralCategory({ limit: 40 });

  useInfiniteScroll({
    page: "categoryList",
    isLoading: isFetchingNextPage,
    isFinished: !hasNextPage,
    onIntersect: fetchNextPage,
  });

  if (!categoryList) {
    return null;
  }
  if (isLoading) {
    return <LoadingBar />;
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  return (
    <>
      <Typography variant="h1" padding={2} paddingTop={6}>
        모두 둘러보기
      </Typography>

      <List>
        {categoryList?.pages.map((page) =>
          page?.categories.items.map((item, idx) => (
            <CategoryItemBox key={idx} item={item} bgColor={getBgolor(idx)} />
          ))
        )}

        <LoadState
          isLoading={isFetchingNextPage}
          isFinished={!hasNextPage}
          showText={false}
        />
        {!isFetchingNextPage && <Observer id="observer-categoryList" />}
      </List>
    </>
  );
};
export default SearchPage;

const List = styled("div")`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-height: 100%;
  gap: 1.5rem;
  padding: 1rem;
  padding-bottom: 10rem;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
