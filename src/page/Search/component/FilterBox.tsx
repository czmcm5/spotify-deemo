import { Box, styled } from "@mui/material";
import { useSearchFilterContext } from "../../../context/useMakeSearchKeyword";

const FilterBox = () => {
  const { setMenuName, isSelected } = useSearchFilterContext();

  return (
    <Box display={"flex"}>
      {["전체", "곡", "아티스트", "앨범"].map((item) => (
        <Filter
          key={item}
          onClick={() => setMenuName(item)}
          className={isSelected(item) ? "this" : ""}
        >
          {item}
        </Filter>
      ))}
    </Box>
  );
};

export default FilterBox;

const Filter = styled("div")`
  padding: 5px 1rem;
  background-color: #3a3a3a;
  border-radius: 50px;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #454545;
  }
  &.this {
    background-color: white;
    color: #2a2a2a;
    font-weight: 700;
  }
`;
