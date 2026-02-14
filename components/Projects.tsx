import React from 'react';
import { ProjectItem } from '../types';
import { MapPin } from 'lucide-react';

const projects: ProjectItem[] = [
  {
    id: '1',
    title: 'Premium Shingle Installation',
    location: 'Southern NB',
    category: 'Residential',
    image: 'https://i.ibb.co/twD3YQMk/1-EE60-D5-A-5018-410-C-9-D26-87-A480-F91-ADF.jpg',
  },
  {
    id: '2',
    title: 'Complete Roof Replacement',
    location: 'Sussex Area',
    category: 'Replacement',
    image: 'https://i.ibb.co/qMKDPffV/IMG-3789.jpg',
  },
  {
    id: '3',
    title: 'Modern Home Roofing',
    location: 'Kennebecasis Valley',
    category: 'New Construction',
    image: 'https://i.ibb.co/DDHqSZwV/IMG-1572.jpg',
  },
  {
    id: '4',
    title: 'Detail Flashing Work',
    location: 'Hampton, NB',
    category: 'Repair & Detail',
    image: 'https://i.ibb.co/3yD0DTqg/88-B0-F4-C9-C9-ED-4-B5-A-A6-F6-DA1-DCD02-EF02.jpg',
  },
  {
    id: '5',
    title: 'Estate Roofing Project',
    location: 'Rothesay, NB',
    category: 'Residential',
    image: 'https://i.ibb.co/Q5kDpM9/IMG-6813.jpg',
  },
  {
    id: '6',
    title: 'High-Pitch Installation',
    location: 'Southern NB',
    category: 'Specialty',
    image: 'https://i.ibb.co/zW6YpbDW/5-B01-CD85-2-BCF-4-FEE-94-EC-5403-F87-D2-F6-B.png',
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-navy-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
             <h2 className="text-5xl md:text-6xl font-display font-black uppercase text-white mb-4">
                Recent Projects
            </h2>
            <div className="w-24 h-1 bg-accent-orange"></div>
          </div>
          <p className="text-slate-400 mt-4 md:mt-0 max-w-md text-right">
             Take a look at some of our recent work across Southern New Brunswick. Quality craftsmanship is our signature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-sm cursor-pointer shadow-xl">
                    {/* Image Container */}
                    <div className="aspect-[4/3] overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent opacity-90 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <span className="text-accent-orange font-bold uppercase text-xs tracking-widest mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            {project.category}
                        </span>
                        <h3 className="text-2xl font-display font-bold uppercase text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                            {project.title}
                        </h3>
                         <div className="flex items-center gap-2 text-slate-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                            <MapPin size={14} className="text-accent-orange" />
                            {project.location}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="#gallery" className="inline-block border border-white/20 text-white px-10 py-4 font-display font-bold uppercase tracking-widest hover:bg-white hover:text-navy-900 transition-all duration-300">
                View Full Gallery
            </a>
        </div>
      </div>
    </section>
  );
};