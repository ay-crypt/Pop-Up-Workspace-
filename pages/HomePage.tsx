
import React from 'react';
import { Link } from 'react-router-dom';
import { PLANS_OVERVIEW, DIFFERENTIATORS, AUDIENCES, COMMUNITY_EVENTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img
          src="https://picsum.photos/seed/hero/1920/1080"
          alt="Modern co-working space"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Work to make a life, not just a living.
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium">
            Where Work Meets Community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              Book a Tour
            </Link>
            <Link
              to="/solutions"
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Plans Overview Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Flexible Solutions for Every Need</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Empowering professionals with dynamic office solutions.</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PLANS_OVERVIEW.map((plan) => (
              <div key={plan.name} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto">
                  {plan.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Pop-Up Workspace?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">We're more than just a desk. We're a partner in your success.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Target Audience Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Designed for Innovators Like You</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">A global network of innovators deserves a space to match.</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AUDIENCES.map(audience => (
                 <div key={audience.name} className="text-left bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="text-primary">{audience.icon}</div>
                    <h3 className="mt-4 text-xl font-bold">{audience.name}</h3>
                    <p className="mt-2 text-gray-600">{audience.description}</p>
                 </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join Our Thriving Community</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Connect, collaborate, and grow with like-minded professionals.</p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
            {COMMUNITY_EVENTS.slice(0, 2).map((event) => (
              <div key={event.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">{event.type}</p>
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{event.title}</p>
                      <p className="mt-3 text-base text-gray-500">{event.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-gray-900">{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/community" className="text-primary font-semibold hover:underline">
              View all events &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
