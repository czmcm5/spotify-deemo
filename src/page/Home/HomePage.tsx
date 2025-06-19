import NowReleases from "./component/NowReleases";
import RecommendTrakcs from "./component/RecommendedTracks";

const HomePage = () => {
  return (
    <div>
      <NowReleases />
      <RecommendTrakcs idx={1} playlist_id="1XcLX76RkDfQX8aXXO4jBP" />
      <RecommendTrakcs idx={2} playlist_id="5RgNs2EP5ajOgXpQxlATTT" />
    </div>
  );
};
export default HomePage;
