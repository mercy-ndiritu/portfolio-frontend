// src/hooks/useScrollSpy.js
import { useEffect } from 'react';

const useScrollSpy = (headerRef) => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const onScroll = () => {
      let scrollY = window.scrollY;

      sections.forEach((sec) => {
        const offsetTop = sec.offsetTop - 150;
        const sectionHeight = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollY >= offsetTop && scrollY < offsetTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });

      // ✅ Only run if headerRef.current exists
      if (headerRef?.current) {
        headerRef.current.classList.toggle('sticky', scrollY > 100);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [headerRef]);
};

export default useScrollSpy;
