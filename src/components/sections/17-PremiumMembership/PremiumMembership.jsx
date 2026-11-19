import React from 'react';
import { Crown, Download, Sliders, Sparkles, Ban } from 'lucide-react';
import { useInView } from '../../../hooks/useInView';
import { premiumMembershipData } from './PremiumMembershipData';

/* =========================================================================
   17. PREMIUM MEMBERSHIP SECTION
   ========================================================================= */

const ICON_MAP = {
  Ban,
  Download,
  Sliders,
  Sparkles,
};

/**
 * PremiumMembership: Full-width dark capsule callout featuring headphones artwork,
 * "Unleash the Full Sound Experience" copy, "Upgrade Now" gradient CTA,
 * and 4 value-prop benefit badges.
 */
export const PremiumMembership = ({ onUpgrade }) => {
  const [bannerRef, inView] = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <section 
      id="premium-membership" 
      aria-label="SoundWave Premium" 
      className="relative w-full max-w-[1620px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-10 sm:mt-12 lg:mt-14 select-none"
    >
      <div className="
        relative w-full rounded-3xl overflow-hidden
        bg-gradient-to-r from-[#140B28] via-[#1B0F38] to-[#120824]
        border border-purple-500/30
        shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(239,53,237,0.15)]
        p-6 sm:p-8 lg:p-10
      ">
        {/* Ambient Glow Orbs */}
        <div 
          className="absolute -left-12 -top-12 w-64 h-64 rounded-full blur-3xl opacity-25 bg-fuchsia-500 pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute right-0 bottom-0 w-80 h-80 rounded-full blur-3xl opacity-20 bg-purple-600 pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Tagline, Button */}
          <div ref={bannerRef} className="lg:col-span-5 flex flex-col justify-center select-none">
            <span className="text-xs sm:text-[13px] font-bold text-fuchsia-400 uppercase tracking-widest">
              {premiumMembershipData.tag}
            </span>

            <h2 className={`text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-tight mt-1.5 transition-all duration-700 ${inView ? 'animate-heading-load opacity-100' : 'opacity-0 translate-y-6'}`}>
              {premiumMembershipData.title}
            </h2>

            <p className={`text-slate-300 text-sm sm:text-[15px] font-normal leading-relaxed mt-2.5 max-w-md transition-all duration-700 delay-100 ${inView ? 'animate-subheading-load opacity-100' : 'opacity-0 translate-y-4'}`}>
              {premiumMembershipData.subtitle}
            </p>

            <div className="mt-6">
              <button
                type="button"
                onClick={onUpgrade}
                className="
                  inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full
                  text-white font-semibold text-sm sm:text-base tracking-wide
                  shadow-[0_8px_24px_rgba(239,53,237,0.5)] hover:shadow-[0_12px_32px_rgba(239,53,237,0.7)]
                  hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer
                "
                style={{
                  background: 'linear-gradient(110deg, #F044ED 0%, #7835FF 55%, #30219E 100%)',
                }}
              >
                <Crown className="w-4 h-4 text-white" />
                <span>{premiumMembershipData.cta.label}</span>
              </button>
            </div>
          </div>

          {/* Center Column: Glowing Headphones Artwork */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-48 sm:w-60 md:w-68 lg:w-72 drop-shadow-[0_12px_32px_rgba(239,53,237,0.4)] transition-transform duration-300 hover:scale-105">
              <img
                src={premiumMembershipData.image}
                alt="Premium Sound Headphones"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column: 4 Feature Badges */}
          <div className="lg:col-span-3 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-3.5">
            {premiumMembershipData.features.map((feat) => {
              const Icon = ICON_MAP[feat.iconName] || Sparkles;

              return (
                <div 
                  key={feat.id} 
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-purple-500/15 backdrop-blur-xs transition-colors hover:bg-white/[0.08]"
                >
                  <div className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-fuchsia-300 shrink-0">
                    <Icon className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </div>

                  <span className="text-xs sm:text-[13px] font-medium text-slate-200 whitespace-nowrap">
                    {feat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const PremiumBanner = PremiumMembership;
export default PremiumMembership;
