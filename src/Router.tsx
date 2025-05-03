import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import Affirmations from './pages/Affirmations';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/affirmations" element={<Affirmations />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;