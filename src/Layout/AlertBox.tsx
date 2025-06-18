import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useAlertMessage } from "../context/AlertProvider";

const AlertBox = () => {
  const { message, openAlert } = useAlertMessage();

  return <MessageBox className={openAlert}>{message}</MessageBox>;
};
export default AlertBox;

const MessageBox = styled(Box)`
  z-index: 12;
  position: absolute;
  bottom: 2%;
  right: 2%;
  padding: 1rem 1.5rem;
  font-size: 700;
  background-color: #666666;
  color: #12ea61;
  border-radius: 5px;

  transition: all 0.5s ease;
  opacity: 1;

  &.none {
    bottom: -20%;
    opacity: 0;
  }
`;
