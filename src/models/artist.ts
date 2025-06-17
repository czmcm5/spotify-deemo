import { ExternalUrls, Images } from "./commonType";

export interface ArtistsType {
  external_urls?: ExternalUrls;
  href?: string;
  id?: string;
  name?: string;
  type?: string;
  uri?: string;
  images: Images[];
}
