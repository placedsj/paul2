import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, X } from 'lucide-react';

export const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

  return (
    <section id="contact" className="relative h-[800px] flex items-center justify-center md:justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
            src="https://i.ibb.co/C3TRXt8p/IMG-1277.png" 
            alt="Paul Roofs Service Area" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Floating Form Card */}
      <div className="relative z-10 w-full max-w-md mr-0 md:mr-24 px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 transform transition-all hover:scale-[1.01]">
            <div className="mb-6 border-b border-gray-100 pb-4">
                 <h3 className="text-2xl font-display font-bold uppercase text-navy-900">Get a Free Quote</h3>
                 <p className="text-slate-500 text-sm font-medium">Serving Southern NB. Will yours be next?</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Your Name *</label>
                    <input 
                        required 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm p-3 text-navy-900 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all"
                    />
                </div>
                
                <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address *</label>
                    <input 
                        required 
                        type="email" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm p-3 text-navy-900 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                    <textarea 
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm p-3 text-navy-900 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all resize-none"
                    ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                    <button 
                        type="button"
                        className="flex-1 px-6 py-3 border border-slate-200 text-slate-600 font-bold uppercase text-sm tracking-wide hover:bg-slate-50 transition-colors rounded-sm"
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit"
                        className="flex-1 bg-accent-orange text-white px-6 py-3 font-bold uppercase text-sm tracking-wide hover:bg-accent-hover transition-colors rounded-sm shadow-lg shadow-orange-500/30 flex justify-center items-center gap-2"
                    >
                        {submitted ? <CheckCircle size={18} /> : "Submit"}
                    </button>
                </div>
            </form>
        </div>

        {/* Floating Info Pilled */}
        <div className="mt-6 flex justify-center">
            <div className="bg-navy-900/90 backdrop-blur text-white px-6 py-3 rounded-full flex items-center gap-4 shadow-xl">
                 <div className="flex items-center gap-2">
                    <Phone size={16} className="text-accent-orange" />
                    <a href="tel:5062714162" className="font-bold text-sm hover:text-accent-orange transition-colors">506-271-4162</a>
                 </div>
                 <div className="w-px h-4 bg-white/20"></div>
                 <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-accent-orange" />
                    <span className="font-bold text-sm">Damascus, NB</span>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};