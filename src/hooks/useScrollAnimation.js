import { useEffect } from 'react';

export default function useScrollAnimation(dependency) {
  useEffect(() => {
    // Wait a brief frame for the DOM to fully render after route changes
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );

      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [dependency]);
}
