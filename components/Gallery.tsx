import React from 'react';

const galleryImages = [
    "https://i.ibb.co/prd4Tj4s/IMG-3653.jpg",
    "https://i.ibb.co/q33vdT3Z/IMG-3650.jpg",
    "https://i.ibb.co/MxyhDNN6/IMG-3295.jpg",
    "https://i.ibb.co/LdFqsZtX/IMG-3724.jpg",
    "https://i.ibb.co/HT0hZdkS/IMG-3781.jpg",
    "https://i.ibb.co/mFJGdwYJ/IMG-3875.jpg",
    "https://i.ibb.co/xtWTGBcF/IMG-1712.jpg",
    "https://i.ibb.co/9K6LCvF/IMG-0706.jpg",
    "https://i.ibb.co/PZqxK90F/IMG-0851.jpg",
    "https://i.ibb.co/SbMWKRD/IMG-2146.jpg",
    "https://i.ibb.co/kdd5rMS/IMG-1713.jpg",
    "https://i.ibb.co/GQDXX7hp/IMG-2135.jpg",
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-navy-800 relative">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold uppercase text-white mb-4">
                    More From Our Portfolio
                </h2>
                 <p className="text-slate-400">Excellence in every shingle.</p>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {galleryImages.map((src, index) => (
                    <div key={index} className="break-inside-avoid overflow-hidden rounded-sm group relative">
                        <img 
                            src={src} 
                            alt={`Paul Roofs Project ${index + 1}`} 
                            className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};
