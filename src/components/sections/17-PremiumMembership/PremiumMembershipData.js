import headphonesImg from '../../../assets/03_Premium_Banner/Headphones_Artwork.png';

export const premiumFeatures = [
  { id: 1, label: 'Ad-free Listening', iconName: 'Ban' },
  { id: 2, label: 'Offline Downloads', iconName: 'Download' },
  { id: 3, label: 'High Quality Audio', iconName: 'Sliders' },
  { id: 4, label: 'Exclusive Content', iconName: 'Sparkles' },
];

export const premiumMembershipData = {
  tag: 'Get Premium',
  title: 'Unleash the Full Sound Experience',
  subtitle: 'Ad-free music, offline listening, higher quality audio and more.',
  cta: {
    label: 'Upgrade Now',
  },
  image: headphonesImg,
  features: premiumFeatures,
};

export default premiumMembershipData;
