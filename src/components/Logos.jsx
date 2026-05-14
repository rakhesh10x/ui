import React from 'react';

const logos = [
  { src: 'https://i.ibb.co/4w7vRPF9/Activate-Logo-color-white-e1601561941855-removebg-preview.png', alt: 'Activate' },
  { src: 'https://i.ibb.co/xVrHgHw/Amazon-Web-Services-Logo-svg-1-removebg-preview.png', alt: 'AWS' },
  { src: 'https://i.ibb.co/pvVYDJmC/Bharat-AI-Mission-Logo-removebg-preview.png', alt: 'Bharat AI Mission' },
  { src: 'https://i.ibb.co/hJYm1Qcq/Copy-of-IMG-20260409-WA0019-removebg-preview.png', alt: 'Partner' },
  { src: 'https://i.ibb.co/BHBFnLGx/DPIIT-header-removebg-preview.png', alt: 'DPIIT' },
  { src: 'https://i.ibb.co/vxZZr3YS/wehub-logo3-removebg-preview.png', alt: 'WeHub' },
];

const Logos = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-32 bg-purple-500/5 blur-[100px] pointer-events-none"></div>
      
      {/* Structural Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="relative z-10">
        <p className="text-[#A0A0A0] text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-center opacity-80">
          Officially Collaborated & Backed By
        </p>

        <div className="relative w-full overflow-hidden group">
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex items-center">
            {[...Array(4)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex items-center gap-16 md:gap-24 flex-shrink-0 px-12">
                {logos.map((logo, i) => (
                  <div key={i} className="flex items-center justify-center w-24 md:w-32 h-12">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-8 md:max-h-9 w-auto object-contain opacity-50 group-hover:opacity-40 hover:!opacity-100 transition-all duration-500 brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
