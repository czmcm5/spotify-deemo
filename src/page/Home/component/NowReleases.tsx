import { Typography } from "@mui/material";
import useGetNewReleases from "../../../hook/useGetNewReleases";
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
    <>
      <Typography variant="h1" padding={2} paddingTop={6}>
        최근 출시 앨범
      </Typography>

      <CardGridList>
        {data?.albums.items.map((item, idx) => (
          <CardList key={idx} albums={item} />
        ))}
      </CardGridList>
    </>
  );
};
export default NowReleases;
