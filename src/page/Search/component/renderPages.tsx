import { Typography } from "@mui/material";
import { SearchRes } from "../../../models/search";
import CardList from "../../Home/component/Card";
import ArtistCardList from "./ArtistCardList";
import TrackCardList from "./TrackCardList";

export const renderTracks = (page: SearchRes) => {
  const tracks = page.tracks;
  if (!tracks?.items || tracks.total === 0) return null;

  return <TrackCardList tracks={tracks.items} />;
};

export const renderAlbums = (page: SearchRes) => {
  const albums = page.albums;
  if (!albums?.items || albums.total === 0) return null;

  return (
    <>
      <Typography variant="h1" padding={2} paddingTop={6}>
        앨범
      </Typography>
      <CardList albums={albums.items} />
    </>
  );
};

export const renderArtists = (page: SearchRes) => {
  const artists = page.artists;
  if (!artists?.items || artists.total === 0) return null;

  return (
    <>
      <Typography variant="h1" padding={2} paddingTop={6}>
        아티스트
      </Typography>
      <ArtistCardList artists={artists.items} />
    </>
  );
};
