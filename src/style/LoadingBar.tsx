import styled from "styled-components";

const LoadingBar = () => {
  return (
    <Background>
      <Box>
        <LoadingSpinner width={40} height={40} />
      </Box>
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
const Box = styled("div")`
  height: 3rem;
  color: #858585;
`;
export const LoadingSpinner = styled("div")<{ width: number; height: number }>`
  box-sizing: border-box;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border: 4px solid #25c56a54;
  border-top-color: #25c56a;
  border-radius: 100%;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
