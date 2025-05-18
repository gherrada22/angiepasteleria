import React from 'react';
import { Cake, Coffee, IceCream, Croissant } from 'lucide-react';

interface Category {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

export const CategorySection: React.FC = () => {
  const categories: Category[] = [
    {
      name: "Pasteles",
      icon: <Cake className="h-10 w-10" />,
      description: "Deliciosos pasteles para toda ocasión",
      color: "bg-primary-100 text-primary-600",
    },
    {
      name: "Postres",
      icon: <IceCream className="h-10 w-10" />,
      description: "Variedades de postres tradicionales",
      color: "bg-secondary-100 text-secondary-600",
    },
    {
      name: "Panadería",
      icon: <Croissant className="h-10 w-10" />,
      description: "Pan fresco y bollería artesanal",
      color: "bg-accent-100 text-accent-600",
    },
    {
      name: "Bebidas",
      icon: <Coffee className="h-10 w-10" />,
      description: "Cafés y bebidas especiales",
      color: "bg-cream-200 text-neutral-700",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 relative">
          <span className="relative z-10">Nuestras Categorías</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-primary-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="flex flex-col items-center text-center transition-all duration-500 transform hover:scale-105"
              style={{ 
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease forwards'
              }}
            >
              <div className={`${category.color} p-5 rounded-full mb-4`}>
                {category.icon}
              </div>
              <h3 className="font-display text-xl text-neutral-800 mb-2">{category.name}</h3>
              <p className="font-body text-neutral-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};