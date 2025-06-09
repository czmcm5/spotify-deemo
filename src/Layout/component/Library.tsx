import styled from "@mui/styled-engine-sc";
import useGetCurrentUserPlaylists from "../../hook/useGetCurrentUserPlaylists";
import EmptyPlayList from "./EmptyPlayList";

const Library = () => {
  const { data } = useGetCurrentUserPlaylists({ limit: 20, offset: 0 });
  const hasPlaylist = data?.items && data.items.length > 0;

  console.log(data);

  return hasPlaylist ? (
    data.items.map((item, idx) => (
      <PlayListBox key={idx}>
        <PicBox>{item.images && <img src={item.images[0]?.url} />}</PicBox>

        <div>
          <div>{item.name}</div>
          <div>플레이리스트 • {item?.owner?.display_name || "알수없음"}</div>
        </div>
      </PlayListBox>
    ))
  ) : (
    <EmptyPlayList />
  );
};

export default Library;

const PlayListBox = styled("div")`
  display: flex;
  align-items: center;
  background-color: #404040;
`;
const PicBox = styled("div")`
  width: 3.5rem;
  aspect-ratio: 1/1;
  border-radius: 4px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
