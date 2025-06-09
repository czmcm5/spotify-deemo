import { ApiRes } from "./apiRes";
import { ExternalUrls, Images, Owener } from "./commonType";

export interface GetCurrentUserPlaylistReq {
  limit?: number;
  offset?: number;
}

export type GetCurrentUserPlaylistRes = ApiRes<SimplifiedPlaylist>;

export interface SimplifiedPlaylist {
  collaborative?: boolean;
  description?: string;
  external_urls?: ExternalUrls;
  href?: string;
  id?: string;
  images?: Images[];
  name?: string;
  owner?: Owener;
  public?: boolean;
  snapshot_id?: string;
  tracks?: {
    href: string;
    total: number;
  };
  type?: string;
  uri?: string;
}
