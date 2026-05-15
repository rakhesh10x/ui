import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PageGateways = () => {
  const [blink, setBlink] = useState(false);

  const handleHover = () => {
    setBlink(false);
    requestAnimationFrame(() => {
      setBlink(true);
      setTimeout(() => {
        setBlink(false);
      }, 400);
    });
  };

  const gateways = [
    {
      title: 'Hardware',
      description: 'Specialized silicon and embedded systems designed to run AI with zero latency.',
      image: '/hardware_gateway_card.png',
      link: '/product',
      buttonText: 'Know more'
    },
    {
      title: 'AI',
      description: 'State-of-the-art foundation models and architectures built for the future of intelligence.',
      image: '/luca-telugu.png',
      link: '/ai',
      buttonText: 'Know more'
    }
  ];

  return (
    <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {gateways.map((gateway, i) => (
          <div 
            key={i} 
            className="group relative"
            onMouseEnter={() => {
              if (i === 1) handleHover();
            }}
          >
            {/* Border Glow Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative h-full bg-[#04040c] border border-white/10 rounded-[32px] overflow-hidden flex flex-col">
              {/* Image/Video Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#04040c] flex items-center justify-center">
                {i === 1 ? (
                  <div className="flex items-center justify-center gap-10 md:gap-12 relative z-10">
                    <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.25),0_0_80px_rgba(255,255,255,0.1)] ${blink ? 'animate-leftReact' : ''}`} style={{ transformOrigin: 'center' }}></div>
                    <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.25),0_0_80px_rgba(255,255,255,0.1)] ${blink ? 'animate-rightBlink' : ''}`} style={{ transformOrigin: 'center' }}></div>
                  </div>
                ) : (
                  <img 
                    src={gateway.image} 
                    alt={gateway.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 65%, transparent 98%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 98%)'
                    }}
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#04040c] via-[#04040c]/60 to-transparent z-20 pointer-events-none"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col items-start flex-grow">
                <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">{gateway.title}</h3>
                <p className="text-[#999] text-[15px] leading-relaxed mb-8 max-w-sm">
                  {gateway.description}
                </p>
                
                <Link 
                  to={gateway.link}
                  className="mt-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span>{gateway.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PageGateways;
