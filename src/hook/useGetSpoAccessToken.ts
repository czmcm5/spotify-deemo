import { useQuery } from "@tanstack/react-query";
import { getSpotifyToken } from "../api/authApi";

const useGetSpoAccessToken = () => {
  const { data } = useQuery({
    queryKey: ["spo-access-token"],
    queryFn: getSpotifyToken,
  });

  const accessToken = data?.access_token;
  return accessToken;
};

export default useGetSpoAccessToken;
