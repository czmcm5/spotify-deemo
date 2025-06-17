import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
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

  const keyword = useMemo(() => {
    try {
      return decodeURIComponent(pathname.replace("/search/", ""));
    } catch (error) {
      console.warn("URL 디코딩 실패:", error);
      return pathname.replace("/search/", "");
    }
  }, [pathname]);

  const selectedFilter = useMemo(
    () => FILTERS.find((opt) => opt.label === menuName),
    [menuName]
  );

  const type = useMemo(
    () =>
      selectedFilter?.types ?? [
        SEARCH_TYPE.Track,
        SEARCH_TYPE.Album,
        SEARCH_TYPE.Artist,
      ],
    [selectedFilter]
  );

  const limit = useMemo(() => (type.length === 1 ? 20 : 6), [type.length]);

  const isSelected = useCallback(
    (label: string) => menuName === label,
    [menuName]
  );

  // setMenuName을 유효성 검사와 함께 래핑
  const handleSetMenuName = useCallback((label: string) => {
    const isValidLabel = FILTERS.some((filter) => filter.label === label);
    if (isValidLabel) {
      setMenuName(label);
    } else {
      console.warn(`유효하지 않은 메뉴 이름: ${label}`);
    }
  }, []);

  const value = useMemo(
    () => ({
      keyword,
      type,
      limit,
      menuName,
      setMenuName: handleSetMenuName,
      isSelected,
    }),
    [keyword, type, limit, menuName, handleSetMenuName, isSelected]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchFilterContext = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error(
      "useSearchFilterContext must be used within a SearchFilterProvider"
    );
  }
  return ctx;
};
