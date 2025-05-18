import React from 'react';
import { Product } from '../types';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-0 right-0 p-3">
          <button className="bg-white/90 p-2 rounded-full text-primary-500 hover:text-primary-600 hover:bg-white transition-all">
            <Heart className={`h-5 w-5 ${product.isFavorite ? 'fill-primary-500' : ''}`} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white font-body">{product.description}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-display text-lg font-medium text-neutral-800">{product.name}</h3>
          <span className="font-body font-semibold text-primary-500">${product.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full font-body">
            {product.category}
          </span>
          <button className="bg-primary-500 hover:bg-primary-600 text-white text-sm font-body px-4 py-1.5 rounded-full transition-colors">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};