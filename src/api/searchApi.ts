import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import { SearchReq, SearchRes } from "../models/search";

export const searchitems = async (
  token: string,
  params: SearchReq
): Promise<SearchRes> => {
  try {
    const searchParams = new URLSearchParams();
    searchParams.append("q", params.q);
    searchParams.append("type", params.type.join(","));

    if (params.market) searchParams.append("market", params.market.toString());
    if (params.limit) searchParams.append("limit", params.limit.toString());
    if (params.offset) searchParams.append("offset", params.offset.toString());
    if (params.include_external)
      searchParams.append("include_external", params.include_external);

    const res = await axios.get(`${SPOTIFY_BASE_URL}/search`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: searchParams,
    });
    return res.data;
  } catch (err) {
    throw new Error();
  }
};
