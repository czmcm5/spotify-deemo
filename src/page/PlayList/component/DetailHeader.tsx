import { styled } from "@mui/material";
import FackLogo from "../../../image/fake_Logo.png";
import MusicIcon from "../../../image/music.png";

interface PlaylistDetail {
  image: string | null;
  listName: string;
  description: string;
  ownerName: string;
  count: number;
}

const DetailHeader = ({
  image,
  listName,
  description,
  ownerName,
  count,
}: PlaylistDetail) => {
  return (
    <PlayListHeader>
      <PicBox>
        <img src={image || MusicIcon} />
      </PicBox>

      <div>
        <ListName>{listName}</ListName>
        <div>{description}</div>
        <InfoBox>
          <img src={FackLogo} />
          <span>{ownerName}</span>
          <span>•</span>
          <span>{count}곡</span>
        </InfoBox>
      </div>
    </PlayListHeader>
  );
};

export default DetailHeader;

const PlayListHeader = styled("div")`
  flex-shrink: 0; // 공간이 부족할 때 box가 줄어들지않음
  display: flex;
  align-items: center;
  justify-items: flex-start;
  height: 22rem;
  padding: 4rem 2rem 0rem 2rem;
  background: linear-gradient(to bottom, #424242, #222222 90%);
`;
const PicBox = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 15rem;
  aspect-ratio: 1/1;
  margin-right: 1.5rem;
  background-color: #313131;
  border-radius: 4px;
  box-shadow: 0 3px 10px 2px #0000009d;
  overflow: hidden;
  cursor: pointer;

  img.Thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 13rem;
  }
`;
const ListName = styled("div")`
  min-height: 5rem;
  font-size: 55px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 40px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 30px;
  }
`;
const InfoBox = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  img {
    width: 20px;
  }
  span {
    margin-left: 5px;
  }
`;
