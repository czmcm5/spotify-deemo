import { SEARCH_TYPE } from "../models/search";
import { TrackObject } from "../models/tracks";
import {
  SearchResultAlbum,
  SearchResultTrack,
} from "../page/PlayList/component/search/SearchResultItem";
import MusicIcon from "../image/music.png";
import { AlbumItemType } from "../models/album";

export const searchConfig: Record<
  SEARCH_TYPE,
  {
    dataKey: string;
    Component: React.ComponentType<any>;
    renderProps: (item: any) => any;
  }
> = {
  [SEARCH_TYPE.Track]: {
    dataKey: "tracks",
    Component: SearchResultTrack,
    renderProps: (item: TrackObject) => ({
      imageSrc: item.album.images?.[0]?.url || MusicIcon,
      trackName: item.name,
      albumName: item.album.name || "",
      artistName: item.artists[0].name || "알수없음",
    }),
  },
  [SEARCH_TYPE.Album]: {
    dataKey: "albums",
    Component: SearchResultAlbum,
    renderProps: (item: AlbumItemType) => ({
      imageSrc: item.images?.[0]?.url || MusicIcon,
      albumName: item.name,
      artistName: item.artists[0].name || "알수없음",
    }),
  },
  //   언젠가 ...
  [SEARCH_TYPE.Artist]: {
    dataKey: "artists",
    Component: () => null,
    renderProps: () => ({}),
  },
  [SEARCH_TYPE.Playlist]: {
    dataKey: "playlists",
    Component: () => null,
    renderProps: () => ({}),
  },
  [SEARCH_TYPE.Show]: {
    dataKey: "shows",
    Component: () => null,
    renderProps: () => ({}),
  },
  [SEARCH_TYPE.Episode]: {
    dataKey: "episodes",
    Component: () => null,
    renderProps: () => ({}),
  },
  [SEARCH_TYPE.Audiobook]: {
    dataKey: "audiobooks",
    Component: () => null,
    renderProps: () => ({}),
  },
};
