import React from 'react';
import { Hammer, Home, Droplets, Siren, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'repair',
    title: 'Roof Repair',
    description: 'Fix leaks and damage efficiently. We ensure your roof remains watertight and secure against all elements.',
    icon: Hammer,
  },
  {
    id: 'install',
    title: 'New Installation',
    description: 'Durable and stylish roofing systems tailored to your home\'s unique architectural needs and local climate.',
    icon: Home,
  },
  {
    id: 'gutter',
    title: 'Gutter Maint.',
    description: 'Keep your water flow clear. Essential prevention for foundation and landscaping damage with premium gutter systems.',
    icon: Droplets,
  },
  {
    id: 'emergency',
    title: 'Emergency Services',
    description: '24/7 support for urgent repairs. When disaster strikes, we are on the way immediately to protect your home.',
    icon: Siren,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-navy-900 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold uppercase text-white mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-accent-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white p-8 h-96 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-2 rounded-sm shadow-xl"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                    <service.icon size={48} className="text-navy-900 group-hover:text-accent-orange transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-bold uppercase text-navy-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 mt-6">
                 <span className="inline-block text-accent-orange font-bold uppercase text-xs tracking-widest border-b-2 border-transparent group-hover:border-accent-orange transition-all">
                    Learn More
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};