
import React from 'react';
import { COMMUNITY_EVENTS } from '../constants';

const CommunityPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Where Collaboration Happens</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Fostering a global network of innovators. Discover our upcoming events and learn how you can host your own.</p>
        </div>
      </div>

      {/* Events Calendar Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Upcoming Events</h3>
          <div className="max-w-4xl mx-auto">
            {COMMUNITY_EVENTS.map((event, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 items-center border-b pb-8">
                <div className="text-center md:text-left">
                  <p className="text-3xl font-extrabold text-primary">{event.date.split(' ')[1]}</p>
                  <p className="text-lg font-semibold text-gray-600">{event.date.split(' ')[0]}</p>
                </div>
                <div className="md:col-span-3">
                  <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-2 bg-primary/10 text-primary`}>
                    {event.type}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                  <button className="mt-4 text-primary font-semibold hover:underline">Register Now &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Hosting Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Host Your Next Event With Us</h3>
              <p className="mt-4 text-lg text-gray-600">
                Our versatile and fully-equipped event spaces are perfect for workshops, product launches, networking events, and more. With flexible layouts, state-of-the-art A/V, and dedicated staff support, we'll help make your event a success.
              </p>
              <button className="mt-8 bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-primary-dark transition-colors">
                Inquire About Hosting
              </button>
            </div>
            <div>
              <img src="https://picsum.photos/seed/event/800/600" alt="Event space" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
