import React from 'react';
import { BlogPost } from '../types';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Los secretos de un buen bizcocho esponjoso",
      excerpt: "Descubre los trucos para conseguir bizcochos perfectos y esponjosos en cada horneado. Técnicas profesionales al alcance de tu cocina.",
      imageUrl: "https://images.pexels.com/photos/4686796/pexels-photo-4686796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "12 Oct 2023",
      author: "Angie Rodríguez"
    },
    {
      id: 2,
      title: "Tendencias en decoración de pasteles para 2023",
      excerpt: "Las últimas tendencias en decoración que están revolucionando el mundo de la repostería. Desde lo minimalista hasta lo extravagante.",
      imageUrl: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "28 Sep 2023",
      author: "María López"
    },
    {
      id: 3,
      title: "Postres sin gluten que no te puedes perder",
      excerpt: "Una selección de nuestras mejores recetas sin gluten para que todos puedan disfrutar de la repostería sin preocupaciones.",
      imageUrl: "https://images.pexels.com/photos/4686796/pexels-photo-4686796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "05 Sep 2023",
      author: "Carlos Mendoza"
    }
  ];

  return (
    <section id="blog" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12 relative">
          <span className="relative z-10">Blog & Recetas</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-primary-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <h3 className="font-display text-xl font-medium text-neutral-800 mb-2">
                  {post.title}
                </h3>
                <p className="font-body text-neutral-600 mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href={`#post-${post.id}`} 
                  className="inline-flex items-center font-body font-medium text-primary-500 hover:text-primary-600 transition-colors"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#blog-page" 
            className="inline-block border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-body px-6 py-2 rounded-full transition-all duration-300"
          >
            Ver Todas las Publicaciones
          </a>
        </div>
      </div>
    </section>
  );
};