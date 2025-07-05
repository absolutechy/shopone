import { useEffect } from 'react';

export const useScrollTop = (dependencies: any[]) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, dependencies);
}; 