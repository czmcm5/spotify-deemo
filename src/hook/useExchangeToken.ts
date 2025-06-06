import { useMutation } from "@tanstack/react-query";
import { exchangeToken } from "../api/authApi";
import { AccessTokenRes } from "../models/auth";

const useExchangeToken = () => {
  // <응답값 타입, 에러 타입, mutationFn 파라미터값 타입>
  return useMutation<
    AccessTokenRes,
    Error,
    { code: string; codeVerifier: string }
  >({
    mutationFn: ({ code, codeVerifier }) => exchangeToken(code, codeVerifier),
    onSuccess: (data) => {
      localStorage.setItem("access_token", data.access_token);
    },
  });
};

export default useExchangeToken;
