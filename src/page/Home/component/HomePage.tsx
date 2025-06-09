import { Typography } from "@mui/material";
import useGetNewReleases from "../../../hook/useGetNewReleases";
import CardList from "./Card";
import ErrorMessage from "../../../Layout/ErrorMessage";
import LoadingBar from "../../../style/LoadingBar";

const NowReleases = () => {
  const { data, error, isLoading } = useGetNewReleases();

  if (isLoading) {
    return <LoadingBar />;
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  return (
    <div>
      <Typography variant="h1" paddingTop={2}>
        최근 출시 앨범
      </Typography>

      {data && data.albums.items.length > 0 && (
        <CardList albums={data.albums.items} />
      )}
    </div>
  );
};
export default NowReleases;
