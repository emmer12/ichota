import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "./icons";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 py-[80px] px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo column */}
          <div>
            <div className=" mb-4">
              <Link to="/" className="text-xl font-bold text-foreground">
                <img src="/images/logo.png" alt="Logo" />
              </Link>
            </div>
            <p className="text-[#F1F1F8]">
              The safe and simple way to buy, sell, bid on new or used items
              anytime, anywhere.
            </p>
          </div>

          {/* Navigation columns */}
          <div>
            <h3 className="font-bold mb-4  text-[#F1F1F8] text-[22px]">
              Important Links
            </h3>
            <ul className="space-y-2">
              <li>
                Email us &nbsp;
                <a href="#" className="text-primary hover:text-white">
                  info@ichota.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                Read our &nbsp;
                <a href="#" className="hover:text-white text-primary">
                  Terms & Conditions
                </a>
                ,&nbsp;
                <a href="#" className="hover:text-white text-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-bold mb-4  text-[#F1F1F8] text-[22px]">
              Social MediaSocial Media
            </h3>
            <ul className=" flex gap-3 socials">
              <li className="h-12 w-12 rounded-full bg-white flex justify-center items-center ">
                <a href="#" className="hover:text-white">
                  <Facebook fill="#262431" height={24} width={24} />
                </a>
              </li>
              <li className="h-12 w-12 rounded-full bg-white flex justify-center items-center ">
                <a href="#" className="hover:text-white">
                  <Instagram fill="#262431" height={24} width={24} />
                </a>
              </li>{" "}
              <li className="h-12 w-12 rounded-full bg-white flex justify-center items-center ">
                <a href="#" className="hover:text-white">
                  <Twitter fill="#262431" height={24} width={24} />
                </a>
              </li>{" "}
              <li className="h-12 w-12 rounded-full bg-white flex justify-center items-center ">
                <a href="#" className="hover:text-white">
                  <Youtube fill="#262431" height={24} width={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
