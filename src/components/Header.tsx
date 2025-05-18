import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { ImageSlider } from './ImageSlider';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative">
      <Navbar isScrolled={isScrolled} />
      <ImageSlider />
    </header>
  );
};