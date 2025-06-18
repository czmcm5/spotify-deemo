import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface AlertContextType {
  openAlert: "show" | "none";
  message: string;
  showAlert: (text: string, afterFn?: () => void) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [openAlert, setOpenAlert] = useState<"show" | "none">("none");
  const [message, setMessage] = useState("");

  const showAlert = useCallback((text: string, afterFn?: () => void) => {
    setMessage(text);
    setOpenAlert("show");

    setTimeout(() => {
      setOpenAlert("none");
      if (afterFn) afterFn();
    }, 2000);
  }, []);

  const value = {
    openAlert,
    message,
    showAlert,
  };

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export const useAlertMessage = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertMessage must be used within an AlertProvider");
  }
  return context;
};
