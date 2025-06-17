import { styled, Typography } from "@mui/material";
import { CategoryItem } from "../../../models/category";

const CategoryItemBox = ({
  bgColor,
  item,
  ...props
}: {
  bgColor: string;
  item: CategoryItem;
  onClick: () => void;
}) => {
  return (
    <CardBox bgColor={bgColor} {...props}>
      <Typography variant="h1">{item.name}</Typography>
      <PicBox>
        <img src={item.icons[0].url} alt="카테고리 아이콘" />
      </PicBox>
    </CardBox>
  );
};

export default CategoryItemBox;

const CardBox = styled("div")<{ bgColor: string }>`
  position: relative;
  min-width: 0;
  aspect-ratio: 3/2;
  padding: 1rem;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    > div {
      right: 0;
      bottom: 0;
    }
  }
`;
const PicBox = styled("div")`
  position: absolute;
  right: -5%;
  bottom: -10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  aspect-ratio: 1/1;
  background-color: #313131;
  box-shadow: 0 3px 6px 2px #00000040;
  border-radius: 4px;
  overflow: hidden;
  transform: rotate(45deg);
  transition: bottom 0.4s ease, right 0.4s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
