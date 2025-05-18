import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "María García",
      content: "Los pasteles de Angie son simplemente espectaculares. El pastel que pedí para el cumpleaños de mi hija fue hermoso y delicioso. ¡Todos quedaron encantados!",
      avatarUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      content: "La mejor pastelería de la ciudad. Sus productos son siempre frescos y el servicio es excelente. Recomiendo especialmente los macarons y las tartas de frutas.",
      avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      content: "Pedí un pastel personalizado para mi boda y quedó perfecto. El sabor, la decoración, todo fue tal como lo imaginé. Angie y su equipo son verdaderos artistas.",
      avatarUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5
    },
    {
      id: 4,
      name: "Roberto Sánchez",
      content: "Visito esta pastelería cada semana para comprar pan dulce. Siempre tienen variedades nuevas y todo es delicioso. El ambiente es acogedor y el personal muy amable.",
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  return (
    <section className="py-16 bg-cream-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 relative">
          <span className="relative z-10">Lo que dicen nuestros clientes</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-primary-500"></span>
        </h2>
        
        <div className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h3 className="font-display font-medium text-lg text-neutral-800">{testimonial.name}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < testimonial.rating ? 'text-accent-500 fill-accent-500' : 'text-neutral-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="font-body text-neutral-700 italic">"{testimonial.content}"</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md text-primary-500 hover:text-primary-600 transition-colors focus:outline-none"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md text-primary-500 hover:text-primary-600 transition-colors focus:outline-none"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-primary-500 w-8' : 'bg-neutral-300'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};