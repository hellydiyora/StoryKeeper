import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/Images/book1.png";
import Image2 from "../assets/Images/book2.jpg";
import Image3 from "../assets/Images/book3.jpg";
import bgImg from "../assets/Images/bg4.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="w-full h-[90vh] flex flex-col justify-center bg-cover bg-center bg-no-repeat bg-[#dfd7bf]"
        // style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="px-8 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#a96050] font-special">
            A House <span className="text-[#8D493A]">"FULL"</span> of Stories
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium font-delius text-[#884a39] mt-4">
            THERE'S A BOOK FOR THAT!
          </p>
          <Link to="/collections">
            <button className="mt-6 bg-[#7b4232] font-delius text-white text-lg px-6 py-2 rounded-md hover:bg-[#9e695b] transition ease-in-out duration-300">
              VISIT
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#f2ead3] py-16 flex flex-wrap justify-center gap-8 text-lg text-center">
        <div className="flex flex-col items-center">
          <img
            src={Image1}
            alt="Vintage English Literature"
            className="h-64 w-64 object-cover shadow-lg transition-transform transform hover:scale-90"
          />
          <p className="mt-2">Vintage English Literature</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Image2}
            alt="Self Help Novels"
            className="h-64 w-64 object-cover shadow-lg transition-transform transform hover:scale-90"
          />
          <p className="mt-2">Self Help Novels</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Image3}
            alt="Fictional World"
            className="h-64 w-64 object-cover shadow-lg transition-transform transform hover:scale-90"
          />
          <p className="mt-2">Fictional World</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
