import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import GuitarNavbar from './components/sections/00-GuitarNavbar/GuitarNavbar';
import Hero from './components/sections/01-Hero/Hero';
import TrendingNow from './components/sections/02-TrendingNow/TrendingNow';
import PopularArtists from './components/sections/03-PopularArtists/PopularArtists';
import FeaturedAlbums from './components/sections/04-FeaturedAlbums/FeaturedAlbums';
import ExploreMusicGenres from './components/sections/05-ExploreMusicGenres/ExploreMusicGenres';
import MoodBasedPlaylists from './components/sections/06-MoodBasedPlaylists/MoodBasedPlaylists';
import NewReleases from './components/sections/07-NewReleases/NewReleases';
import TopMusicCharts from './components/sections/08-TopMusicCharts/TopMusicCharts';
import RecentlyPlayed from './components/sections/09-RecentlyPlayed/RecentlyPlayed';
import MadeForYou from './components/sections/10-MadeForYou/MadeForYou';
import RecommendedForYou from './components/sections/11-RecommendedForYou/RecommendedForYou';
import PopularPlaylists from './components/sections/12-PopularPlaylists/PopularPlaylists';
import TopPodcasts from './components/sections/13-TopPodcasts/TopPodcasts';
import FeaturedMusicVideos from './components/sections/14-FeaturedMusicVideos/FeaturedMusicVideos';
import UpcomingMusicReleases from './components/sections/15-UpcomingMusicReleases/UpcomingMusicReleases';
import MusicEventsConcerts from './components/sections/16-MusicEventsConcerts/MusicEventsConcerts';
import PremiumMembership from './components/sections/17-PremiumMembership/PremiumMembership';
import SoundWaveFooter from './components/sections/19-SoundWaveFooter/SoundWaveFooter';
import { ScrollReveal } from './components/common/ScrollReveal';

export default function App() {
  useEffect(() => {
    // Check for browser environment and respect reduced-motion accessibility
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Initialize ultra-smooth inertial momentum scrolling
    const lenis = new Lenis({
      lerp: 0.085,
      autoRaf: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.lenis = lenis;

    // Smooth inertial scrollTo for internal anchor links (#hero, #trending-now, etc.)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, { offset: -80, duration: 1.1 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      delete window.lenis;
      lenis.destroy();
    };
  }, []);

  const handleSearchSubmit = (query) => {
    console.log('Search query:', query);
  };

  const handleProfileSelect = (actionId) => {
    console.log('Profile action:', actionId);
  };

  const handleStartListening = () => {
    const target = document.querySelector('#trending-now') || document.querySelector('#trending');
    if (target && window.lenis) {
      window.lenis.scrollTo(target, { offset: -80, duration: 1.1 });
    }
  };

  const handlePlayTrack = (track) => {
    console.log('Playing track:', track?.title || track);
  };

  const handleSelectArtist = (artist) => {
    console.log('Selected artist:', artist?.name || artist);
  };

  const handlePlayAlbum = (album) => {
    console.log('Playing album:', album?.title || album);
  };

  const handlePlayPlaylist = (playlist) => {
    console.log('Playing playlist:', playlist?.title || playlist);
  };

  const handleUpgrade = () => {
    console.log('Upgrade to Premium clicked');
  };

  return (
    <>
      {/* Main SoundWave Application */}
      <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center pt-4 sm:pt-6 md:pt-8 lg:pt-9 pb-0 overflow-x-hidden">
        {/* Navigation Header: 00. SoundWave Acoustic Guitar Navbar */}
        <div className="relative z-50 w-full flex justify-center animate-page-slide-down">
          <GuitarNavbar
            onSearchSubmit={handleSearchSubmit}
            onProfileSelect={handleProfileSelect}
          />
        </div>

        {/* Main Page Content Sections */}
        <main className="relative z-10 w-full flex flex-col items-center">
          {/* 01. Hero Section */}
          <Hero
            onStartListening={handleStartListening}
          />

          {/* 02. Trending Now */}
          <ScrollReveal>
            <TrendingNow onPlayTrack={handlePlayTrack} />
          </ScrollReveal>

          {/* 03. Popular Artists */}
          <ScrollReveal>
            <PopularArtists onSelectArtist={handleSelectArtist} />
          </ScrollReveal>

          {/* 04. Featured Albums */}
          <ScrollReveal>
            <FeaturedAlbums onPlayAlbum={handlePlayAlbum} />
          </ScrollReveal>

          {/* 05. Explore Music Genres */}
          <ScrollReveal>
            <ExploreMusicGenres />
          </ScrollReveal>

          {/* 06. Mood-Based Playlists */}
          <ScrollReveal>
            <MoodBasedPlaylists />
          </ScrollReveal>

          {/* 07. New Releases */}
          <ScrollReveal>
            <NewReleases />
          </ScrollReveal>

          {/* 08. Top Music Charts */}
          <ScrollReveal>
            <TopMusicCharts />
          </ScrollReveal>

          {/* 09. Recently Played */}
          <ScrollReveal>
            <RecentlyPlayed />
          </ScrollReveal>

          {/* 10. Made For You */}
          <ScrollReveal>
            <MadeForYou onPlayPlaylist={handlePlayPlaylist} />
          </ScrollReveal>

          {/* 11. Recommended For You */}
          <ScrollReveal>
            <RecommendedForYou />
          </ScrollReveal>

          {/* 12. Popular Playlists */}
          <ScrollReveal>
            <PopularPlaylists />
          </ScrollReveal>

          {/* 13. Top Podcasts */}
          <ScrollReveal>
            <TopPodcasts />
          </ScrollReveal>

          {/* 14. Featured Music Videos */}
          <ScrollReveal>
            <FeaturedMusicVideos />
          </ScrollReveal>

          {/* 15. Upcoming Music Releases */}
          <ScrollReveal>
            <UpcomingMusicReleases />
          </ScrollReveal>

          {/* 16. Music Events & Concerts */}
          <ScrollReveal>
            <MusicEventsConcerts />
          </ScrollReveal>

          {/* 17. Premium Membership */}
          <ScrollReveal>
            <PremiumMembership onUpgrade={handleUpgrade} />
          </ScrollReveal>

          {/* 19. SoundWave Footer */}
          <ScrollReveal>
            <SoundWaveFooter />
          </ScrollReveal>
        </main>
      </div>
    </>
  );
}
