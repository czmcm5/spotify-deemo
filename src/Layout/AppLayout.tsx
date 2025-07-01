import { styled } from "@mui/material";
import { Outlet } from "react-router";
import { AlertProvider } from "../context/AlertProvider";
import AlertBox from "./AlertBox";

import MobileNavibar from "./component/MobileNavibar";
import Topbar from "./component/Topbar";
import SiderBar from "./component/SiderBar";

const AppLayout = () => {
  return (
    <Layout>
      <Topbar />
      <PageContainer>
        <SiderBar />
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
const MainContent = styled("div")`
  flex: 1;
  height: 100%;
  background: linear-gradient(to bottom, #252525, #121212 30%);
  border-radius: 8px;
  overflow: hidden;
`;
