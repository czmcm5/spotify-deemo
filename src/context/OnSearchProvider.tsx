import { createContext, ReactNode, useContext, useState } from "react";

interface OnSearchContextType {
  onSearch: boolean;
  updateOnSearch: (state: "on" | "off") => void;
}

const OnSearchContext = createContext<OnSearchContextType | undefined>(
  undefined
);

export const OnSearchProvider = ({ children }: { children: ReactNode }) => {
  const [onSearch, setOnSearch] = useState(false);

  const updateOnSearch = (state: "on" | "off") => {
    setOnSearch(state === "on");
  };

  return (
    <OnSearchContext.Provider value={{ onSearch, updateOnSearch }}>
      {children}
    </OnSearchContext.Provider>
  );
};

export const useOnSearchContext = () => {
  const context = useContext(OnSearchContext);
  if (!context)
    throw new Error("useOnSearchContext must be used within OnSearchProvider");
  return context;
};
