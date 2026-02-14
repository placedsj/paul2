import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt917YFPL8g61_QAIrQwfsDdufxrHbcPTW2I5jbdJxZFnuEaJirxkZ-9pk3PZwTU447mANDiKPoG97po4w23myTUzNcNcGJVDp_MWEIdGlszfSFBccGrEZ1R4SW-tXawIH8A5xPmVi5KIBDhrLgBxb78I4QeIltitof_SwsTz-tpyGX68I0RbxvsmVPugy5ERisAv0GdGH0FhLc_86iak29NpBTHPLXbLMEPmpC5XdrSSamfCyp43AlhqkL5ezMci0wUmyapF2kb89"
          alt="Paul Roofs Hero"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-navy-900/30"></div>
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy-900 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 mb-6 border border-accent-orange/50 rounded-full bg-accent-orange/10 backdrop-blur-sm">
                <span className="text-accent-orange font-bold uppercase text-xs tracking-widest">Serving Southern NB for 35 Years</span>
            </div>
          <h1 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.9] text-white mb-8 drop-shadow-2xl">
            Reliable <br />
            Roofing <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-orange-300">Solutions</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light mb-10 max-w-xl leading-relaxed border-l-4 border-accent-orange pl-6">
            Expert services in Damascus, NB. Built on quality, integrity, and superior craftsmanship. <span className="text-accent-orange font-bold">#BetterCallPaul</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
                href="#contact"
                className="bg-accent-orange text-white px-10 py-5 font-display font-bold uppercase tracking-widest text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-xl shadow-orange-900/20 text-center"
            >
                Get a Free Quote
            </a>
            <a
                href="#projects"
                className="border border-white/20 text-white px-10 py-5 font-display font-bold uppercase tracking-widest text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center"
            >
                View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};