import styled from "styled-components";

const LoadingBar = () => {
  return (
    <Background>
      <Loding>
        <div className="loading" />
      </Loding>
    </Background>
  );
};
export default LoadingBar;

const Background = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const Loding = styled("div")({
  height: "3rem",
  color: "#858585",

  "& div.loading": {
    width: "30px",
    height: "30px",
    boxSizing: "border-box",
    border: "3px solid rgba(0, 0, 0, 0.3)",
    borderTopColor: "#000000",
    borderRadius: "100%",
    animation: "spin 1s ease-in-out infinite",
  },

  "@keyframes spin": {
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});
