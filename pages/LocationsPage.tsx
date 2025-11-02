
import React from 'react';
import { LOCATIONS } from '../constants';

const LocationsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Spaces</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Find a Pop-Up Workspace near you. Each location is uniquely designed to inspire creativity and productivity.</p>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {LOCATIONS.map((location, index) => (
            <div key={location.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                <img src={location.image} alt={location.name} className="rounded-lg shadow-xl w-full h-full object-cover"/>
              </div>
              <div className={index % 2 !== 0 ? 'md:col-start-1' : ''}>
                <h3 className="text-3xl font-bold text-gray-900">{location.name}</h3>
                <p className="mt-2 text-lg text-gray-600">{location.address}</p>
                <a href={location.mapLink} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline mt-1 inline-block">View on Map &rarr;</a>
                
                <div className="mt-6 border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-gray-800">Hours</h4>
                    <p className="text-gray-600">{location.hours}</p>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Parking & Transit Guide</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.944 9.056c0 4.364-6.944 11.944-6.944 11.944s-6.944-7.58-6.944-11.944a6.944 6.944 0 1113.888 0zm-6.944 3.472a3.472 3.472 0 100-6.944 3.472 3.472 0 000 6.944z" /></svg>
                        </div>
                        <div className="ml-3">
                            <h5 className="font-semibold">Parking Information</h5>
                            <p className="text-sm text-gray-600">
                                <strong className="text-gray-700">On-Site:</strong> {location.parking.onsite}<br />
                                <strong className="text-gray-700">Nearby:</strong> {location.parking.nearby}<br />
                                <strong className="text-gray-700">Street:</strong> {location.parking.street}
                            </p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-primary mt-1">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3 3.75A.75.75 0 013.75 3h16.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-2.586l-1.97 1.97a.75.75 0 01-1.06 0L13.836 15H10.164l-1.97 1.97a.75.75 0 01-1.06 0L5.164 15H3.75a.75.75 0 01-.75-.75V3.75zm15.75 3a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="ml-3">
                            <h5 className="font-semibold">Public Transit Access</h5>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                                {location.transit.map(line => <li key={line}>{line}</li>)}
                            </ul>
                        </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
