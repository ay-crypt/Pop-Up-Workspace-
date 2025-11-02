
import React, { useState } from 'react';
import { PLANS, AMENITIES, CheckCircleIcon } from '../constants';
import type { Plan } from '../types';

type PricingTier = 'hourly' | 'daily' | 'monthly';

const PlanCard: React.FC<{ plan: Plan; tier: PricingTier }> = ({ plan, tier }) => {
    const price = plan.pricing[tier];
    let priceText;

    if (plan.title === 'Enterprise Solution') {
        priceText = <span className="text-3xl font-bold">Custom</span>;
    } else if (price > 0) {
        priceText = (
            <>
                <span className="text-4xl font-extrabold tracking-tight">${price}</span>
                <span className="text-base font-medium text-gray-500">/{tier.replace('ly', '')}</span>
            </>
        );
    } else {
        priceText = null;
    }

    if (!priceText && tier !== 'monthly' && plan.title !== 'Enterprise Solution') return null;

    return (
        <div className="border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col">
            <h3 className="text-lg font-semibold text-primary">{plan.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
            {priceText && (
                <div className="mt-6">
                    <p className="text-gray-900">
                        {priceText}
                    </p>
                </div>
            )}
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                        <CheckCircleIcon />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};


const SolutionsPage: React.FC = () => {
    const [tier, setTier] = useState<PricingTier>('monthly');

    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-secondary py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Find Your Perfect Workspace</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Flexible plans designed for your unique needs. Whether you need a desk for an hour, a day, or a month, we've got you covered.</p>
                </div>
            </div>

            {/* Promotions Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-primary/10 p-8 rounded-lg border border-primary/20 text-center">
                            <h3 className="text-2xl font-bold text-primary">First Purchase Discount!</h3>
                            <p className="mt-2 text-gray-700">Get <span className="font-bold">20% OFF</span> your first booking with us. A warm welcome to the community!</p>
                            <button className="mt-4 bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors">Claim Offer</button>
                        </div>
                        <div className="bg-accent/10 p-8 rounded-lg border border-accent/20 text-center">
                            <h3 className="text-2xl font-bold text-yellow-800">Refer a Friend</h3>
                            <p className="mt-2 text-gray-700">Love our space? Share the love! Get a <span className="font-bold">$50 credit</span> when your referred friend signs up for a monthly plan.</p>
                             <button className="mt-4 bg-accent text-yellow-900 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors">Get Your Code</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex justify-center">
                        <div className="relative flex rounded-full p-1 bg-gray-200">
                            <button onClick={() => setTier('hourly')} className={`${tier === 'hourly' ? 'bg-white shadow' : ''} relative rounded-full py-2 px-6 text-sm font-semibold transition-colors focus:outline-none`}>Hourly</button>
                            <button onClick={() => setTier('daily')} className={`${tier === 'daily' ? 'bg-white shadow' : ''} relative rounded-full py-2 px-6 text-sm font-semibold transition-colors focus:outline-none`}>Daily</button>
                            <button onClick={() => setTier('monthly')} className={`${tier === 'monthly' ? 'bg-white shadow' : ''} relative rounded-full py-2 px-6 text-sm font-semibold transition-colors focus:outline-none`}>Monthly</button>
                        </div>
                    </div>

                    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {PLANS.map((plan) => (
                           <PlanCard key={plan.title} plan={plan} tier={tier} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities Section */}
            <section className="py-24">
                 <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Premium Amenities Included</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Everything you need to have a productive day, and more.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10">
                        {AMENITIES.map((amenity) => (
                            <div key={amenity.name} className="flex flex-col items-center text-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                                    {amenity.icon}
                                </div>
                                <p className="mt-4 font-medium text-gray-800">{amenity.name}</p>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default SolutionsPage;
