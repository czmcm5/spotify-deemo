import ErrorMessage from "../../Layout/ErrorMessage";
import LoadingBar from "../../style/LoadingBar";

const DataStateRender = ({
  isLoading,
  isError,
  isEmpty = false,
  EmptyComponet,
}: {
  isLoading: boolean;
  isError: Error | null;
  isEmpty?: boolean;
  EmptyComponet?: React.ComponentType;
}) => {
  if (isLoading) return <LoadingBar />;
  if (isError) return <ErrorMessage errMessage={isError.message} />;
  if (isEmpty && EmptyComponet) {
    return <EmptyComponet />;
  }
  return null;
};

export default DataStateRender;
