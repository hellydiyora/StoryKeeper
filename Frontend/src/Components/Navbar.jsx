import React from "react";
import Logo from "../assets/logo.png";
import profile from "../assets/Icons/profile.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#4A4947] font-delius ">
      <ul className="list-none grid grid-cols-[30%_60%_10%] py-2 px-2 items-center ">
        <li>
          {" "}
          <Link to="/" className="cursor-default">
            {" "}
            <img
              src={Logo}
              alt="logo"
              className="h-14 w-20 justify-self-start cursor-pointer"
            />
          </Link>
        </li>
        <ul className="grid grid-cols-4 text-[#FFF2D8] font-medium">
          <Link to="/collections" className="cursor-default">
            <li className="cursor-pointer">Collection</li>
          </Link>
          <Link to="/affirmation" className="cursor-default">
            <p className="cursor-pointer">Affirmations</p>
          </Link>

          <Link to="/shelf" className="cursor-default">
            <li className="cursor-pointer">Book shelf</li>
          </Link>
          <Link to="/blog" className="cursor-default">
            <li className="cursor-pointer">Blogs</li>
          </Link>
        </ul>
        <img
          src={profile}
          alt="user"
          className="h-10 w-10 justify-self-end cursor-pointer"
        />
      </ul>
    </div>
  );
};

export default Navbar;
