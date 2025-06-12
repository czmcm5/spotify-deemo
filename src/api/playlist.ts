import { isAxiosError } from "axios";
import {
  CreatePlaylist,
  GetCurrentUserPlaylistReq,
  GetCurrentUserPlaylistRes,
  GetPlaylistItemsReq,
  GetPlaylistItemsRes,
  GetPlaylistReq,
  Playlist,
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

export const getPlaylist = async (
  params: GetPlaylistReq
): Promise<Playlist> => {
  try {
    const res = await api.get(`/playlists/${params.playlist_id}`, {
      params,
    });
    return res.data;
  } catch (err) {
    if (isAxiosError(err) && err.response?.status === 401)
      throw new Error("retry"); // 로그인 다시
    throw new Error("fail getPlaylist");
  }
};

export const getPlaylistItems = async (
  params: GetPlaylistItemsReq
): Promise<GetPlaylistItemsRes> => {
  try {
    const res = await api.get(`/playlists/${params.playlist_id}/tracks`, {
      params,
    });

    return res.data;
  } catch (err) {
    throw new Error("fail getPlaylistItems");
  }
};

export const createPlaylist = async (
  user_id: string,
  params: CreatePlaylist
): Promise<Playlist> => {
  try {
    const { name, collaborative, description } = params;
    const res = await api.post(`/users/${user_id}/playlists`, {
      name,
      public: params.public,
      collaborative,
      description,
    });
    return res.data;
  } catch (err) {
    throw new Error("fail createPlaylist");
  }
};
