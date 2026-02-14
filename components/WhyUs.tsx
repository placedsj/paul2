import React from 'react';
import { ShieldCheck, Clock, Star } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: 'licensed',
    title: 'Licensed & Insured',
    description: 'Fully licensed in New Brunswick with comprehensive liability insurance for your complete peace of mind.',
    icon: ShieldCheck,
  },
  {
    id: 'warranty',
    title: '10-Year Warranty',
    description: 'We stand behind our craftsmanship. Every full installation comes with our exclusive 10-year labor warranty.',
    icon: Clock,
  },
  {
    id: 'rated',
    title: 'Top-Rated Pros',
    description: 'Voted #1 in Southern NB. Our team brings over 35 years of hands-on experience to every project.',
    icon: Star,
  },
];

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-navy-800 relative text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-black uppercase mb-4">
                Why Choose Us
            </h2>
             <div className="w-24 h-1 bg-accent-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {features.map((feature) => (
                <div key={feature.id} className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
                        <feature.icon size={40} className="text-navy-900" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-display font-bold uppercase mb-4">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};