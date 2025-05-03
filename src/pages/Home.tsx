import React from 'react';
import Hero from '../Components/home/Hero';
import FeaturedBooks from '../Components/home/FeaturedBooks';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedBooks />
    </div>
  );
};

export default Home;