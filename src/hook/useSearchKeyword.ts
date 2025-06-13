import { ChangeEvent, useState } from "react";

const useSearchKeyword = () => {
  const [keyword, setKeyword] = useState("");

  const updateKeyword = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  return { keyword, updateKeyword };
};

export default useSearchKeyword;
