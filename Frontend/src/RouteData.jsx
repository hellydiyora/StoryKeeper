import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Collection from "./Components/Collection";
import Navbar from "./Components/Navbar";
import Affirmation from "./Components/Affirmation";
import Shelf from "./Components/Shelf";
import Blogs from "./Components/Blogs";

const RouteData = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/affirmation" element={<Affirmation />} />
        <Route path="/shelf" element={<Shelf />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </Router>
  );
};

export default RouteData;
