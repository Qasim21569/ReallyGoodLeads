import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure page has rendered
    const timer = setTimeout(() => {
      // Scroll to top when route changes
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Smooth scroll for better UX
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 