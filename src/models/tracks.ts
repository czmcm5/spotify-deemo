import { ArtistsType } from "./artist";
import { ExternalUrls, Images } from "./commonType";
import { SimplifiedPlaylist } from "./playlist";

export interface TrackObject {
  album: SimplifiedPlaylist;
  artists: ArtistsType[];
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

export interface EpisodeObject {
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
