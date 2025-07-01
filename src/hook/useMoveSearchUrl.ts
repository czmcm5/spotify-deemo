import { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { useNavigate } from "react-router";

const useMoveSearchUrl = () => {
  const Navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword);

  const updateKeyword = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  useEffect(() => {
    if (debouncedKeyword) {
      Navigate(`/search/${debouncedKeyword}`);
    }
  }, [debouncedKeyword]);

  return { keyword, updateKeyword };
};

export default useMoveSearchUrl;
