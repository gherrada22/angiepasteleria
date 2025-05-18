import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

export const ProductGallery: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Pastel de Chocolate",
      description: "Delicioso pastel de chocolate con ganache y frutos rojos",
      price: 28.99,
      imageUrl: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Pasteles",
      isFavorite: true
    },
    {
      id: 2,
      name: "Cupcakes Variados",
      description: "Set de 6 cupcakes con diferentes sabores y decoraciones",
      price: 15.99,
      imageUrl: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Postres",
      isFavorite: false
    },
    {
      id: 3,
      name: "Tarta de Fresas",
      description: "Tarta de crema con fresas frescas de temporada",
      price: 24.99,
      imageUrl: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Pasteles",
      isFavorite: false
    },
    {
      id: 4,
      name: "Macarons Surtidos",
      description: "Caja de 12 macarons con sabores variados",
      price: 18.99,
      imageUrl: "https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Postres",
      isFavorite: true
    },
    {
      id: 5,
      name: "Croissants Recién Horneados",
      description: "Pack de 4 croissants clásicos de mantequilla",
      price: 9.99,
      imageUrl: "https://images.pexels.com/photos/687012/pexels-photo-687012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Panadería",
      isFavorite: false
    },
    {
      id: 6,
      name: "Galletas Decoradas",
      description: "Set de galletas artesanales decoradas a mano",
      price: 12.99,
      imageUrl: "https://images.pexels.com/photos/806361/pexels-photo-806361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Postres",
      isFavorite: false
    },
    {
      id: 7,
      name: "Cheesecake de Frutos Rojos",
      description: "Tarta de queso con coulis de frutos rojos",
      price: 26.99,
      imageUrl: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Pasteles",
      isFavorite: false
    },
    {
      id: 8,
      name: "Pan Artesanal",
      description: "Pan de masa madre con corteza crujiente",
      price: 7.99,
      imageUrl: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Panadería",
      isFavorite: false
    },
  ];

  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Pasteles', 'Postres', 'Panadería'];

  const filteredProducts = filter === 'Todos'
    ? products
    : products.filter(product => product.category === filter);

  return (
    <section id="productos" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-4 relative">
          <span className="relative z-10">Nuestros Favoritos</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-primary-500"></span>
        </h2>
        <p className="text-center font-body text-neutral-600 max-w-2xl mx-auto mb-8">
          Descubre nuestras creaciones más populares, elaboradas con ingredientes seleccionados 
          y la pasión que nos caracteriza.
        </p>
        
        <div className="flex justify-center space-x-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 font-body text-sm ${
                filter === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-body px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Ver Todo el Catálogo
          </button>
        </div>
      </div>
    </section>
  );
};