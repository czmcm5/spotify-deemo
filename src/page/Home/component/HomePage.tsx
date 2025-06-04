import { Typography } from "@mui/material";
import useGetNewReleases from "../../../hook/useGetNewReleases";
import CardList from "../../../Layout/component/Card";
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
        New NowReleased Albums
      </Typography>

      {data && data.albums.items.length > 0 && (
        <CardList albums={data.albums.items} />
      )}
    </div>
  );
};
export default NowReleases;
