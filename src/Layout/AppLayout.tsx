import { styled } from "@mui/material";
import { Outlet, useLocation, useParams } from "react-router";
import { AlertProvider } from "../context/AlertProvider";
import AlertBox from "./AlertBox";
import Library from "./component/Library/Library";
import LibraryHead from "./component/Library/LibraryHead";
import MobileNavibar from "./component/MobileNavibar";
import NavBox from "./component/NavBox";
import Topbar from "./component/Topbar";

const AppLayout = () => {
  const { pathname } = useLocation();

  return (
    <Layout>
      <Topbar />

      <PageContainer>
        <SiderBar>
          <NavBox />
          {pathname !== "/playlist" && (
            <LibraryBox>
              <LibraryHead />
              <Library />
            </LibraryBox>
          )}
        </SiderBar>

        <AlertProvider>
          <MainContent>
            <Outlet />
          </MainContent>

          <AlertBox />
        </AlertProvider>
      </PageContainer>

      <MobileNavibar />
    </Layout>
  );
};
export default AppLayout;

const Layout = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  padding: 8px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-bottom: 0;
  }
`;
const PageContainer = styled("div")`
  display: flex;
  flex: 1;
  max-height: 100%;
  overflow: hidden;
`;
const SiderBar = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 16rem;
  max-width: 26rem;
  height: 100%;
  margin-right: 8px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`;
const LibraryBox = styled("div")<{ flex?: number }>`
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  padding: 0.5rem;
  color: white;
  background-color: #121212;
  border-radius: 8px;
  overflow: hidden;
`;
const MainContent = styled("div")`
  flex: 1;
  height: 100%;
  background: linear-gradient(to bottom, #252525, #121212 30%);
  border-radius: 8px;
  overflow: hidden;
`;
