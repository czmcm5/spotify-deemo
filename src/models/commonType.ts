export interface ExternalUrls {
  spotify: string;
}
export interface Restrictions {
  reason?: string;
}
export interface Images {
  url: string;
  height: number | null;
  width: number | null;
}

export interface Owener {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: "user";
  uri: string;
  display_name: string | null;
}
