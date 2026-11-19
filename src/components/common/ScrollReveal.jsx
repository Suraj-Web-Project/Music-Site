import React from 'react';
import { useInView } from '../../hooks/useInView';

/**
 * ScrollReveal Component
 * Smoothly elevates and reveals content when scrolled into the viewport.
 * Powered by high-performance GPU-accelerated CSS transition classes in index.css.
 */
export const ScrollReveal = ({
  children,
  className = '',
  threshold = 0.06,
  triggerOnce = true,
  style = {},
  ...props
}) => {
  const [ref, inView] = useInView({ threshold, triggerOnce });

  return (
    <div
      ref={ref}
      className={`scroll-reveal w-full ${inView ? 'is-in-view' : ''} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
