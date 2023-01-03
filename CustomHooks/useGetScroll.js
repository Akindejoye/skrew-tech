import { useState, useEffect } from 'react';

export const useGetScroll = ( windowScroll ) => {

  const [currentWindowScroll, setCurrentWindowScroll] = useState(windowScroll);


  useEffect(() => {
    const handleWindowScroll = () => {
      setCurrentWindowScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return [
    currentWindowScroll
  ]
}
