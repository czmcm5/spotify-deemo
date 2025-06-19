import axios, { isAxiosError } from "axios";
import {
  AddItemToPlaylist,
  CreatePlaylist,
  GetCurrentUserPlaylistReq,
  GetCurrentUserPlaylistRes,
  GetPlaylistItemsReq,
  GetPlaylistItemsRes,
  GetPlaylistReq,
  Playlist,
} from "../models/playlist";
import api from "./__baseAIP";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";

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
    console.log(err);
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

export const addItemstoPlaylist = async (
  params: AddItemToPlaylist
): Promise<{ snapshot_id: string }> => {
  try {
    const res = await api.post(
      `/playlists/${params.playlist_id}/tracks`,
      params
    );

    return res.data;
  } catch (err) {
    if (isAxiosError(err) && err.response?.status === 401)
      throw new Error("retry"); // 로그인 다시
    throw new Error("fail add item to playlist");
  }
};

/** 기존거에서 acToken -> clientToken 순으로 검사해서 토큰 전달하는걸로 수정바람 */
export const getPlaylistItems_home = async ({
  token,
  params,
}: {
  token: string;
  params: GetPlaylistItemsReq;
}): Promise<GetPlaylistItemsRes> => {
  try {
    const res = await axios.get(
      `${SPOTIFY_BASE_URL}/playlists/${params.playlist_id}/tracks`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params,
      }
    );

    return res.data;
  } catch (err) {
    throw new Error("fail getPlaylistItems");
  }
};
