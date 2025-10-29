import { useEffect, useState } from "react";

export function useStickyNav(heroRef) {
  const [isHidden, setHidden] = useState(false);

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "-50px 0px 0px 0px" },
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [heroRef]);

  return { isHidden };
}
