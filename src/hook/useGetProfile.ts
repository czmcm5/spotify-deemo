import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../api/userApi";
import { UserProfile } from "../models/user";

const useGetProfile = (): UseQueryResult<UserProfile> => {
  const accessToken = localStorage.getItem("access_token");

  return useQuery({
    queryKey: ["current-user-profile"],
    queryFn: getCurrentUserProfile,
    enabled: !!accessToken, // ac 토큰이 있을 때만 실행
    staleTime: Infinity, // 무한대로 설정하여 한 번 받아온 데이터는 계속 신선한 것으로 간주
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 방지
    refetchOnMount: false, // 컴포넌트 마운트 시 재요청 방지 (이미 캐시된 데이터가 있는 경우)
    retry: 1, // 실패 시 1번만 재시도
  });
};

export default useGetProfile;
