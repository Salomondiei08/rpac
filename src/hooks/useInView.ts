import { RefObject, useEffect, useRef, useState } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

const useInView = <T extends HTMLElement>(
  options: UseInViewOptions = { threshold: 0.2, once: true }
): { ref: RefObject<T>; inView: boolean } => {
  const { once = true, ...observerOptions } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInView(true);
        if (once) {
          observer.disconnect();
        }
      } else if (!once) {
        setInView(false);
      }
    }, observerOptions);

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, observerOptions.root, observerOptions.rootMargin, observerOptions.threshold]);

  return { ref, inView };
};

export default useInView;
