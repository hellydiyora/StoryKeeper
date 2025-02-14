import React, { useState } from "react";
import Logo from "../assets/logo.png";
import profile from "../assets/Icons/profile.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#4A4947] font-delius fixed top-0 w-full">
      <div className="flex justify-between items-center py-2 px-4 md:px-6">
        
        <Link to="/">
          <img src={Logo} alt="logo" className="h-14 w-20 cursor-pointer" />
        </Link>
        
      
        <ul className="hidden cust:flex space-x-20 text-[#FFF2D8] font-medium">
          <Link to="/collections" className="cursor-pointer">Collection</Link>
          <Link to="/affirmation" className="cursor-pointer">Affirmations</Link>
          <Link to="/shelf" className="cursor-pointer">Book Shelf</Link>
          <Link to="/blog" className="cursor-pointer">Blogs</Link>
        </ul>
        
      
        <div className="flex items-center gap-4">
          <img src={profile} alt="user" className="h-10 w-10 cursor-pointer" />
          <button className="cust:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white h-8 w-8" /> : <Menu className="text-white h-8 w-8" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="cust:hidden flex flex-col items-center bg-[#4A4947] text-[#FFF2D8] font-medium py-4 space-y-4">
          <Link to="/collections" onClick={() => setIsOpen(false)}>Collection</Link>
          <Link to="/affirmation" onClick={() => setIsOpen(false)}>Affirmations</Link>
          <Link to="/shelf" onClick={() => setIsOpen(false)}>Book Shelf</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blogs</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
