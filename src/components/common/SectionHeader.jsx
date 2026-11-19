import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

/* =========================================================================
   REUSABLE SECTION HEADER WITH SCROLL ENTRANCE ANIMATION
   ========================================================================= */

/**
 * SectionHeader: Reusable section header with two-tone gradient title,
 * descriptive subtitle, and interactive carousel navigation arrows.
 * Triggers smooth entrance animation dynamically when scrolled into view.
 */
export const SectionHeader = ({ 
  titlePrefix, 
  titleAccent, 
  subtitle, 
  onPrev, 
  onNext,
  centered = false,
  className = '' 
}) => {
  const [headerRef, inView] = useInView({ threshold: 0.12, triggerOnce: true });

  if (centered) {
    return (
      <div 
        ref={headerRef} 
        className={`flex flex-col items-center justify-center text-center mb-8 sm:mb-10 select-none ${className}`}
      >
        <h2 
          className={`text-3xl sm:text-[38px] font-extrabold tracking-tight leading-tight text-slate-900 transition-all duration-700 ${
            inView ? 'animate-heading-load opacity-100' : 'opacity-0 translate-y-6'
          }`}
        >
          <span>{titlePrefix} </span>
          <span className="bg-gradient-to-r from-[#D946EF] via-[#EF35ED] to-[#FF7A59] bg-clip-text text-transparent">
            {titleAccent}
          </span>
        </h2>
        {subtitle && (
          <p 
            className={`text-xs sm:text-[14.5px] font-medium text-slate-500 mt-2 max-w-lg text-center transition-all duration-700 delay-100 ${
              inView ? 'animate-subheading-load opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div 
      ref={headerRef}
      className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 select-none ${className}`}
    >
      {/* Title & Subtitle */}
      <div>
        <h2 
          className={`text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight leading-tight transition-all duration-700 ${
            inView ? 'animate-heading-load opacity-100' : 'opacity-0 translate-y-6'
          }`}
        >
          <span>{titlePrefix} </span>
          <span className="bg-gradient-to-r from-[#D946EF] via-[#EF35ED] to-[#FF7A59] bg-clip-text text-transparent">
            {titleAccent}
          </span>
        </h2>
        {subtitle && (
          <p 
            className={`text-xs sm:text-[13.5px] font-normal text-slate-500 mt-1 transition-all duration-700 delay-100 ${
              inView ? 'animate-subheading-load opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Controls: Arrow Buttons */}
      {(onPrev || onNext) && (
        <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
          {onPrev && (
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous slide"
              className="
                w-8 h-8 rounded-full border border-slate-200/90 flex items-center justify-center
                text-slate-600 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50/50
                transition-all duration-150 cursor-pointer shadow-2xs active:scale-95
              "
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {onNext && (
            <button
              type="button"
              onClick={onNext}
              aria-label="Next slide"
              className="
                w-8 h-8 rounded-full border border-slate-200/90 flex items-center justify-center
                text-slate-600 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50/50
                transition-all duration-150 cursor-pointer shadow-2xs active:scale-95
              "
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
