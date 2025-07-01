import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import useFouces from "../../../hook/useFocuse";
import { formatMinSec } from "../../../utils/playlist";

interface CardProps {
  img?: string;
  idx?: number;
  name?: string;
  artistName?: string;
  duration_ms?: number;
  isSelect: boolean;
  onClick?: () => void;
}

const TrackListItem = ({
  idx,
  img,
  name = "알수없음",
  artistName = "알수없음",
  duration_ms = 0,
  isSelect,
  ...props
}: CardProps) => {
  const focuse = useFouces();

  return (
    <Row
      onMouseOver={focuse.on}
      onMouseLeave={focuse.off}
      className={isSelect ? "select" : undefined}
    >
      <Box display={"flex"} alignItems={"center"}>
        {idx && (
          <Typography variant="subtitle1" marginRight={2}>
            {idx}
          </Typography>
        )}
        <PicBox>
          <img src={img} alt={name} className="Thumbnail" />
        </PicBox>
        <div>
          <Title>{name}</Title>
          <Typography variant="subtitle1">{artistName}</Typography>
        </div>
      </Box>
      <AddBox
        display={"flex"}
        alignItems={"center"}
        className={focuse.isfocuse}
      >
        <Typography marginRight={1}>{formatMinSec(duration_ms)}</Typography>
        <Button {...props}>+</Button>
      </AddBox>
    </Row>
  );
};

export default TrackListItem;

const Row = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 8px;
  overflow: hidden;
  :hover {
    background-color: #272727;
  }
  &.select {
    background-color: #2d2d2d;
  }
`;
const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const AddBox = styled(Box)`
  position: absolute;
  right: -3rem;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.4s ease;
  pointer-events: none;

  &.show {
    right: 1rem;
    pointer-events: auto;
  }
`;
const PicBox = styled("div")<{ width?: number }>`
  width: ${({ width }) => `${width || 3}rem`};
  aspect-ratio: 1/1;
  margin-right: 1rem;
  border-radius: 4px;
  overflow: hidden;

  img.Thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
