import { ExternalUrls, Images } from "./commonType";

export interface UserProfile {
  country?: string;
  display_name?: string;
  email?: string;
  explicit_content?: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls?: ExternalUrls;
  followers?: {
    href: string;
    total: number;
  };
  href?: string;
  id?: string;
  images?: Images[];
  product?: string;
  type?: string;
  uri?: string;
}
