import { Alert } from "@mui/material";

const ErrorMessage = ({ errMessage }: { errMessage: string }) => {
  return <Alert severity="error">{errMessage} </Alert>;
};

export default ErrorMessage;
