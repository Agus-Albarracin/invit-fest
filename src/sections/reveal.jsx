import React from 'react';
import { useInView } from 'react-intersection-observer';
import './reveal.css';

const Reveal = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`reveal ${inView ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default Reveal;
