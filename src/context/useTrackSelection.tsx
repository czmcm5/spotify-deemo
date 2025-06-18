import { createContext, ReactNode, useContext, useState } from "react";

interface TrackSelectedContextType {
  trackUri: string | null;
  playlist_id: string | null;
  selectTrack: (uri: string | null) => void;
  selectPlaylist: (id: string | null) => void;
}

const TrackSelectedContext = createContext<
  TrackSelectedContextType | undefined
>(undefined);

export const TrackSelectedProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [trackUri, setTrackUri] = useState<string | null>(null);
  const [playlist_id, setPlaylist_id] = useState<string | null>(null);

  const selectTrack = (uri: string | null) => setTrackUri(uri);
  const selectPlaylist = (id: string | null) => setPlaylist_id(id);

  const value = { trackUri, playlist_id, selectTrack, selectPlaylist };

  return (
    <TrackSelectedContext.Provider value={value}>
      {children}
    </TrackSelectedContext.Provider>
  );
};

export const useTrackSelected = () => {
  const context = useContext(TrackSelectedContext);
  if (!context)
    throw new Error("useTrackSelected must be used within OnSearchProvider");
  return context;
};
