import { styled, Typography } from "@mui/material";
import LoginBtn from "../../../Layout/component/Login/Login";

const AuthExpiredMessage = () => {
  return (
    <LoginBox>
      <Typography variant="h1" marginBottom={"0.5rem"}>
        인증이 만료되었습니다.
      </Typography>
      <Typography variant="h2" color="#999999" marginBottom={"1rem"}>
        재로그인 해주세요.
      </Typography>
      <LoginBtn />
    </LoginBox>
  );
};

export default AuthExpiredMessage;

const LoginBox = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;
