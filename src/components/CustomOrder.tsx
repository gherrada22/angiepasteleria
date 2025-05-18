import React from 'react';
import { Cake, Clock, Calendar, Sparkles } from 'lucide-react';

export const CustomOrder: React.FC = () => {
  return (
    <section className="py-16 bg-secondary-50 px-4 relative overflow-hidden">
      <div 
        className="absolute -top-20 -right-20 w-64 h-64 bg-secondary-100 rounded-full opacity-50 blur-3xl"
        aria-hidden="true"
      ></div>
      <div 
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-100 rounded-full opacity-40 blur-3xl"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-neutral-800 mb-4">
            ¿Buscas algo especial?
          </h2>
          <p className="font-body text-lg text-neutral-600">
            Personalizamos tu pedido para cualquier ocasión. Desde bodas hasta cumpleaños, 
            creamos pasteles únicos que harán de tu celebración un momento inolvidable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cake className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl text-neutral-800 mb-2">Diseño Personalizado</h3>
            <p className="font-body text-neutral-600">
              Creamos pasteles únicos según tus especificaciones de sabor, tamaño y decoración.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="bg-secondary-100 text-secondary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl text-neutral-800 mb-2">Producción Fresca</h3>
            <p className="font-body text-neutral-600">
              Elaboramos tu pedido el mismo día para garantizar la máxima frescura y sabor.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="bg-accent-100 text-accent-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl text-neutral-800 mb-2">Reserva con Antelación</h3>
            <p className="font-body text-neutral-600">
              Recomendamos hacer tu pedido con al menos 72 horas de anticipación.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="bg-cream-200 text-neutral-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl text-neutral-800 mb-2">Ocasiones Especiales</h3>
            <p className="font-body text-neutral-600">
              Bodas, cumpleaños, bautizos, aniversarios y todo tipo de celebraciones.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-body px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            Solicitar Presupuesto
          </button>
        </div>
      </div>
    </section>
  );
};