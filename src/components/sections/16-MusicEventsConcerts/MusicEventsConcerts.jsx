import React from 'react';
import { SectionHeader } from '../../common/SectionHeader';
import { musicEventsConcertsData } from './MusicEventsConcertsData';

export const MusicEventsConcerts = () => {
  return (
    <section 
      id="music-events-concerts"
      aria-label="Music Events & Concerts" 
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-12 sm:mt-16 lg:mt-20 select-none scroll-mt-24"
    >
      {/* Signature Section Header */}
      <SectionHeader 
        titlePrefix={musicEventsConcertsData.titlePrefix} 
        titleAccent={musicEventsConcertsData.titleAccent} 
        subtitle={musicEventsConcertsData.subtitle} 
      />

      {/* Visible Themed Placeholder Container Ready for Custom Design */}
      <div className="w-full rounded-2xl sm:rounded-3xl border-2 border-dashed border-purple-300/70 bg-gradient-to-b from-purple-50/60 via-pink-50/30 to-white/80 p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-[0_4px_24px_rgba(168,85,247,0.06)] backdrop-blur-xs transition-all hover:border-purple-400">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/80 text-purple-700 text-xs sm:text-[13px] font-bold mb-3 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
          <span>{musicEventsConcertsData.badge}</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/90 text-purple-600 font-semibold border border-purple-200/50">
            {musicEventsConcertsData.category}
          </span>
        </div>
        
        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg mb-6">
          {musicEventsConcertsData.note}
        </p>

        {/* 4 Themed Preview Skeleton Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full max-w-4xl">
          {musicEventsConcertsData.events.map((event) => (
            <div 
              key={event.id} 
              className="h-28 sm:h-32 rounded-xl sm:rounded-2xl bg-white/90 border border-purple-100/80 shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3 group cursor-default"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-100 via-pink-100 to-rose-100 flex items-center justify-center text-purple-500 font-bold text-sm shadow-2xs group-hover:scale-110 transition-transform">
                ♫
              </div>
              <div className="w-20 h-2 rounded-full bg-slate-200" />
              <div className="w-12 h-1.5 rounded-full bg-purple-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicEventsConcerts;
