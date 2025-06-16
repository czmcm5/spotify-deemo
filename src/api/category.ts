import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import {
  GetServeralCategoryReq,
  GetServeralCategoryRes,
} from "../models/category";

export const getServeralCategory = async (
  token: string,
  params: GetServeralCategoryReq
): Promise<GetServeralCategoryRes> => {
  try {
    const res = await axios.get(`${SPOTIFY_BASE_URL}/browse/categories`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 40,
        ...params,
      },
    });

    return res.data;
  } catch (err) {
    throw new Error("실패: category 가져오기");
  }
};
