
import React from 'react';
import { LeafIcon, ShieldCheckIcon } from '../constants';

const WhyUsPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://picsum.photos/seed/whyus/1920/1080"
                        alt="Team collaborating in a modern office"
                        className="w-full h-full object-cover object-center"
                    />
                     <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
                </div>
                <div className="relative mx-auto max-w-xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Vision: A Better Way to Work</h2>
                    <p className="mt-6 text-xl text-gray-200">
                        To create a world where people work to make a life, not just a living.
                    </p>
                </div>
            </div>

            {/* Mission & Quality Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <div>
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.002 8.002 0 0117.657 18.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </div>
                            <h3 className="mt-5 text-2xl font-bold text-gray-900">Our Mission</h3>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-span-2">
                             <p className="text-lg text-gray-600">
                               We are dedicated to building more than just workspaces. We build communities. We foster environments where startups can scale, freelancers can connect, and remote workers can find a professional home. We adapt with tech-driven solutions to support sustainable growth for our members and our planet.
                            </p>
                        </div>
                    </div>
                     <div className="mt-16 bg-secondary p-8 rounded-lg">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900">We Obsess Over the Details</h3>
                            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                                We believe a great workday is built on a foundation of reliability. That's why we obsess over quality control, from ensuring lightning-fast Wi-Fi that never drops to making sure there are always working markers and clean whiteboards in every single room. It's the little things that make a big difference, and we're committed to getting them right, every time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
             {/* Market Trends / Commitments Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Committed to a Modern Future</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        We're not just keeping up with market trends; we're setting them.
                    </p>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="text-left p-8 border rounded-lg">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-700">
                               <LeafIcon />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-gray-900">Sustainability & Eco-Friendly Practices</h3>
                            <p className="mt-2 text-gray-600">
                                We're committed to reducing our environmental footprint. Our spaces feature energy-efficient lighting, recycling programs, sustainable materials, and partnerships with local, eco-conscious vendors.
                            </p>
                        </div>
                        <div className="text-left p-8 border rounded-lg">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700">
                               <ShieldCheckIcon />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-gray-900">Health & Safety First</h3>
                            <p className="mt-2 text-gray-600">
                                Your well-being is our top priority. We adhere to the highest standards of cleanliness with enhanced cleaning protocols, provide spacious layouts that allow for social distancing, and utilize modern air filtration systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default WhyUsPage;
