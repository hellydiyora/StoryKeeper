import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedBooks from '../components/home/FeaturedBooks';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedBooks />
    </div>
  );
};

export default Home;