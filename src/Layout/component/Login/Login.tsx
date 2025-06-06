import { Button, styled } from "@mui/material";
import { getSpotifyLogin } from "../../../utils/auth";
import Profile from "./Profile";

const LoginBtn = () => {
  if (localStorage.getItem("access_token")) {
    return <Profile />;
  }

  return (
    <Login variant="contained" color="secondary" onClick={getSpotifyLogin}>
      Log in
    </Login>
  );
};

export default LoginBtn;

const Login = styled(Button)`
  width: 7rem;
  height: 2.6rem;
  font-size: 16px;
  font-weight: bold;
`;
