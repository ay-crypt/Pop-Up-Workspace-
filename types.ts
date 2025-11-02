// Fix: Import React types to make JSX-related types available in this .ts file.
import type React from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export interface Plan {
  title: string;
  // Fix: Use React.ReactElement instead of the undefined JSX.Element.
  icon: React.ReactElement;
  description: string;
  features: string[];
  pricing: {
    hourly: number;
    daily: number;
    monthly: number;
  };
}

export interface Location {
  id: number;
  name: string;
  address: string;
  mapLink: string;
  image: string;
  hours: string;
  parking: {
    onsite: string;
    nearby: string;
    street: string;
  };
  transit: string[];
}

export interface CommunityEvent {
  date: string;
  title: string;
  description: string;
  type: string;
}

export interface Differentiator {
  title: string;
  description: string;
  // Fix: Use React.ReactElement instead of the undefined JSX.Element.
  icon: React.ReactElement;
}

export interface Audience {
  name: string;
  description: string;
  // Fix: Use React.ReactElement instead of the undefined JSX.Element.
  icon: React.ReactElement;
}

export interface Amenity {
    name: string;
    // Fix: Use React.ReactElement instead of the undefined JSX.Element.
    icon: React.ReactElement;
}
