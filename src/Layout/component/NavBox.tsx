import { styled, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router";
import HomeIcon from "../../image/HomeIcon.png";
import SearchIcon from "../../image/SearchIcon.png";

const NavBox = () => {
  const { pathname } = useLocation();
  const isCurrentPath = (menu: string) => (pathname === menu ? "active" : "");

  return (
    <Container>
      <StyledNavLink
        to="/"
        className={`${isCurrentPath("/")}`}
        sx={{ margiBnottom: "0.7rem" }}
      >
        <img src={HomeIcon} alt="홈 아이콘" />
        <Typography variant="h2" fontWeight={700}>
          메인 홈
        </Typography>
      </StyledNavLink>

      <StyledNavLink to="/search" className={isCurrentPath("/search")}>
        <img src={SearchIcon} alt="검색 아이콘" />
        <Typography variant="h2" fontWeight={700}>
          검색하기
        </Typography>
      </StyledNavLink>
    </Container>
  );
};

export default NavBox;

const Container = styled("div")`
  width: 100%;
  margin-bottom: 8px;
  padding: 1.8rem;
  color: white;
  background-color: #121212;
  border-radius: 8px;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 20px;
  color: #808080;
  img {
    opacity: 0.3;
  }
  &:hover,
  &.active {
    color: white;
    img {
      opacity: 1;
    }
  }
`;
