import { ApiRes } from "./apiRes";
import { ArtistsType } from "./artist";
import { ExternalUrls, Images, Restrictions } from "./commonType";

export interface GetNewReleasesRes {
  albums: ApiRes<AlbumItemType>;
}

export interface AlbumItemType {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Images[];
  name: string;
  release_date: string;
  release_date_precision: number;
  restrictions?: Restrictions;
  type: string;
  uri: string;
  artists: ArtistsType[];
}
