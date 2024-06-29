import React from 'react';
import { useInView } from 'react-intersection-observer';
import './revealfadei.css';

const Revealfadei = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`revealfadei ${inView ? 'activefadei' : ''}`}>
      {children}
    </div>
  );
};

export default Revealfadei;
