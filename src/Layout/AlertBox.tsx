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
  color: #11da5b;
  background-color: #3d3d3d;
  border-radius: 5px;

  transition: all 0.5s ease;
  opacity: 1;

  &.none {
    bottom: -20%;
    opacity: 0;
  }
`;
