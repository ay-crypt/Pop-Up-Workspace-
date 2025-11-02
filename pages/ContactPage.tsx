
import React, { useState } from 'react';
import { LOCATIONS, PLANS } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    plan: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Book a Tour</h2>
            <p className="mt-4 text-lg text-gray-600">
              The best way to experience Pop-Up Workspace is to see it for yourself. Fill out the form below to schedule a tour with our team.
            </p>
          </div>

          {submitted ? (
            <div className="mt-12 text-center bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-md">
              <h3 className="text-2xl font-bold">Thank You!</h3>
              <p className="mt-2">Your tour request has been received. Our team will contact you shortly to confirm the details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="mt-1">
                  <input type="text" name="phone" id="phone" autoComplete="tel" required value={formData.phone} onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md" />
                </div>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Preferred Location</label>
                <div className="mt-1">
                  <select id="location" name="location" required value={formData.location} onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md">
                    <option value="" disabled>Select a location</option>
                    {LOCATIONS.map(loc => <option key={loc.id} value={loc.name}>{loc.name}</option>)}
                  </select>
                </div>
              </div>
               <div>
                <label htmlFor="plan" className="block text-sm font-medium text-gray-700">Desired Plan</label>
                <div className="mt-1">
                  <select id="plan" name="plan" required value={formData.plan} onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md">
                    <option value="" disabled>Select a plan</option>
                     {PLANS.map(plan => <option key={plan.title} value={plan.title}>{plan.title}</option>)}
                     <option value="Unsure">Unsure</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Submit Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
