import { EpisodeObject, TrackObject } from "../models/tracks";

export const isEpisode = (
  track: TrackObject | EpisodeObject
): track is EpisodeObject => {
  return "description" in track;
};
