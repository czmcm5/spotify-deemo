import {
  GetCurrentUserPlaylistReq,
  GetCurrentUserPlaylistRes,
} from "../models/playlist";
import api from "./__baseAIP";

export const getCurrentUserPlaylists = async ({
  limit,
  offset,
}: GetCurrentUserPlaylistReq): Promise<GetCurrentUserPlaylistRes> => {
  try {
    const res = await api.get("/me/playlists", {
      params: { limit, offset },
    });

    return res.data;
  } catch (err) {
    throw new Error("실패: playlist 가져오기");
  }
};
