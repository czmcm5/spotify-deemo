import { styled } from "@mui/material";
import { Outlet, useNavigate } from "react-router";

const AppLayout = () => {
  const Navigate = useNavigate();

  return (
    <Layout>
      <ul className="sidebar">
        <li onClick={() => Navigate("/")}>HomePage</li>
        <li onClick={() => Navigate("/search")}>search</li>
        <li onClick={() => Navigate("/search/aaaa")}>SearchWithKeywordPage</li>
        <li onClick={() => Navigate("/playlist")}>playlist</li>
        <li onClick={() => Navigate("/playlist/aa")}>PlayListDetailPage</li>
      </ul>
      <Outlet />
    </Layout>
  );
};
export default AppLayout;

const Layout = styled("div")({
  display: "flex",
  "& .sidebar": {
    width: "200px",
    margin: 0,
    padding: "20px",
    color: "white",
    backgroundColor: "#3d3d3d",
  },
  "& li": {
    marginBottom: "10px",
    cursor: "pointer",
  },
});
