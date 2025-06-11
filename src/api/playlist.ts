import {
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
  } catch (error) {
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
