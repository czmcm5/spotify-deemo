import { styled, Typography } from "@mui/material";
import NowReleases from "./component/NowReleases";
import RecommendTrakcs from "./component/RecommendedTracks";
import Albums from "./component/Albums";
import { SEARCH_TYPE } from "../../models/search";

const HomePage = () => {
  return (
    <ScrollBox>
      <Typography variant="h1" padding={2} paddingTop={6}>
        최근 출시 앨범
      </Typography>
      <NowReleases />

      <Typography variant="h1" padding={2} paddingTop={6}>
        '가사없는 노래모음' 플레이리스트
      </Typography>
      <RecommendTrakcs playlist_id="5RgNs2EP5ajOgXpQxlATTT" />

      <Typography variant="h1" padding={2} paddingTop={6}>
        추천 아티스트
      </Typography>
      <Albums keyword={"아이브"} type={[SEARCH_TYPE.Artist]} limit={6} />

      <Typography variant="h1" padding={2} paddingTop={6}>
        주인장 플레이리스트
      </Typography>
      <RecommendTrakcs playlist_id="1XcLX76RkDfQX8aXXO4jBP" />
    </ScrollBox>
  );
};
export default HomePage;

const ScrollBox = styled("div")`
  max-height: 100%;
  overflow: scroll;
  padding-bottom: 10rem;
`;
