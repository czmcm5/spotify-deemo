import { styled } from "@mui/material";
import { Outlet } from "react-router";
import AlertBox from "./AlertBox";
import Library from "./component/Library/Library";
import LibraryHead from "./component/Library/LibraryHead";
import NavBox from "./component/NavBox";
import Topbar from "./component/Topbar";
import { AlertProvider } from "../context/AlertProvider";

const AppLayout = () => {
  return (
    <Layout>
      <Topbar />

      <PageContainer>
        <SiderBar>
          <NavBox />

          <LibraryBox>
            <LibraryHead />
            <Library />
          </LibraryBox>
        </SiderBar>

        <AlertProvider>
          <MainContent>
            <Outlet />
          </MainContent>

          <AlertBox />
        </AlertProvider>
      </PageContainer>
    </Layout>
  );
};
export default AppLayout;

const Layout = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 8px;
`;
const PageContainer = styled("div")`
  display: flex;
  flex: 1;
  height: 100%;
`;
const SiderBar = styled("div")<{ flex?: number }>`
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
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  color: white;
  background-color: #121212;
  border-radius: 8px;
  overflow: hidden;
`;
const MainContent = styled("div")`
  flex: 3;
  height: 100%;
  background: linear-gradient(to bottom, #252525, #121212 30%);
  border-radius: 8px;
  overflow: hidden;
`;
