import ErrorMessage from "../../../Layout/ErrorMessage";
import { CardGridList } from "../../../style/CardStyled";
import { isEpisode } from "../../../utils/type";
import useGetPlaylistItem from "../hook/useGetPlaylistItem";
import CardBoxBasic from "./Card_basic";

const RecommendTrakcs = ({ playlist_id }: { playlist_id: string }) => {
  const { data, error } = useGetPlaylistItem(playlist_id);

  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  return (
    <CardGridList>
      {data?.items.map((item, idx) => {
        const imageSrc = isEpisode(item.track)
          ? item.track.imgaes[0].url
          : item.track.album.images?.[0]?.url;

        const artistName = isEpisode(item.track)
          ? ""
          : item.track.artists[0].name;

        return (
          <CardBoxBasic
            key={idx}
            imgUrl={imageSrc}
            mainTitle={item.track.name}
            subTitle={artistName}
          />
        );
      })}
    </CardGridList>
  );
};
export default RecommendTrakcs;
