import { styled } from "@mui/material";
import { Outlet } from "react-router";
import NavComponent from "./component/NavComponent";
import LibraryHead from "./component/LibraryHead";
import Library from "./component/Library";
import Topbar from "./component/Topbar";

const AppLayout = () => {
  return (
    <Layout>
      <Topbar />

      <PageContainer>
        <SiderBar>
          <NavComponent />

          <ContentBox flex={1}>
            <LibraryHead />
            <Library />
          </ContentBox>
        </SiderBar>

        <MainContent>
          <Outlet />
        </MainContent>
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
const ContentBox = styled("div")<{ flex?: number }>`
  flex: ${({ flex }) => flex || "initial"};
  width: 100%;
  padding: 1.5rem;
  color: white;
  background-color: #121212;
  border-radius: 8;
`;
const MainContent = styled("div")`
  flex: 3;
  padding: 1rem;
  background: linear-gradient(to bottom, #252525, #121212 30%);
  border-radius: 8px;
`;
