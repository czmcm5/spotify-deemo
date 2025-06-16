import styled from "@mui/styled-engine-sc";
import { LoadingSpinner } from "./LoadingBar";

const LoadState = ({
  isLoading,
  isFinished,
  showText = true,
}: {
  isLoading: boolean;
  isFinished: boolean;
  showText?: boolean;
}) => {
  return (
    <Loding>
      {isLoading ? (
        <LoadingSpinner width={30} height={30} />
      ) : isFinished && showText ? (
        <div>마지막 입니다.</div>
      ) : (
        <></>
      )}
    </Loding>
  );
};

export default LoadState;

const Loding = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  font-size: 14px;
  color: #858585;
`;

export const Observer = styled("div")`
  height: 1rem;
  /* background-color: yellow; */
`;
