import { useQuery } from "@tanstack/react-query";
import { getNewReleases } from "../api/albumApi";
import useGetSpoAccessToken from "./useGetSpoAccessToken";

const useGetNewReleases = () => {
  const clientToken = useGetSpoAccessToken();

  return useQuery({
    queryKey: ["new-releases"],
    queryFn: async () => {
      if (!clientToken) throw new Error("No token available");

      return getNewReleases(clientToken);
    },
  });
};

export default useGetNewReleases;
