import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/website/logo.png";
import DarkMode from "./DarkMode";
import { FaCartShopping } from "react-icons/fa6";
import UserIcon from "../../assets/website/user .png"; // Ensure correct file path

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Story Sound
            </Link>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className="hidden sm:flex items-center gap-4">
              <li>
                <Link
                  to="/"
                  className="inline-block py-4 px-4 hover:text-primary duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="inline-block py-4 px-4 hover:text-primary duration-200"
                >
                  Shop
                </Link>
              </li>
              <li>
                <a
                  href="#community"
                  className="inline-block py-4 px-4 hover:text-primary duration-200"
                >
                  Community
                </a>
              </li>
              <li>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                  Order
                  <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </li>
              {/* Navigate to Login/Register */}
              <li>
                <Link to="/loginRegister" className="flex items-center">
                  <img
                    src={UserIcon}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
