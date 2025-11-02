
import React from 'react';
import type { NavLink, Plan, Location, CommunityEvent, Differentiator, Audience, Amenity } from './types';

// SVG Icons
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5h1v5h-1z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-3-5.197M15 21a6 6 0 00-9-5.197" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.172.172a1 1 0 001.414 0l.172-.172a1 1 0 000-1.414l-.172-.172a1 1 0 00-1.414 0l-.172.172a1 1 0 000 1.414zM12 21a9 9 0 100-18 9 9 0 000 18z" />
  </svg>
);

const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
)

const WifiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.555a5.5 5.5 0 017.778 0M12 20.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.222 12.333a11 11 0 0115.556 0" /></svg>;
const CoffeeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8.25l-2.25 2.25m0 0l-2.25 2.25M17.25 10.5l2.25-2.25m0 0l2.25 2.25M17.25 10.5l-2.25-2.25m-10.5 6l2.25-2.25m0 0l2.25-2.25m-2.25 2.25l-2.25 2.25m2.25-2.25l-2.25-2.25M8.25 15l2.25-2.25M12 17.25V6.75" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 12.75a7.5 7.5 0 0015 0v-2.25a2.25 2.25 0 00-2.25-2.25h-1.5a.75.75 0 01-.75-.75V6.75a2.25 2.25 0 00-2.25-2.25h-4.5a2.25 2.25 0 00-2.25 2.25v.75c0 .414-.336.75-.75.75h-1.5a2.25 2.25 0 00-2.25 2.25V12.75z" /></svg>;
const PrinterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6 18.25m10.56 0l-1.14-4.321m-9.42 0a2.25 2.25 0 012.14-2.433h3.48a2.25 2.25 0 012.14 2.433m-7.764 0c-.636 0-1.15.514-1.15 1.15s.514 1.15 1.15 1.15c.636 0 1.15-.514 1.15-1.15s-.514-1.15-1.15-1.15zm12.922 0c-.636 0-1.15.514-1.15 1.15s.514 1.15 1.15 1.15c.636 0 1.15-.514 1.15-1.15s-.514-1.15-1.15-1.15zM6 18.25h12m-12 0v2.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.25M6 18.25v-2.25c0-.621.504-1.125 1.125-1.125h.75" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.75 14.25v-2.25c0-.621-.504-1.125-1.125-1.125h-.75" /></svg>;
const ShieldCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.602-.36-3.112-1.002-4.437m-1.002-4.437A11.959 11.959 0 0012 2.75c-2.432 0-4.695.832-6.402 2.22" /></svg>;

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Locations', path: '/locations' },
  { name: 'Community', path: '/community' },
  { name: 'Why Us', path: '/why-us' },
];

