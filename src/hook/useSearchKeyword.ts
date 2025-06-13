import { ChangeEvent, useState } from "react";
import { SEARCH_TYPE } from "../models/search";

const useSearchKeyword = () => {
  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState<SEARCH_TYPE>(SEARCH_TYPE.Track);

  const updateKeyword = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const changeSearchType = (e: ChangeEvent<HTMLSelectElement>) =>
    setSearchType(e.target.value as SEARCH_TYPE);

  return {
    keyword: {
      value: keyword,
      onchange: updateKeyword,
    },
    searchType: {
      value: searchType,
      onchange: changeSearchType,
    },
  };
};

export default useSearchKeyword;
