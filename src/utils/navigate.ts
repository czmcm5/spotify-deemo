export const goSpotify = ({ type, id }: { type: string; id: string }) => {
  window.open(`https://open.spotify.com/${type}/${id}`);
};
