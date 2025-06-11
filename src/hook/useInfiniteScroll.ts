import { useEffect } from "react";

const useInfiniteScroll = ({
  page,
  isLoading,
  isFinished,
  onIntersect,
}: {
  page: string;
  isLoading: boolean;
  isFinished: boolean;
  onIntersect: () => void;
}) => {
  useEffect(() => {
    if (isLoading) return;
    if (isFinished) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 0 }
    );

    const observerTarget = document.getElementById(`observer-${page}`);
    if (observerTarget) observer.observe(observerTarget);

    return () => {
      if (observerTarget) observer.unobserve(observerTarget);
    };
  }, [isLoading, isFinished, onIntersect]);
};

export default useInfiniteScroll;
