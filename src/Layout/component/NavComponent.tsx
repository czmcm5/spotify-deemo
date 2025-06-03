import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { styled, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router";

const NavComponent = () => {
  const { pathname } = useLocation();
  const isCurrentPath = (menu: string) => (pathname === menu ? "active" : "");

  return (
    <Container>
      <StyledNavLink to="/" className={`home ${isCurrentPath("/")}`}>
        <HomeIcon />
        <Typography variant="h2" fontWeight={700}>
          Home
        </Typography>
      </StyledNavLink>

      <StyledNavLink to="/search" className={isCurrentPath("/search")}>
        <SearchIcon />
        <Typography variant="h2" fontWeight={700}>
          Search
        </Typography>
      </StyledNavLink>
    </Container>
  );
};

export default NavComponent;

const Container = styled("div")({
  width: "100%",
  marginBottom: "8px",
  padding: "1.8rem",
  color: "white",
  backgroundColor: "#121212",
  borderRadius: "8px",
});

const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  color: "#bbbbbb",

  "&.home": {
    marginBottom: "0.7rem",
  },
  "&:hover, &.active": {
    color: "white",
  },
});
