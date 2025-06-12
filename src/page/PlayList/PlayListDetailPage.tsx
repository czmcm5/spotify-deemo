import styled from "@mui/styled-engine-sc";
import { useParams } from "react-router";
import useGetPlaylist from "../../hook/useGetPlaylist";
import LoginBtn from "../../Layout/component/Login/Login";
import ErrorMessage from "../../Layout/ErrorMessage";
import LoadingBar from "../../style/LoadingBar";
import DetailHeader from "./component/DetailHeader";
import DetailList from "./component/DetailList";
import { Typography } from "@mui/material";

const PlayListDetailPage = () => {
  const { id = "" } = useParams<{ id: string }>();
  const {
    data: playlist,
    isLoading,
    error,
  } = useGetPlaylist({ playlist_id: id });

  if (isLoading) {
    return <LoadingBar />;
  }
  if (error) {
    if (error.message === "retry") {
      return (
        <LoginBox>
          <Typography variant="h1" marginBottom={"0.5rem"}>
            인증이 만료되었습니다.
          </Typography>
          <Typography variant="h2" color="#999999" marginBottom={"1rem"}>
            재로그인 해주세요.
          </Typography>
          <LoginBtn />
        </LoginBox>
      );
    }
    return <ErrorMessage errMessage={error.message} />;
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
      <DetailList id={id} isShow={playlist?.tracks?.total === 0} />
    </PageBox>
  );
};
export default PlayListDetailPage;

const LoginBox = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;
const PageBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
