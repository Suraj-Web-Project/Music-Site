import { useState, useEffect, useRef } from 'react';

/**
 * useInView Hook
 * Lightweight, high-performance IntersectionObserver hook for scroll-triggered animations.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility percentage to trigger (default: 0.15)
 * @param {string} options.rootMargin - Margin around the root (default: '0px 0px -50px 0px')
 * @param {boolean} options.triggerOnce - Whether to trigger only once (default: true)
 * @returns {[React.RefObject, boolean]} [ref, isInView]
 */
export function useInView({
  threshold = 0.08,
  rootMargin = '0px 0px -30px 0px',
  triggerOnce = true,
} = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Graceful fallback for environments lacking IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

export default useInView;
