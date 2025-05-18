export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isFavorite: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
}