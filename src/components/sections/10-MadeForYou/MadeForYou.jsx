import React, { useState } from 'react';
import { Heart, Play } from 'lucide-react';
import { SectionHeader } from '../../common/SectionHeader';
import { madeForYouData, madeForYouPlaylists as MADE_FOR_YOU_PLAYLISTS } from './MadeForYouData';

/* =========================================================================
   6. MADE FOR YOU PLAYLISTS SECTION
   ========================================================================= */

/**
 * MadeForYou: Grid of 6 personalized curated playlist cards
 * with moody aesthetic thumbnails, play buttons, and interactive options.
 */
export const MadeForYou = ({ onPlayPlaylist }) => {
  const [likes, setLikes] = useState({});

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="made-for-you" aria-label="Made For You" className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-10 sm:mt-12 lg:mt-14">
      <SectionHeader 
        titlePrefix={madeForYouData.titlePrefix} 
        titleAccent={madeForYouData.titleAccent} 
        subtitle={madeForYouData.subtitle} 
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
        {MADE_FOR_YOU_PLAYLISTS.map((playlist) => {
          const isLiked = !!likes[playlist.id];

          return (
            <div 
              key={playlist.id}
              onClick={() => onPlayPlaylist?.(playlist)}
              className="
                group relative flex flex-col rounded-2xl p-3
                bg-white border border-slate-100
                hover:border-purple-200 hover:shadow-[0_12px_28px_rgba(239,53,237,0.12)]
                hover:-translate-y-1.5 transition-all duration-300
                cursor-pointer select-none
              "
            >
              {/* Playlist Art with Play Button Overlay */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 shadow-sm">
                <img 
                  src={playlist.image} 
                  alt={playlist.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Play Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayPlaylist?.(playlist);
                  }}
                  aria-label={`Play ${playlist.title}`}
                  className="
                    absolute right-2.5 bottom-2.5 w-10 h-10 rounded-full
                    bg-gradient-to-r from-[#D946EF] to-[#FF7A59]
                    text-white shadow-lg flex items-center justify-center
                    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                    hover:scale-110 active:scale-95 transition-all duration-300 ease-out cursor-pointer
                  "
                >
                  <Play className="w-4 h-4 fill-white translate-x-0.5" />
                </button>
              </div>

              {/* Playlist Info */}
              <div className="mt-3 flex items-start justify-between gap-1 min-w-0">
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-slate-800 truncate group-hover:text-purple-600 transition-colors">
                    {playlist.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                    {playlist.subtitle}
                  </p>
                </div>

                {/* Context Action (Like Heart) */}
                <button
                  type="button"
                  onClick={(e) => toggleLike(e, playlist.id)}
                  aria-label={isLiked ? "Unlike playlist" : "Like playlist"}
                  className={`
                    p-1 rounded-full transition-colors shrink-0 mt-0.5 cursor-pointer
                    ${isLiked ? 'text-red-500' : 'text-slate-300 hover:text-slate-500'}
                  `}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MadeForYou;
