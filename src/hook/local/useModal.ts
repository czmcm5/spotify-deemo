import { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);
  const open_modal = () => setOpen(true);

  const close_modal = (f?: () => void): void => {
    setOpen(false);
    if (f) f();
  };

  return { open, close_modal, open_modal };
};
export default useModal;
