import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/Images/book1.png";
import Image2 from "../assets/Images/book2.jpg";
import Image3 from "../assets/Images/book3.jpg";
import bgImg from "../assets/Images/bg4.jpg";

const Home = () => {
  return (
    <div className="mt-18 h-[90vh] bg-[#FAF7F0] flex items-center">
      <div className="px-8 md:px-12 lg:px-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#a96050] font-special ">
          A House <span className="text-[#8D493A]">"FULL"</span> of Stories
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-medium font-delius text-[#884a39] mt-4">
          THERE'S A BOOK FOR THAT!
        </p>
        <Link to="/collections">
          <button className="mt-6 bg-[#8D493A] font-delius text-white text-lg px-6 py-2 rounded-md hover:bg-[#b57a6c] cursor-pointer transition ease-in-out duration-300 shadow-md shadow-[#4b3d39]">
            VISIT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
