import React, { useState, useEffect } from 'react';

export const ImageSlider: React.FC = () => {
  const slides = [
    {
      imageUrl: "https://images.pexels.com/photos/3913295/pexels-photo-3913295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Deliciosos pasteles artesanales",
      subtitle: "Hechos con los mejores ingredientes y mucho amor"
    },
    {
      imageUrl: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Celebraciones especiales",
      subtitle: "Creaciones personalizadas para tus momentos más importantes"
    },
    {
      imageUrl: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Postres de temporada",
      subtitle: "Sabores frescos y novedosos cada temporada"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="object-cover w-full h-full"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-4">
            <h1 className="font-accent text-5xl md:text-7xl text-white mb-4 animate-float">
              {slide.title}
            </h1>
            <p className="font-body text-xl md:text-2xl text-white max-w-2xl">
              {slide.subtitle}
            </p>
            <button className="mt-8 bg-primary-500 hover:bg-primary-600 text-white font-body px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Ver Productos
            </button>
          </div>
        </div>
      ))}

      {/* Slider indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-primary-500 w-10' : 'bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};