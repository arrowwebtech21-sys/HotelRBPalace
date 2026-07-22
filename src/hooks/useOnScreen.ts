import { useEffect, useRef, useState } from 'react';

export function useOnScreen(options: IntersectionObserverInit = { threshold: 0.15 }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    const node = ref.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options.threshold, options.root, options.rootMargin]);

  return [ref, isVisible] as const;
}
