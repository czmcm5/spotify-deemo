import { Button, styled } from "@mui/material";
import { getSpotifyLogin } from "../../../utils/auth";

const LoginBtn = () => {
  return (
    <Login variant="contained" color="secondary" onClick={getSpotifyLogin}>
      로그인하기
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
