import { styled } from "@mui/material";
import { NavLink, useLocation } from "react-router";
import HomeIcon from "../../image/HomeIcon.png";
import SearchIcon from "../../image/SearchIcon.png";
import BookmarkIcon from "../../image/BookmarkIcon.png";

const MobileNavibar = () => {
  const { pathname } = useLocation();
  const isCurrentPath = (menu: string) => (pathname === menu ? "active" : "");

  return (
    <Container>
      <Menu to="/" className={`${isCurrentPath("/")}`}>
        <img src={HomeIcon} alt="홈 아이콘" />
        <div>홈</div>
      </Menu>
      <Menu to="/search" className={`${isCurrentPath("/search")}`}>
        <img src={SearchIcon} alt="검색 아이콘" />
        <div>검색</div>
      </Menu>
      <Menu to="/playlist" className={`${isCurrentPath("/playlist")}`}>
        <img src={BookmarkIcon} alt="북마크 아이콘" />
        <div>플레이리스트</div>
      </Menu>
    </Container>
  );
};

export default MobileNavibar;

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  font-size: 12px;
  color: white;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: none;
  }
`;
const Menu = styled(NavLink)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  color: #808080;
  cursor: pointer;
  img {
    opacity: 0.3;
  }
  &.active {
    color: white;
    img {
      opacity: 1;
    }
  }
`;
