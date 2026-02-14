import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             <div className="font-display font-bold text-2xl tracking-tighter uppercase text-white mb-2">
                Paul <span className="text-accent-orange">Roofs</span>
            </div>
            <p className="text-slate-500 text-sm mb-4">© 2024 Paul Roofs. Serving Southern NB.</p>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-accent-orange" />
                    <span>Damascus, New Brunswick</span>
                </div>
                <div className="flex items-center gap-2">
                    <Phone size={14} className="text-accent-orange" />
                    <span>506-271-4162</span>
                </div>
            </div>
          </div>

          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-accent-orange transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent-orange transition-colors">Terms</a>
            <a href="#" className="hover:text-accent-orange transition-colors">Sitemap</a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-accent-orange font-bold font-display tracking-widest">#BetterCallPaul</div>
            <div className="flex gap-4">
                {/* Social Placeholders */}
                {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-navy-800 hover:bg-accent-orange flex items-center justify-center text-white transition-colors cursor-pointer">
                    <span className="text-xs">SOC</span>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};