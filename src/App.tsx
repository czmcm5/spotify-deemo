import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import useExchangeToken from "./query/useExchangeToken";
import LoadingBar from "./style/LoadingBar";

const AppLayout = React.lazy(() => import("./Layout/AppLayout"));
const HomePage = React.lazy(() => import("./page/Home/HomePage"));
const SearchPage = React.lazy(() => import("./page/Search/SearchPage"));
const SearchResult = React.lazy(() => import("./page/Search/SearchResultPage"));
const PlayListPage = React.lazy(() => import("./page/PlayList/PlayListPage"));
const PlayListDetailPage = React.lazy(
  () => import("./page/PlayList/PlayListDetailPage")
);

/*
0. 사이드바
1. 홈 화면
2. search 화면
3. search 결과 화면
4. playlist 상세 화면
5. (모바일) playlist 화면
*/

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");
  let codeVerifier = localStorage.getItem("code_verifier");
  const { mutate: exchangeToken } = useExchangeToken();

  useEffect(() => {
    if (code && codeVerifier) {
      exchangeToken({ code, codeVerifier });
    }
  }, [code, codeVerifier, exchangeToken]);

  return (
    <Suspense fallback={<LoadingBar />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:keyword" element={<SearchResult />} />
          <Route path="/playlist" element={<PlayListPage />} />
          <Route path="playlist/:id" element={<PlayListDetailPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
