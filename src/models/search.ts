import { AlbumItemType } from "./album";
import { ApiRes } from "./apiRes";
import { ArtistsType } from "./artist";
import { SimplifiedPlaylist } from "./playlist";
import {
  EpisodeObject,
  SimplifedAudiobook,
  SimplifiedShow,
  TrackObject,
} from "./tracks";

export enum SEARCH_TYPE {
  Album = "album",
  Artist = "artist",
  Playlist = "playlists",
  Track = "track",
  Show = "show",
  Episode = "episode",
  Audiobook = "audiobook",
}

export interface SearchReq {
  q: string;
  type: SEARCH_TYPE[];
  market?: number;
  limit?: number;
  offset?: number;
  include_external?: string;
}

export interface SearchRes {
  artists?: ApiRes<ArtistsType>;
  albums?: ApiRes<AlbumItemType>;
  tracks?: ApiRes<TrackObject>;
  playlists?: ApiRes<SimplifiedPlaylist>;
  shows?: ApiRes<SimplifiedShow>;
  episodes?: ApiRes<EpisodeObject>;
  audiobooks?: ApiRes<SimplifedAudiobook>;
}
