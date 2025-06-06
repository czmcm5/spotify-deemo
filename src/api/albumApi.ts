import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import { GetNewReleasesRes } from "../models/album";

export const getNewReleases = async (
  token: string
): Promise<GetNewReleasesRes> => {
  const limit = 6;

  try {
    const res = await axios.get(
      `${SPOTIFY_BASE_URL}/browse/new-releases?limit=${limit}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    // console.log(res.data);

    return res.data;
  } catch (error) {
    throw new Error("fail to fetch new releases");
  }
};
