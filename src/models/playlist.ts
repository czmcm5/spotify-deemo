import { ApiRes } from "./apiRes";
import { ArtistsType } from "./artist";
import { ExternalUrls, Images, Owener } from "./commonType";
import { EpisodeObject, TrackObject } from "./tracks";

export interface GetCurrentUserPlaylistReq {
  limit?: number;
  offset?: number;
}

export type GetCurrentUserPlaylistRes = ApiRes<SimplifiedPlaylist>;

export interface BasePlaylist {
  collaborative?: boolean;
  description?: string | null;
  external_urls?: ExternalUrls;
  href?: string;
  id?: string;
  images?: Images[];
  name?: string;
  owner?: Owener;
  public?: boolean;
  snapshot_id?: string;
  type?: "playlist";
  uri?: string;
}

export interface SimplifiedPlaylist extends BasePlaylist {
  tracks?: {
    href: string;
    total: number;
  };
}

export interface Playlist extends BasePlaylist {
  tracks?: ApiRes<PlaylistTrack>;
}

export interface PlaylistTrack {
  added_at?: string | null;
  added_by?: {
    external_urls?: ExternalUrls;
    followers?: {};
    href?: string;
    id?: string;
    type?: string;
    uri?: string;
  } | null;
  is_local?: boolean;
  track: TrackObject | EpisodeObject;
}

export interface GetPlaylistReq {
  playlist_id: string;
  market?: string;
  fields?: string;
  additional_type?: string;
}

export interface GetPlaylistItemsReq extends GetPlaylistReq {
  limit?: number;
  offset?: number;
}

export type GetPlaylistItemsRes = ApiRes<PlaylistTrack>;
