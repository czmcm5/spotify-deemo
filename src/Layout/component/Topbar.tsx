import { styled } from "@mui/material";
import FackLogo from "../../image/fake_Logo.png";
import Login from "./Login/Login";
import Profile from "./Login/Profile";

const Topbar = () => {
  const isLogin = !!localStorage.getItem("access_token");
  return (
    <Container>
      <Logo
        src={FackLogo}
        alt="fack_logo"
        onClick={() => (window.location.href = "/")}
      />

      {isLogin ? <Profile /> : <Login />}
    </Container>
  );
};

export default Topbar;

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  height: 3rem;
  margin-bottom: 8px;
  color: white;
  border-radius: 8px;
`;

const Logo = styled("img")`
  width: 2.2rem;
  cursor: pointer;
`;
