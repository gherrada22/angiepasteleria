import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-2 overflow-hidden rounded-full">
              <img 
                src="/icon/torta_abajo.png" 
                alt="Angie Pastelería" 
                className="object-cover w-full h-full" 
              />
              </div>
              <div className="flex flex-col">
              <span className="font-accent text-2xl text-primary-300">
                Angie
              </span>
              <span className="font-display text-sm -mt-1 text-primary-200">
                Pastelería
              </span>
              </div>
            </div>
            <p className="font-body text-neutral-300 mb-4">
              Creando momentos dulces desde 2010. Nuestros productos son elaborados con ingredientes de la más alta calidad y mucho amor.
            </p>
            <div className="flex space-x-4">
              <a href="#instagram" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#facebook" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#twitter" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg text-white mb-4 relative inline-block">
              Enlaces Rápidos
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-2 font-body">
              <li>
                <a href="#inicio" className="text-neutral-300 hover:text-primary-300 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#productos" className="text-neutral-300 hover:text-primary-300 transition-colors">Productos</a>
              </li>
              <li>
                <a href="#nosotros" className="text-neutral-300 hover:text-primary-300 transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#blog" className="text-neutral-300 hover:text-primary-300 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contacto" className="text-neutral-300 hover:text-primary-300 transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg text-white mb-4 relative inline-block">
              Horario de Atención
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-2 font-body text-neutral-300">
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>10:00 - 16:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg text-white mb-4 relative inline-block">
              Suscríbete
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-primary-500"></span>
            </h3>
            <p className="font-body text-neutral-300 mb-4">
              Recibe nuestras novedades y promociones exclusivas.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-400 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-r-md transition-colors"
                  aria-label="Suscribirse"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="font-body text-xs text-neutral-400">
              Al suscribirte, aceptas nuestra política de privacidad.
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-sm text-neutral-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Angie Pastelería. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 font-body text-sm text-neutral-400">
            <a href="#privacidad" className="hover:text-primary-300 transition-colors">Privacidad</a>
            <a href="#terminos" className="hover:text-primary-300 transition-colors">Términos</a>
            <a href="#cookies" className="hover:text-primary-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};