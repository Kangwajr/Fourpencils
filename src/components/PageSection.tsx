import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const PageSection: React.FC<PageSectionProps> = ({ children, className = '', id }) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.3,
  });

  return (
    <section
      id={id}
      ref={elementRef}
      className={`transform-gpu transition-all duration-1000 perspective-1000 ${
        isVisible
          ? 'opacity-100 rotate-x-0'
          : 'opacity-0 rotate-x-90 translate-y-32'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default PageSection;