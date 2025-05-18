import React from 'react';
import { CategorySection } from '../components/CategorySection';
import { ProductGallery } from '../components/ProductGallery';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { BlogSection } from '../components/BlogSection';
import { ContactForm } from '../components/ContactForm';
import { CustomOrder } from '../components/CustomOrder';

export const Home: React.FC = () => {
  return (
    <div>
      <CategorySection />
      <ProductGallery />
      <CustomOrder />
      <TestimonialCarousel />
      <BlogSection />
      <ContactForm />
    </div>
  );
};