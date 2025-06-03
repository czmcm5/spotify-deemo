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

const Background = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loding = styled("div")`
  height: 3rem;
  color: #858585;

  & div.loading {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 4px solid #25c56a54;
    border-top-color: #25c56a;
    border-radius: 100%;

    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
