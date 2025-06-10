import { ApiRes } from "./apiRes";
import { ArtistsType } from "./artist";
import { ExternalUrls, Images, Owener } from "./commonType";

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

export interface GetPlaylistReq {
  playlist_id: string;
  market?: string;
  fields?: string;
  additional_type?: string;
}

interface PlaylistTrack {
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

interface TrackObject {
  album: {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls?: ExternalUrls;
    href: string;
    id: string;
    images: Images[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: {
      reason: string;
    };
    type: "album";
    uri: string;
    artists: ArtistsType;
  };
  artists: {
    external_urls?: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: "artist";
    uri: string;
  };
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls?: ExternalUrls;
  href: string;
  id: string;
  is_playable: string;
  restrictions: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
}

interface EpisodeObject {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls?: ExternalUrls;
  href: string;
  id: string;
  imgaes: Images[];
  is_externally_hosted: boolean;
  is_playable: string;
  languages: string;
  name: string;
  release_date: string;
  release_date_precision: string;
  type: "episode";
  uri: string;
}
