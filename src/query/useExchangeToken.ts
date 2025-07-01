import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { exchangeToken } from "../api/authApi";
import { AccessTokenRes } from "../models/auth";

const useExchangeToken = () => {
  const Navigate = useNavigate();
  const queryClient = useQueryClient();

  // <응답값 타입, 에러 타입, mutationFn 파라미터값 타입>
  return useMutation<
    AccessTokenRes,
    Error,
    { code: string; codeVerifier: string }
  >({
    mutationFn: ({ code, codeVerifier }) => exchangeToken(code, codeVerifier),
    onSuccess: (data) => {
      localStorage.setItem("access_token", data.access_token);
      Navigate("/"); // url창에 code 지우기
      queryClient.invalidateQueries({
        queryKey: ["current-user-profile"],
      });
    },
  });
};

export default useExchangeToken;
