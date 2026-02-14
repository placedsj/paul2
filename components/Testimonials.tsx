import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Quispamsis, NB',
    quote: 'Paul came out the same day I called about a leak. The team was professional, cleaned up perfectly, and the roof looks amazing. #BetterCallPaul indeed!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Mike Doucette',
    location: 'Damascus, NB',
    quote: 'Best price in the valley without cutting corners. Paul explained everything clearly and finished the job ahead of schedule.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jennifer Gallant',
    location: 'Sussex, NB',
    quote: 'We hired Paul Roofs for a full metal roof installation. The attention to detail is unmatched. Highly recommend to anyone in Southern NB.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-navy-950 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white mb-4">
                What Neighbors Say
            </h2>
            <div className="flex justify-center gap-1 text-accent-orange">
                {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
                <div key={item.id} className="bg-navy-900 p-10 rounded-sm border border-white/5 relative group hover:border-accent-orange/30 transition-colors">
                    <div className="absolute top-8 right-8 text-navy-800 group-hover:text-accent-orange/10 transition-colors">
                        <Quote size={64} />
                    </div>
                    
                    <div className="flex gap-1 text-accent-orange mb-6 relative z-10">
                        {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                        ))}
                    </div>

                    <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">
                        "{item.quote}"
                    </p>

                    <div className="relative z-10">
                        <h4 className="font-display font-bold text-white uppercase tracking-wide text-lg">
                            {item.name}
                        </h4>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
                            {item.location}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};