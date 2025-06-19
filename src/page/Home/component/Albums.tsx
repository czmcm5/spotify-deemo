import useSearchitems from "../../../hook/useSearchitems";
import ErrorMessage from "../../../Layout/ErrorMessage";
import { SEARCH_TYPE } from "../../../models/search";
import { CardGridList } from "../../../style/CardStyled";
import ArtistCardList from "../../Search/component/ArtistCardList";

const Albums = ({
  keyword,
  type,
  limit,
}: {
  keyword: string;
  type: SEARCH_TYPE[];
  limit: number;
}) => {
  const { data, error } = useSearchitems({
    q: keyword,
    type,
    limit,
  });

  if (!data?.pages[0]) {
    return null;
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  return (
    <CardGridList>
      {data.pages.map((page) =>
        page?.artists?.items.map((item, i) => (
          <ArtistCardList key={i} artists={item} />
        ))
      )}
    </CardGridList>
  );
};
export default Albums;
