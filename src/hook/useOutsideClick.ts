import { useEffect, useRef } from "react";

/** 모달 바깥을 누르면 모달을 꺼지는 훅 */
const useOutsideClick = (f: () => void) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const click = (e: MouseEvent) => {
    if (itemRef.current && !itemRef.current.contains(e.target as Node)) {
      f();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", click);
    return () => {
      document.removeEventListener("mousedown", click);
    };
  }, [f]);

  return itemRef;
};

export default useOutsideClick;
