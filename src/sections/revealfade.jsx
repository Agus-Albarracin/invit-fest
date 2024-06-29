import React from 'react';
import { useInView } from 'react-intersection-observer';
import './revealfade.css';

const Revealfade = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`revealfade ${inView ? 'activefade' : ''}`}>
      {children}
    </div>
  );
};

export default Revealfade;
