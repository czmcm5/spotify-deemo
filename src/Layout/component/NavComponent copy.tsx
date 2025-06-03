import { Button, styled } from "@mui/material";
import FackLogo from "../../image/fake_Logo.png";

const Topbar = () => {
  return (
    <Container>
      <Logo src={FackLogo} alt="fack_logo" />

      <LoginBtn variant="contained" color="secondary">
        Log in
      </LoginBtn>
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
`;

const LoginBtn = styled(Button)`
  width: 7rem;
  height: 2.6rem;
  font-size: 16px;
  font-weight: 700;
`;
