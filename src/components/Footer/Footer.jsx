import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Shop",
    link: "/#Shop",
  },
  {
    title: "Community",
    link: "/#Community",
  },
  {
    title: "About",
    link: "/#About",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        <div className="grid md:grid-cols-4 py-5 gap-4">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[200px]" />
            </h1>
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3"> Story Sound</h1>
          </div>
          <div className="py-8 px-4 flex flex-col text-left">
            <p className="text-gray-1000 text-lg mb-7">
            "Where Every Book Takes You on a Journey Through a Universe of Extraordinary Wonders and Limitless Imagination"
            </p>
            <p className="text-gray-500 text-base">Email: info@example.com</p>
          </div>

          {/* Important Links */}
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
              Important Links
            </h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link, index) => (
                <li key={index} className="cursor-pointer hover:text-primary text-gray-500">
                  <a href={link.link} className="flex items-center">
                    <span>&#11162;</span>
                    <span className="ml-1">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Links */}
          <div className="py-8 px-4">
            <ul className="flex flex-col gap-10">
              <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
              </li>
              <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500">
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
              </li>
              <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500">
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
