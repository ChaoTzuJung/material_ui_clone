import { useState, useEffect } from 'react';

export const useLoaded = (src: string): boolean | string => {
  const [loaded, setLoaded] = useState(false as boolean | string);

  useEffect(() => {
    if (!src) {
      return undefined;
    }

    setLoaded(false);

    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded('loaded');
    };

    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded('error');
    };
    image.src = src;

    return () => {
      active = false;
    };
  }, [src]);

  return loaded;
};
