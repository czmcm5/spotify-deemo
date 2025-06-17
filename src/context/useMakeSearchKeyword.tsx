import React, { createContext, useContext, useState, useMemo } from "react";
import { useLocation } from "react-router";
import { SEARCH_TYPE } from "../models/search";

const FILTERS: { label: string; types: SEARCH_TYPE[] }[] = [
  {
    label: "전체",
    types: [SEARCH_TYPE.Track, SEARCH_TYPE.Album, SEARCH_TYPE.Artist],
  },
  { label: "곡", types: [SEARCH_TYPE.Track] },
  { label: "아티스트", types: [SEARCH_TYPE.Artist] },
  { label: "앨범", types: [SEARCH_TYPE.Album] },
];

interface SearchContextValue {
  menuName: string;
  keyword: string;
  type: SEARCH_TYPE[];
  limit: number;
  setMenuName: (label: string) => void;
  isSelected: (label: string) => boolean;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export const SearchFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { pathname } = useLocation();
  const [menuName, setMenuName] = useState("전체");

  const keyword = decodeURIComponent(pathname.replace("/search/", ""));
  const selectedFilter = FILTERS.find((opt) => opt.label === menuName);
  const type = selectedFilter?.types ?? [];
  const limit = type.length === 1 ? 20 : 6;

  const isSelected = (label: string) => menuName === label;

  const value = useMemo(
    () => ({ keyword, type, limit, menuName, setMenuName, isSelected }),
    [keyword, type, limit, menuName]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchFilterContext = () => {
  const ctx = useContext(SearchContext);
  if (!ctx)
    throw new Error("useSearchContext must be used within a SearchProvider");
  return ctx;
};
