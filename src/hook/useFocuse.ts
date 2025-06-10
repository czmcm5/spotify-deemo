import { useState } from "react";

const useFouces = () => {
  const [isfocuse, setIsfocuse] = useState<"show" | "none">("none");

  const on = () => setIsfocuse("show");
  const off = () => setIsfocuse("none");

  return { isfocuse, on, off };
};

export default useFouces;
