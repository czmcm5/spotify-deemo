import { useEffect, useState } from "react";

const useOnSearch = ({ playlist_id }: { playlist_id: string }) => {
  const [onSearch, setOnSearch] = useState(false);

  useEffect(() => {
    setOnSearch(false);
  }, [playlist_id]);

  const updateOnSearch = (state: "on" | "off") => {
    if (state === "on") return setOnSearch(true);
    setOnSearch(false);
  };

  return { onSearch, updateOnSearch };
};

export default useOnSearch;
