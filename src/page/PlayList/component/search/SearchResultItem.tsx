import { Button, styled, TableCell, TableRow } from "@mui/material";
import useAddItemToPlaylist from "../../../../hook/useAddItemToPlaylist";
import { useParams } from "react-router";
import AuthExpiredMessage from "../AuthExpiredMessage";
import ErrorMessage from "../../../../Layout/ErrorMessage";

interface SearchAlbumProps {
  idx: number;
  imageSrc: string;
  albumName: string;
  artistName: string;
}
interface SearchTrackProps extends SearchAlbumProps {
  trackName: string;
  uri: string;
}

export const SearchResultAlbum = ({
  idx,
  imageSrc,
  albumName,
  artistName,
}: SearchAlbumProps) => {
  return (
    <Row>
      <Cell>{idx}</Cell>
      <Cell>
        <PicBox className="Album">
          <img src={imageSrc} alt="album-thumbnail" />
        </PicBox>
      </Cell>
      <Cell>
        <div className="title">{albumName}</div>
        <div>{artistName}</div>
      </Cell>
      <Cell>{">"}</Cell>
    </Row>
  );
};

export const SearchResultTrack = ({
  idx,
  imageSrc,
  trackName,
  albumName,
  artistName,
  uri,
}: SearchTrackProps) => {
  // props drilling이 3번이나 일어나는건 별로같아서 따로뺐으나
  // 추후 context API로 수정해보기
  const { id: playlist_id } = useParams();
  const {
    mutate: AddItemToPlaylist,
    isPending,
    error,
  } = useAddItemToPlaylist();

  const handleAddItemToPlaylist = () => {
    if (isPending) return;
    if (playlist_id) {
      AddItemToPlaylist({ playlist_id, uris: [uri] });
    }
  };

  if (error && error.message === "retry") {
    return <AuthExpiredMessage />;
  }
  if (error) {
    return <ErrorMessage errMessage={error.message} />;
  }
  return (
    <Row>
      <Cell>{idx}</Cell>
      <Cell>
        <PicBox>
          <img src={imageSrc} alt="track-thumbnail" />
        </PicBox>
      </Cell>
      <Cell>
        <div className="title">{trackName}</div>
        <div>{artistName}</div>
      </Cell>
      <Cell>{albumName}</Cell>
      <Cell>
        <AddTrackBtn onClick={handleAddItemToPlaylist}>추가하기</AddTrackBtn>
      </Cell>
    </Row>
  );
};

const Row = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: #333333;
  }
`;
const Cell = styled(TableCell)`
  border: 0;
  padding: 0.5rem;
  && {
    font-size: 16px;
    color: #858585;
  }
  .title {
    color: white;
  }
`;
const PicBox = styled("div")`
  width: 3rem;
  aspect-ratio: 1/1;
  border-radius: 4px;
  overflow: hidden;
  background-color: #2a2a2a;

  &.Album {
    border-radius: 50px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const AddTrackBtn = styled(Button)`
  white-space: nowrap;
  color: white;
  border: 1px solid #858585;
  cursor: pointer;

  &:hover {
    border-color: white;
  }
`;
