import { Button, styled, TableCell, TableRow } from "@mui/material";

interface SearchAlbumProps {
  idx: number;
  imageSrc: string;
  albumName: string;
  artistName: string;
}
interface SearchTrackProps extends SearchAlbumProps {
  trackName: string;
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
}: SearchTrackProps) => {
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
        <AddTrackBtn>추가하기</AddTrackBtn>
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
