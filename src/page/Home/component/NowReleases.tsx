import useGetNewReleases from "../../../query/useGetNewReleases";
import ErrorMessage from "../../../Layout/ErrorMessage";
import { CardGridList } from "../../../style/CardStyled";
import LoadingBar from "../../../style/LoadingBar";
import CardList from "./Card";

const NowReleases = () => {
  const { data, error, isLoading } = useGetNewReleases();

  if (isLoading) {
    return <LoadingBar />;
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  return (
    <CardGridList>
      {data?.albums.items.map((item, idx) => (
        <CardList key={idx} albums={item} />
      ))}
    </CardGridList>
  );
};
export default NowReleases;
