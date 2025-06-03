import { styled } from "@mui/material";
import { Outlet } from "react-router";
import NavComponent from "./component/NavComponent";
import LibrayComponent from "./component/LibrayComponent";

const AppLayout = () => {
  return (
    <Layout>
      <SiderBar>
        <NavComponent />
        <LibrayComponent />
      </SiderBar>

      <MainContent>
        <Outlet />
      </MainContent>
    </Layout>
  );
};
export default AppLayout;

const Layout = styled("div")({
  display: "flex",
  width: "100%",
  height: "100vh",
  padding: "8px",
});

const SiderBar = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  minWidth: "16rem",
  flexDirection: "column",
  height: "100%",
  marginRight: "8px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MainContent = styled("div")({
  flex: 3.5,
  padding: "1rem",
  backgroundColor: "#121212",
  borderRadius: "8px",
});
