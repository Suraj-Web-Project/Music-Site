import React, { useState } from 'react';
import { SectionHeader } from '../../common/SectionHeader';
import { MoodClapperboard } from '../../common/MoodClapperboard';
import { moodBasedPlaylistsData } from './MoodBasedPlaylistsData';

export const MoodBasedPlaylists = () => {
  const [selectedMood, setSelectedMood] = useState(moodBasedPlaylistsData.defaultMood || 'Happy');

  return (
    <section 
      id="mood-based-playlists"
      aria-label="Mood-Based Playlists" 
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-12 lg:mt-16 select-none scroll-mt-24"
    >
      {/* Signature Section Header */}
      <SectionHeader 
        titlePrefix={moodBasedPlaylistsData.titlePrefix} 
        titleAccent={moodBasedPlaylistsData.titleAccent} 
        subtitle={moodBasedPlaylistsData.subtitle} 
      />

      {/* Main Showcase Container */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl border border-purple-200/70 bg-gradient-to-b from-purple-50/70 via-pink-50/30 to-white/90 p-4 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center text-center shadow-[0_12px_40px_rgba(168,85,247,0.08)] backdrop-blur-xs overflow-hidden">
        {/* Soft Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[680px] lg:w-[950px] h-[480px] sm:h-[680px] lg:h-[950px] bg-gradient-to-tr from-purple-400/20 via-pink-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* 3D Clapperboard Showcase with 8 Interactive Moods */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <MoodClapperboard 
            selectedMood={selectedMood}
            onSelectMood={setSelectedMood}
            className="w-full max-w-[420px] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[920px] xl:max-w-[980px] h-auto"
          />

          {/* Active Mood Pill / Helper Status */}
          <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-purple-100 shadow-sm backdrop-blur-md transition-all duration-300">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-purple-950">
              Playing soundtrack for: <span className="text-pink-600 font-bold">{selectedMood}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodBasedPlaylists;
