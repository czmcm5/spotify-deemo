import { styled } from "@mui/material";
import PlayArrow from "../../image/playArrow.png";

const PlayBtn = ({ isfocuse }: { isfocuse: "show" | "none" }) => {
  return (
    <Btn className={isfocuse}>
      <img src={PlayArrow} />
    </Btn>
  );
};

export default PlayBtn;

const Btn = styled("div")`
  position: absolute;
  right: 5%;
  bottom: -10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50px;
  background-color: #1ed760;
  box-shadow: 0 3px 5px 2px #00000072;

  opacity: 0;
  transition: bottom 0.4s ease, opacity 0.4s ease;
  &.show {
    bottom: 5%;
    opacity: 1;
  }

  :hover {
    width: 3.1rem;
    background-color: #29ea6d;
  }
  img {
    width: 25px;
    height: 25px;
  }
`;