export const PLANS_OVERVIEW = [
    { name: 'Hot Desks', description: 'Flexible access to any open seat in our common areas.', icon: <UsersIcon /> },
    { name: 'Private Offices', description: 'Secure, dedicated spaces for you and your team.', icon: <BuildingIcon /> },
    { name: 'Enterprise Solutions', description: 'Custom-built spaces for larger teams and unique needs.', icon: <GlobeIcon /> },
    { name: 'Event Hosting', description: 'Versatile spaces for workshops, meetups, and conferences.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
];

export const DIFFERENTIATORS: Differentiator[] = [
    { title: 'Premium Amenities, Low Cost', description: 'Enjoy top-tier facilities without the premium price tag. We believe in accessible quality.', icon: <LeafIcon /> },
    { title: 'Rapid Customer Support', description: 'Our dedicated team resolves your queries within minutes, ensuring your workday is seamless.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { title: 'Dedicated On-Site Staff', description: 'Our friendly and professional staff are always on hand to assist with your needs.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { title: 'Hybrid Work Ready', description: 'Our solutions are perfectly designed to support your flexible, hybrid work model.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 16H6a2 2 0 00-2 2v2a2 2 0 002 2h8a2 2 0 002-2v-2a2 2 0 00-2-2z" /></svg> },
];

export const AUDIENCES: Audience[] = [
    { name: 'Startups', description: 'Scalable spaces that grow with your business, from a single desk to a full floor.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
    { name: 'Freelancers', description: 'Inspiring, professional environments to boost productivity and connect with other creatives.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
    { name: 'Remote Workers', description: 'A welcome change of scenery with reliable infrastructure and a vibrant community.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { name: 'Creative Professionals', description: 'Collaborative spaces designed to spark innovation and foster new ideas.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> },
];

export const PLANS: Plan[] = [
  {
    title: 'Hot Desk',
    icon: <UsersIcon />,
    description: 'Perfect for freelancers, remote workers, and those who need a flexible workspace.',
    features: ['Access to common areas', 'High-speed Wi-Fi', 'Complimentary coffee & tea', 'Community event access'],
    pricing: { hourly: 10, daily: 40, monthly: 350 },
  },
  {
    title: 'Private Office',
    icon: <BuildingIcon />,
    description: 'A dedicated, secure space for you and your team to focus and collaborate.',
    features: ['All Hot Desk benefits', 'Lockable, private space', '24/7 Access', 'Mail & package handling', 'Meeting room credits'],
    pricing: { hourly: 0, daily: 0, monthly: 800 },
  },
  {
    title: 'Enterprise Solution',
    icon: <GlobeIcon />,
    description: 'A custom-built, branded office for larger teams with unique requirements.',
    features: ['All Private Office benefits', 'Custom branding', 'Private amenities', 'Dedicated IT support', 'Flexible lease terms'],
    pricing: { hourly: 0, daily: 0, monthly: 0 }, // Custom pricing
  },
];

export const AMENITIES: Amenity[] = [
    { name: 'High-Speed WiFi', icon: <WifiIcon /> },
    { name: 'Gourmet Coffee & Tea', icon: <CoffeeIcon /> },
    { name: 'Printing & Scanning', icon: <PrinterIcon /> },
    { name: 'Private Phone Booths', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
    { name: 'Meeting Rooms', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> },
    { name: 'Event Space', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { name: '24/7 Access', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { name: 'Secure Storage', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
];

export const LOCATIONS: Location[] = [
  {
    id: 1,
    name: 'Downtown Hub',
    address: '123 Main Street, Metropolis, USA 10001',
    mapLink: 'https://www.google.com/maps',
    image: 'https://picsum.photos/seed/location1/800/600',
    hours: 'Mon-Fri, 8:00 AM - 9:00 PM',
    parking: {
      onsite: 'On-site garage available for members ($15/day).',
      nearby: 'Public garage at 125 Central Ave (2 min walk).',
      street: 'Metered street parking available on Main St & 1st Ave.',
    },
    transit: ['Metro: Central Station (Red Line)', 'Bus: Routes 5, 12, 45'],
  },
  {
    id: 2,
    name: 'Tech Corridor Campus',
    address: '456 Innovation Drive, Silicon Valley, USA 94043',
    mapLink: 'https://www.google.com/maps',
    image: 'https://picsum.photos/seed/location2/800/600',
    hours: 'Mon-Sun, 24/7 Access for Members',
    parking: {
      onsite: 'Free, dedicated on-site parking lot for all members.',
      nearby: 'Additional parking available at the Tech Park complex.',
      street: 'Limited street parking on Innovation Drive.',
    },
    transit: ['Light Rail: Innovation Center Stop', 'Shuttle: Tech Park Express'],
  },
    {
    id: 3,
    name: 'Creative Quarter Loft',
    address: '789 Artistry Alley, Brooklyn, USA 11201',
    mapLink: 'https://www.google.com/maps',
    image: 'https://picsum.photos/seed/location3/800/600',
    hours: 'Mon-Sat, 9:00 AM - 10:00 PM',
    parking: {
      onsite: 'No on-site parking available.',
      nearby: 'Multiple paid lots within a 5-minute walk. Best rate at "ParkRight" on 4th St.',
      street: 'Street parking is highly competitive; best for short-term stays.',
    },
    transit: ['Subway: Lines A, C, F at Jay St-MetroTech', 'Bus: B57, B62'],
  },
];

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  { date: 'OCT 25', title: 'Productivity Workshop: The Pomodoro Technique', description: 'Learn how to maximize your focus and get more done in less time with this interactive workshop.', type: 'Workshop' },
  { date: 'NOV 02', title: 'Founder Friday: Networking Mixer', description: 'Connect with fellow entrepreneurs, share ideas, and build your network over complimentary drinks and snacks.', type: 'Networking' },
  { date: 'NOV 15', title: 'Remote Work Meetup', description: 'A casual get-together for remote workers to socialize, share experiences, and combat the isolation of working from home.', type: 'Meetup' },
  { date: 'NOV 28', title: 'Business Strategy Mastermind', description: 'Join a small group of business owners to tackle challenges and brainstorm solutions in a structured mastermind session.', type: 'Mastermind' },
];

export {
    BuildingIcon, UsersIcon, GlobeIcon, LeafIcon, CheckCircleIcon, WifiIcon, CoffeeIcon, PrinterIcon, ShieldCheckIcon
};
