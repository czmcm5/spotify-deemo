import { styled } from "@mui/material";
import { useLocation } from "react-router";
import NavBox from "./NavBox";
import LibraryHead from "./Library/LibraryHead";
import Library from "./Library/Library";

const SiderBar = () => {
  const { pathname } = useLocation();

  return (
    <SiderBox>
      <NavBox />
      {pathname !== "/playlist" && (
        <LibraryBox>
          <LibraryHead />
          <Library />
        </LibraryBox>
      )}
    </SiderBox>
  );
};

export default SiderBar;

const SiderBox = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 16rem;
  max-width: 26rem;
  height: 100%;
  margin-right: 8px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`;
const LibraryBox = styled("div")<{ flex?: number }>`
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  padding: 0.5rem;
  color: white;
  background-color: #121212;
  border-radius: 8px;
  overflow: hidden;
`;
