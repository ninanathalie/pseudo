import { useEffect, useState, useRef, useCallback } from "react";

export const useInfiniteScroll = (totalItems: number) => {
  const [visibleCount, setVisibleCount] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && visibleCount < totalItems) {
        setVisibleCount((prev) => Math.min(prev + 1, totalItems)); // Increase visible items
      }
    },
    [totalItems, visibleCount],
  );

  useEffect(() => {
    if (!loadMoreRef.current) return;

    observerRef.current = new IntersectionObserver(handleIntersect, { threshold: 1 });
    observerRef.current.observe(loadMoreRef.current);

    return () => observerRef.current?.disconnect();
  }, [handleIntersect]);

  return { visibleCount, loadMoreRef };
};
