import { useEffect } from 'react';

export const useIntersectionObserver = (refToObserve, callback, options) => {
  const { canRunCallback = true, canSetObserver = true, deps = [] } = options;

  useEffect(() => {
    if (!canSetObserver) return;
    if (refToObserve.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        const element = entries[0];
        if (element.isIntersecting && canRunCallback) {
          callback();
          observer.disconnect();
        }
      });
      observer.observe(refToObserve.current);
    }
  }, deps);
};
