import { useState, useEffect } from 'react';

export const useGetWidth = ( windowWidth ) => {

  const [currentWindowWidth, setCurrentWindowWidth] = useState(windowWidth);


  useEffect(() => {
    const handleWindowResize = () => {
      setCurrentWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [
    currentWindowWidth
  ]
}
