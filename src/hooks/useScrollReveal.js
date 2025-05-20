import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

 export const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    sr.reveal('.reveal-top', { origin: 'top' });
    sr.reveal('.reveal-bottom', { origin: 'bottom' });
    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });
  }, []);
};

export default useScrollReveal;
